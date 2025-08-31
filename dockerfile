
FROM node:20-alpine AS builder

WORKDIR /app


COPY package*.json ./
RUN npm ci


COPY . .
RUN npm run build



FROM node:20-alpine AS runtime

WORKDIR /app


COPY package*.json ./


RUN npm ci --omit=dev


COPY --from=builder /app/dist ./dist


RUN chown -R node:node /app
USER node

EXPOSE 3000
CMD ["node", "dist/index.js"]
