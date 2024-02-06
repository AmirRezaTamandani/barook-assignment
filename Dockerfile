# Builder Stage
FROM node:20.9.0 AS builder
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Runner Stage
FROM node:20.9.0-alpine AS runner
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY --from=builder /usr/src/app/package*.json ./

# Install production dependencies only
RUN npm install --only=production

# Copy build artifacts
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public

# Expose port
EXPOSE   3000

# Set environment variables
ENV NODE_ENV production

# Start the application
ENTRYPOINT ["npm", "start"]