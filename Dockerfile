# FashionStore E-commerce - static site served by nginx
FROM nginx:alpine

LABEL maintainer="m.abidi@oodrive.com"
LABEL project="FashionStore E-commerce DevOps"

# Remove the default nginx welcome page
RUN rm -rf /usr/share/nginx/html/*

# Copy static site files
COPY . /usr/share/nginx/html

# Remove dev-only files from the image
RUN rm -rf /usr/share/nginx/html/.git \
    /usr/share/nginx/html/.github \
    /usr/share/nginx/html/cypress \
    /usr/share/nginx/html/tests \
    /usr/share/nginx/html/node_modules \
    /usr/share/nginx/html/coverage \
    /usr/share/nginx/html/Dockerfile \
    /usr/share/nginx/html/docker-compose.yml \
    /usr/share/nginx/html/package.json \
    /usr/share/nginx/html/package-lock.json \
    /usr/share/nginx/html/.eslintrc.json \
    /usr/share/nginx/html/cypress.config.js

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
