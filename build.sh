#! /bin/sh

./node_modules/uglify-js/bin/uglifyjs < chatgpt-print-bookmarklet.js | node bookmarkletify.js | ./node_modules/mustache/bin/mustache - README.mustache.md > README.md

