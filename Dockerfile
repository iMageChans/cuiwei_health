FROM node:18-alpine

WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# 安装依赖（注意：实际文件会通过卷映射提供）
COPY package*.json ./
RUN npm install --legacy-peer-deps

# 不需要复制源文件，因为会通过卷映射提供
# 不需要构建，直接运行

# 设置用户（可选）
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

# 直接启动应用
CMD ["npm", "start"]