FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx-app.conf /etc/nginx/sites-available/

RUN ln -sf /etc/nginx/sites-available/nginx-app.conf /etc/nginx/sites-enabled

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
