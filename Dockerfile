FROM node:12-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY package.json .

RUN npm install

RUN apk --no-cache add curl

RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | sh -s -- -b /usr/local/bin

RUN apk del curl && rm -rf /var/cache/apk/*

RUN node-prune

COPY . .

ENTRYPOINT [ "node", "server.js" ]