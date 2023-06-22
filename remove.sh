#!/bin/bash

# Remove Dockerfile
if [ -f Dockerfile ]; then
  rm Dockerfile
fi

# Remove docker-compose.yml
if [ -f docker-compose.yml ]; then
  rm docker-compose.yml
fi

# Remove nginx/conf.d/app.conf
if [ -f nginx/conf.d/app.conf ]; then
  rm nginx/conf.d/app.conf
fi
