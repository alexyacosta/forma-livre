FROM node:16-alpine AS node-dependencies
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install

FROM node-dependencies AS build
COPY src ./src
COPY public ./public
RUN npm run build

FROM nginx:1.23.2 AS runtime
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY .config/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
