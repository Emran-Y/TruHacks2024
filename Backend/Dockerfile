FROM node:18-alpine

WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Command to run the backend application
CMD [ "npm", "start" ]
