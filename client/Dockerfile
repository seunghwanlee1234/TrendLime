FROM node:lts as builder

WORKDIR /usr/src/app

COPY . .

RUN ["/usr/local/bin/npm", "install"]
RUN ["/usr/local/bin/npm", "run", "build"]

FROM nginx:latest

COPY nginx/nginx.conf /etc/nginx
COPY nginx/team10-frontend.conf /etc/nginx/conf.d/team10-frontend.conf

WORKDIR /app
COPY --from=builder /usr/src/app/build /app/build

CMD ["nginx", "-g", "daemon off;"]
