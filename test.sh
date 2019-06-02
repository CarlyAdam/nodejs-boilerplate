#!/bin/sh

set -e

export NODE_ENV=test

./node_modules/.bin/mocha -t 60000 tests/${1}/*.test.js