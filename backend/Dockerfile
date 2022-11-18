FROM node:16-alpine AS node-dependencies
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install --omit=dev

FROM node-dependencies AS build
COPY src ./src
CMD ["node", "src/server.js"]
