FROM node:14-alpine3.12
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY package*.json .
RUN npm install
COPY server.js .
EXPOSE 3001
CMD ["npm", "start"]