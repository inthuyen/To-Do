FROM openjdk:17
ARG DEFAULT_VERSION
ENV VERSION $DEFAULT_VERSION
ADD "target/todo-backend-${VERSION}.jar" "todo-backend-${VERSION}.jar"
EXPOSE 8080
ENTRYPOINT java -Dspring.profiles.active=prod -jar todo-backend-${VERSION}.jar