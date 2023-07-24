FROM ubuntu:18.04

RUN apt update -y && apt install -y nano sudo python3
RUN useradd http_server_user -p 'temporary' -u 1001 -m 
RUN passwd -d http_server_user
RUN usermod -aG sudo http_server_user
USER http_server_user
ENV PORT=8888
EXPOSE 8888

