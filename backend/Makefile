SHELL := /bin/bash

.PHONY: help
help:
	@printf "available targets -->\n\n"
	@cat Makefile | grep ".PHONY" | grep -v ".PHONY: _" | sed 's/.PHONY: //g'


.PHONY: erd
erd:
	podman run -i -t \
		--mount type=bind,source="$$(pwd)",target=/home/schcrwlr \
		-u 0:0 \
		--rm \
		schemacrawler/schemacrawler \
		/opt/schemacrawler/bin/schemacrawler.sh \
		--server=sqlite \
		--database=shop_easy.db \
		--info-level=standard \
		--command=schema \
		--output-file=shop_easy.erd.png
