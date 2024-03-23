# Base image
FROM node:18-alpine


WORKDIR /app

# install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Command to build the frontend application
CMD [ "npm", "start" ]