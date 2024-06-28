# Specify the Node.js version as an argument
ARG NODE_VERSION=22-alpine

# Base stage
FROM node:${NODE_VERSION} as base

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies with npm cache
RUN --mount=type=cache,target=/root/.npm \
    npm install

# Install sass globally
RUN npm install -g sass

# Install Next.js globally
RUN npm install -g next@14.1.0

# Development stage
FROM base as dev

# Copy the rest of the application code
COPY . .

# Cache the Next.js build artifacts
RUN --mount=type=cache,target=/usr/src/app/.next true

# Command to run in development
CMD ["npm", "run", "dev"]

# Test stage
FROM base as test

# Copy the rest of the application code
COPY . .

# Run tests
CMD ["npm", "run", "test"]
