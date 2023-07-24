FROM node:20-slim

RUN apt update -y && apt install -y nano sudo
RUN passwd -d node
RUN usermod -aG sudo -u 1001 node
USER node
WORKDIR /home/node/src
CMD ["/bin/bash"]
ENV PORT=12345
EXPOSE 12345

