FROM nginx:1.17.4

ADD index.html /usr/share/nginx/html/
ADD favicon.ico /usr/share/nginx/html/
ADD images /usr/share/nginx/html/images
