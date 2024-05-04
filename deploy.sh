

docker stop feedoong-frontend
docker rm feedoong-frontend

docker pull jamessoun93/feedoong-frontend

docker run --name feedoong-frontend -d -p 3000:3000 jamessoun93/feedoong-frontend

echo "Deployment script executed successfully."
