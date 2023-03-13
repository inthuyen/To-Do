# Dockerized TODO App
This is a dockerized to-do app.

# Running it
Setting up a docker network and a mysql container:
```
docker network create todo-app

docker run -d --network todo-app --network-alias mysql -v todo-mysql-data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=secret -e MYSQL_DATABASE=todos mysql:8.0
```
Run this in the `todo-backend` directory to build the backend image and run it in a container:
```
mvn package

docker build --build-arg DEFAULT_VERSION=0.0.1-SNAPSHOT -t todo-app .

docker run --env SPRING_DATASOURCE_URL=jdbc:mysql://mysql:3306/todos --env SPRING_DATASOURCE_USERNAME=root --env SPRING_DATASOURCE_PASSWORD=secret --env SPRING_JPA_HIBERNATE_DDL-AUTO=update --network todo-app --network-alias todo-backend -dp 8080:8080 todo-app
```

Run this in the `todo-frontend` directory to build the frontend image and run it in a container:
```
docker build --no-cache -t todo-frontend .

docker run -dp 3000:80 --network todo-app todo-frontend
```

The app should then be visible at http://localhost:3000