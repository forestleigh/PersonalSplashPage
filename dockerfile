# syntax=docker/dockerfile:1
FROM node:16.16.0
ENV NODE_ENV=production
WORKDIR /app
COPY . .
RUN npm install
CMD ["webpack"]
EXPOSE 3000
ENTRYPOINT ["node", "./server/server.js"]
