#!/bin/bash

docker build \
    --tag="http_server:0.1" \
    .

docker create \
    --interactive \
    --tty \
    --rm \
    --name="http_server" \
    --publish-all \
    --mount type=bind,source="$(pwd)"/src,target=/home/http_server_user/src \
    http_server:0.1

docker start http_server
echo HTTP Server Port: $(docker port http_server)
docker attach http_server
