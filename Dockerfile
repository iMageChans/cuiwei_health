# 构建阶段
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
# 添加 legacy-peer-deps 参数解决版本冲突
RUN npm ci --include=dev --legacy-peer-deps
COPY . .
RUN npm run build

# 生产镜像
FROM node:18-alpine

WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/package*.json ./
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules

USER nextjs

EXPOSE 3000

CMD ["npm", "start"]