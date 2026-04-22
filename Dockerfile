# Stage 1: Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Stage 2: Production stage
FROM node:18-alpine

WORKDIR /app

# Copy package files from builder
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy application files from builder
COPY . .

# Expose port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Start application
CMD ["node", "server.js"]
