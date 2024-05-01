

docker stop jamessoun93/feedoong-frontend
docker rm jamessoun93/feedoong-frontend

docker pull jamessoun93/feedoong-frontend

docker run -d -p 8080:3000 jamessoun93/feedoong-frontend

echo "Deployment script executed successfully."
