FROM nginx

COPY ./index.html /usr/share/nginx/html/
COPY ./bin /usr/share/nginx/html/bin

RUN chown -R nginx /usr/share/nginx/html
