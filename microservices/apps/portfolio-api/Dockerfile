# Fetching the latest node image on apline linux
FROM node:lts-alpine AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npx nx build portfolio-api

FROM node:lts-alpine AS final

WORKDIR /app
COPY --from=builder /app/dist/apps/portfolio-api .
COPY /package.json /package-lock.json ./
COPY /keycloak.json /app/keycloak.json
ENV PORT=3333
RUN npm install --production
# dependencies that express needs
RUN npm install reflect-metadata tslib rxjs express
EXPOSE ${PORT}

# raw command like this 'node main.js'
CMD ["node", "main.js"]