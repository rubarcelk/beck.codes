# Use an official lightweight Node.js 18 image.
# https://hub.docker.com/_/node
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the listening port
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "run", "start"]
