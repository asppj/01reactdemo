# node 镜像
# apline 版本的node会小很多
FROM node:alpine AS builder


# 指定工作空间，后面的指令都会在当前目录下执行
WORKDIR /app

# 拷贝 package.json
COPY package.json /app

# 安装依赖
RUN npm i --production --registry=https://registry.npm.taobao.org

# 拷贝其他所有文件到容器（除了 .dockerignore 中的目录和文件）
COPY . /app

# build
RUN npm run build

# 暴露端口 9000
EXPOSE 3000

# 运行容器时执行命令，每个 Dokcerfile 只能有一个 CMD 命令，多个的话只有最后一个会执行
CMD [ "npm", "start" ]

FROM nginx:stable-alpine
RUN apk --no-cache add curl
RUN curl -L https://github.com/a8m/envsubst/releases/download/v1.1.0/envsubst-`uname -s`-`uname -m` -o envsubst && \
    chmod +x envsubst && \
    mv envsubst /usr/local/bin
COPY ./nginx.config /etc/nginx/nginx.template
CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/nginx.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
COPY --from=builder /app/build /usr/share/nginx/html