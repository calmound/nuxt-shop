# 使用 Node.js 18 的 Alpine 版本作为基础镜像
FROM node:18-alpine as build-stage

# 设置工作目录
WORKDIR /app


# 安装 pnpm
#  海外使用这个下载
# RUN npm install -g pnpm 
# 国内下载不下来资源使用这个
RUN npm config set registry https://registry.npmmirror.com \
    && npm install -g pnpm

# 复制 package.json 和 pnpm-lock.yaml 文件
COPY package.json pnpm-lock.yaml ./

# 安装依赖
RUN pnpm install --frozen-lockfile --shamefully-hoist

# 复制项目文件到工作目录
COPY . .

ENV NODE_ENV=production
ENV BASE_URL=http://localhost:8002

# 构建 Nuxt.js 应用
RUN pnpm run build

# 清理阶段
FROM node:18-alpine as production-stage

# 设置工作目录
WORKDIR /app

# 只复制构建产物
COPY --from=build-stage /app/.output ./.output

# 暴露 3000 端口
EXPOSE 3000

# 定义容器启动时执行的命令
# CMD ["pnpm", "start"]

CMD ["node", ".output/server/index.mjs"]