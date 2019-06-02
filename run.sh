#!/bin/sh

set -e

export NODE_ENV=development
export DEBUG=app:*

./node_modules/.bin/nodemon server.js