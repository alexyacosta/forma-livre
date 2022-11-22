FROM node:lts-bullseye-slim AS node-dependencies
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN apt-get update \
    && apt-get install gettext-base \
    && npm install

FROM node-dependencies AS build
ARG APP_BACKEND_HOST
ENV APP_BACKEND_HOST=$APP_BACKEND_HOST
ARG APP_BACKEND_PORT
ENV APP_BACKEND_PORT=$APP_BACKEND_PORT

COPY src ./src
COPY public ./public
COPY .config/config.json config_base.json
RUN envsubst < config_base.json > src/config.json \
    && npm run build

FROM nginx:1.23.2 AS runtime
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY .config/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
