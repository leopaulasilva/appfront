FROM node:latest as build
WORKDIR /app
COPY package*.json ./
RUN rm -rf node_modules
RUN npm install
RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-poits
COPY . .
RUN npm run build
FROM nginx:stable
COPY --from=build /app/dist/appfront/ /usr/share/nginx/html
EXPOSE 80