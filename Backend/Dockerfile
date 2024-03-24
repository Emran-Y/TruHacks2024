FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
EXPOSE 4003
CMD ["node", "server.js"]