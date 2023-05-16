export type AppEnv = 'production' | 'staging' | 'development'

const getAppEnv = (): AppEnv =>
  (process.env.NEXT_PUBLIC_APP_ENV as Exclude<AppEnv, 'development'>) ||
  'development'

export const getApiEndpoint = () => {
  switch (getAppEnv()) {
    case 'production':
    case 'staging':
    case 'development':
    default:
      return 'https://api.feedoong.io/v1'
  }
}

export const getDomainName = () => {
  switch (getAppEnv()) {
    case 'production':
      return 'https://feedoong.io'
    case 'staging':
      return 'https://dev.feedoong.io'
    case 'development':
    default:
      return 'http://localhost:3000'
  }
}
