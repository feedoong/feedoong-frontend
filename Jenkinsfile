pipeline {
    agent any
    
    environment {
        GIT_REPO_NAME = env.GIT_URL.replaceFirst(/^.*\/([^\/]+?).git$/, '$1')
        GIT_AUTHOR = sh (script: 'git --no-pager show -s --format=%an $GIT_COMMIT', returnStdout: true).trim()
        SLACK_MESSAGE = """\n\n:github: *Repo*: `${env.GIT_REPO_NAME}`\n
:git: *Branch*: `dev`\n
:hammer: *Build Number:* `${env.BUILD_NUMBER}`\n
:man-raising-hand: *Author:*  `${env.GIT_AUTHOR}`\n
:point_right: ${env.BUILD_URL}"""
    }

    stages {
        stage("1. Checkout") {
            steps {
                script { SLACK_EMOJI = ":construction:" }
                slackSend (
                    channel: "#noti-frontend", 
                    message: "${SLACK_EMOJI} *Jenkins Job #${env.BUILD_NUMBER} STARTED* ${SLACK_EMOJI}"
                )
                git branch: "dev",
                credentialsId: "gh_token",
                url: "https://github.com/feedoong/feedoong-frontend.git"
            }
        }
        stage("2. Prep") {
            steps {
                sh """
                    echo 'NEXT_PUBLIC_GOOGLE_CLIENT_ID=1085424381723-6dpgtsr7j2a450d32oda9m9hrrd88qs4.apps.googleusercontent.com' >> ./next-app/.env
                    echo 'NEXT_PUBLIC_GA_TRACKING_ID=G-Q732SG7E7P' >> ./next-app/.env
                    echo 'NEXT_PUBLIC_SENTRY_DSN=https://fb11edb49f624c6e8164745e5dfff3a2@o4504110823899137.ingest.sentry.io/4504110827175936' >> ./next-app/.env
                    echo 'NEXT_PUBLIC_APP_ENV=production' >> ./next-app/.env
                """
            }
        }
        stage("3. Build & Push Docker Image") {
            steps {
                withCredentials([usernamePassword(credentialsId: "dockerhub_account", usernameVariable: "USERNAME", passwordVariable: "PASSWORD")]) {
                    sh """
                        docker login -u $USERNAME -p $PASSWORD
                        cd next-app
                        docker image build -t jamessoun93/feedoong-frontend .
                        docker image push jamessoun93/feedoong-frontend
                    """
                }

            }
        }
        stage("4. Deploy") {
            steps{
                script {
                    sshPublisher(
                        continueOnError: false,
                        failOnError: true,
                        publishers: [
                            sshPublisherDesc(
                                configName: "feedoong-frontend",
                                verbose: true,
                                transfers: [
                                    sshTransfer(
                                        execCommand: "./deploy.sh"
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }
    }
    post {
        always { sendPostSlackMessage("#noti-frontend") }
    }
}

void sendPostSlackMessage(String channel) {
    SLACK_EMOJI = ":rocket:"

    if (currentBuild.currentResult != "SUCCESS") {
        SLACK_EMOJI = ":warning:" 
    }

    slackSend (
        channel: channel,
        message: "${SLACK_EMOJI} *Jenkins Job #${env.BUILD_NUMBER} FINISHED:* `${currentBuild.currentResult}` ${SLACK_EMOJI}${SLACK_MESSAGE}"
    )
}