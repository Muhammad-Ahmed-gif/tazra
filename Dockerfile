# Use a lightweight web server image
FROM nginx:alpine

# Copy your website files to the web server's default directory
COPY . /usr/share/nginx/html

# Expose port 80 for the container
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
