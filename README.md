# Copy the pdf.worker.min.js file from node_modules/pdfjs-dist/build/ into the public folder




# Use this Docker Steps
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






# Build the Docker Image
# Once you’ve created the Dockerfile, navigate to the project directory and build the Docker image using the following command:
docker build -t anbarasu-a-n-portfolio .

# Run the Docker Container
docker run -p 8080:80 anbarasu-a-n-portfolio





# Push the image to Hub
# Verify the image name and tag: The image name should follow this format:
docker tag <local-image-name> <username>/<repository-name>:<tag>

# Example
# Ensure the name of the image matches exactly as you are trying to push. In your case:
docker tag anbarasu-a-n-portfolio anbarasuan/anbarasu_a_n-portfolio:latest

# Push the image to Docker Hub: Once tagged correctly, try pushing the image:
docker push anbarasuan/anbarasu_a_n-portfolio:latest