# 将构建出的代码复制到 Nginx 镜像中
FROM nginx:latest
COPY ./dist /usr/share/nginx/html

# 暴露 80 端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]