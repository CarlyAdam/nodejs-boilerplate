FROM node:12-alpine

ARG app_port

ENV APP_PORT=${app_port}
ENV NODE_ENV=production

RUN npm install pm2 -g

WORKDIR /app

COPY package.json .

RUN npm install

RUN apk --no-cache add curl

RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | sh -s -- -b /usr/local/bin

RUN apk del curl && rm -rf /var/cache/apk/*

RUN node-prune

COPY . .

ENTRYPOINT [ "pm2-runtime", "process.yml", "--only", "APP" ]