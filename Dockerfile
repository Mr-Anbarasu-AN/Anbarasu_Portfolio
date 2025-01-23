# Use a Debian-based Node.js image for better compatibility
FROM node:20-bullseye AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Clean previous installations and install dependencies
RUN rm -rf node_modules package-lock.json && npm cache clean --force
RUN npm install --legacy-peer-deps

# Install Rollup dependencies explicitly
RUN npm install --save-dev rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use a lightweight web server to serve the static files
FROM nginx:alpine AS production

# Set working directory in the nginx container
WORKDIR /usr/share/nginx/html

# Copy the build output from the build stage
COPY --from=build /app/dist .

# Expose port 80 for serving the app
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
