FROM node:10.21.0-alpine3.11 AS build-env

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build:prod

FROM nginx:1.13.9-alpine

COPY --from=build-env /app/dist/vpn2go-frontend/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
