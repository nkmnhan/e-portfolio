# Fetching the latest node image on apline linux
FROM node:alpine AS builder

WORKDIR /app

COPY . .
RUN npm install
RUN npx nx build e-portfolio

# Fetching the latest nginx image
FROM nginx

# Copy output to /usr/share/nginx/html and prepare data for nginx
COPY --from=builder /app/dist/apps/e-portfolio /usr/share/nginx/html
COPY --from=builder /app/apps/e-portfolio/nginx.conf /etc/nginx/nginx.conf

# Grant permission for nginx
RUN ls -la /usr/share/nginx/html
RUN chown -R nginx:nginx /usr/share/nginx/html

# Export port and command
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]