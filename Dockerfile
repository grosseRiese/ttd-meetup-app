#1 BUILD VUE APP
FROM node:lts-alpine AS build
#RUN npm install -g http-server
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
#EXPOSE 8080
#CMD [ "http-server", "/app/dist" ]

#2 CREATE NGINX SERVER
FROM nginx:1.19.0-alpine as prod-stage
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
