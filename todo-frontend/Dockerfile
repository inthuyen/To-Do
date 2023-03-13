FROM httpd:2.4
ARG BACKEND_URL=localhost:8080
COPY ./app/ /usr/local/apache2/htdocs/
RUN export URL=${BACKEND_URL} ; sed -i "s/http:\/\/localhost:8080/http:\/\/${BACKEND_URL}/g" /usr/local/apache2/htdocs/main.js