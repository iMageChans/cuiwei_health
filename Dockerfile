# 本地生产环境 Dockerfile
FROM node:18-alpine

WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# 复制 package.json 并安装依赖
COPY package*.json ./
RUN npm ci --omit=dev --legacy-peer-deps

# 构建应用（在容器启动时会执行）
# 注意：实际文件会通过卷映射提供，这里不需要 COPY

# 添加用户（可选，如果你想以非 root 用户运行）
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# 设置权限
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

# 启动前先构建
CMD ["sh", "-c", "npm run build && npm start"]