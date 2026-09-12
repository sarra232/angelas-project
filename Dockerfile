# ==============================================================================
# Multi-stage Dockerfile for Academic Portfolio
# ==============================================================================

# Stage 1: Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Copy dependency manifests
COPY package*.json ./
RUN npm ci

# Copy application source
COPY . .

# Build production bundle
RUN npm run build

# Stage 2: Production Nginx Server
FROM nginx:alpine AS production
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Stage 3: Development mode
FROM node:20-alpine AS development
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
