PATH  := node_modules/.bin:$(PATH)
SHELL := /bin/zsh

.PHONY: css
css:
	mkdir -p build
	postcss -w -u autoprefixer -u postcss-import css/*.css -d build/

.PHONY: server
server:
	browser-sync start --server --files "build/*.css, *.html, js/*.js"

.PHONY: clean
clean:
	rm -r build
