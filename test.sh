#!/bin/sh

set -e

export NODE_ENV=test

./node_modules/.bin/mocha -t 15000 --exit tests/${1}/*.test.js