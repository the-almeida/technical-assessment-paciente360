FROM node:16 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Angular app
RUN npm run build

# Use the official Nginx image as the production environment
FROM nginx:latest

# Copy the build output from the build environment to the Nginx web root
COPY --from=build /app/dist/crud-front-end-angular /usr/share/nginx/html

# Expose port 80 (default for HTTP)
EXPOSE 80

# Start Nginx to serve the Angular app
CMD ["nginx", "-g", "daemon off;"]
