#!/bin/bash

docker build \
    --tag="api_server:0.1" \
    .

docker create \
    --interactive \
    --tty \
    --rm \
    --name="api_server" \
    --publish-all \
    --mount type=bind,source="$(pwd)"/src,target=/home/node/src \
    api_server:0.1

docker start api_server
echo API Server Port: $(docker port api_server)
docker attach api_server
