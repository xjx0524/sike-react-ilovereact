PATH  := node_modules/.bin:$(PATH)
SHELL := /bin/zsh

server:
	browser-sync start --server --files "*.css, *.html, *.js"
