# Stage 1: Install dependencies (cached)
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

# Install pnpm and dependencies
COPY full-kit/package.json full-kit/pnpm-lock.yaml ./
COPY full-kit/prisma/schema.prisma ./prisma/schema.prisma
RUN corepack enable pnpm && pnpm install --frozen-lockfile

# Stage 2: Build the application
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY full-kit/. .

# Build Next.js app
RUN corepack enable pnpm && pnpm run build

# Stage 3: Production runner (minimal)
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

# Copy built assets and environment
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/.env ./.env
COPY full-kit/package.json ./package.json
COPY full-kit/pnpm-lock.yaml ./pnpm-lock.yaml

# Install only production dependencies
RUN corepack enable pnpm && pnpm install --prod --frozen-lockfile && pnpm store prune

# Use non-root user
USER nextjs
EXPOSE 3000
CMD ["node", "node_modules/next/dist/bin/next", "start"]
