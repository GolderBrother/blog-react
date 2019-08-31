# 基于nginx镜像
FROM nginx
# 标识名字和版本
LABEL name="blog-react"
LABEL name="1.0"
# 把当前目录下的所有文件都拷贝到nginx配置的静态资源目录下
COPY ./build /usr/share/nginx/html/blog-react
# Linux下赋值文件夹到指定目录： cp -r ./build/.  /usr/share/nginx/html/blog-react

COPY ./blog-react.conf /etc/nginx/conf.d/
# 向外暴露7000端口(需要在nginx改端口)
EXPOSE 7000

