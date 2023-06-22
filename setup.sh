#!/bin/bash

if [ ! -f .env ]; then
  cp .env.example .env
fi

if [ ! -f Dockerfile ]; then
  cp Dockerfile.example Dockerfile
fi

if [ ! -f docker-compose.yml ]; then
  cp docker-compose.yml.example docker-compose.yml
fi

if [ ! -f nginx/conf.d/app.conf ]; then
  cp nginx/conf.d/app.conf.example nginx/conf.d/app.conf
fi