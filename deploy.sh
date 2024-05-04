

docker stop feedoong-frontend
docker rm feedoong-frontend

docker rmi $(docker images jamessoun93/feedoong-frontend -q)

docker pull jamessoun93/feedoong-frontend

docker run --name feedoong-frontend -d -p 3000:3000 jamessoun93/feedoong-frontend:latest

echo "Deployment script executed successfully."
