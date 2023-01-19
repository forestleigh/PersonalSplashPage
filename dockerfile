# syntax=docker/dockerfile:1
FROM node:16.16
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build
EXPOSE 8081
ENTRYPOINT ["node", "./server/server.js"]
