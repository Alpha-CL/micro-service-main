# 将构建出的代码复制到 Nginx 镜像中
FROM nginx:latest

# 将根目录下的 nginx 配置文件拷贝到容器中
COPY ./nginx /etc/nginx

# 将编译后的文件 拷贝进到 nginx 的静态文件目录
COPY ./dist /usr/share/nginx/html

# 暴露 80 端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]