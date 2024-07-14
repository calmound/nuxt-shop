#!/bin/bash

# 变量定义
IMAGE_NAME="shop-outside-front"
TAG="1.0.2"
TAR_FILE="${IMAGE_NAME}_${TAG}.tar"
REMOTE_HOST="root@112.74.45.244"
REMOTE_DIR="/root/web/shop-outside-nuxt-front"

# 步骤1: 构建 Docker 镜像
echo "Building Docker image..."
docker build -t ${IMAGE_NAME}:${TAG} .

# 步骤2: 将 Docker 镜像导出为 tar 文件
echo "Saving Docker image to tar file..."
docker save -o ${TAR_FILE} ${IMAGE_NAME}:${TAG}

# 步骤3: 上传 tar 文件到服务器
echo "Uploading tar file to server..."
scp ${TAR_FILE} ${REMOTE_HOST}:${REMOTE_DIR}

echo "All tasks completed!"
