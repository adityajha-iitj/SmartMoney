# Stage 1: Build React frontend
FROM node:18-alpine AS builder

WORKDIR /app

COPY client ./client
WORKDIR /app/client

RUN npm install && npm run build

# Stage 2: Setup backend and serve frontend
FROM node:18-alpine

WORKDIR /app

# Copy server code
COPY server ./server
COPY server/package*.json ./server/
WORKDIR /app/server

RUN npm install

# Copy React build from previous stage
COPY --from=builder /app/client/build ../client/build

# Set environment
ENV PORT=8080

EXPOSE 8080

CMD ["node", "server.js"]
