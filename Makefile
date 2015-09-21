PATH  := node_modules/.bin:$(PATH)
SHELL := /bin/zsh

.PHONY: css
css:
	mkdir -p build
	postcss -u autoprefixer -u postcss-import css/app.css -o build/app.css

.PHONY: server
server:
	browser-sync start --server --files "*.css, *.html, *.js"

.PHONY: clean
clean:
	rm -r build
