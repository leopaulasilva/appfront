FROM node:latest as build
WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build -- --configuration production
FROM nginx:stable
COPY --from=build /app/dist/appfront/ /usr/share/nginx/html
EXPOSE 80