# 使用 node 16 作为基础镜像
FROM node:16.20.1

# 创建项目目录
RUN mkdir -p /app
WORKDIR /app

# 复制 package.json 和 yarn.lock 到容器中
COPY package.json yarn.lock ./

# 设置 yarn 源为淘宝镜像源
RUN yarn config set registry https://registry.npm.taobao.org/

# 安装依赖
RUN yarn install

# 复制项目文件到容器中
COPY . .

# 构建生产环境代码
RUN yarn build

# 将构建出的代码复制到 Nginx 镜像中
FROM nginx:latest
COPY --from=0 /app/dist /usr/share/nginx/html

# 暴露 80 端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
