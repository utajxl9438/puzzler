STUDENT ?= Your_Name_Here
COURSE := CSE3340-SPR-26
ZIP_NAME := $(STUDENT)_$(COURSE).zip

SOURCES := $(shell git ls-files)

.PHONY: help install dev build submit

help:
	@echo "Common tasks:"
	@echo "  make install          Install npm dependencies"
	@echo "  make dev              Run the dev server (Vite)"
	@echo "  make build            Build the production bundle"
	@echo "  make submit STUDENT=\"First_Last\""
	@echo "                        Create a zip file named <student>_$(COURSE).zip"
	@echo ""
	@echo "Note: The submit zip only includes files tracked by git (no node_modules)."

install:
	npm install

dev:
	npm run dev

build:
	npm run build

submit:
	@if [ "$(STUDENT)" = "Your_Name_Here" ]; then \
		echo "Error: Please provide your name, e.g. make submit STUDENT=\"First_Last\""; \
		exit 1; \
	fi
	@if ! command -v git >/dev/null 2>&1; then \
		echo "Error: git is required for the submit target (git ls-files)."; \
		exit 1; \
	fi
	@if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then \
		echo "Error: This directory is not a git repository. Run 'git init' first."; \
		exit 1; \
	fi
	@echo "Creating $(ZIP_NAME) using tracked files..."
	@rm -f "$(ZIP_NAME)"
	@zip -r "$(ZIP_NAME)" $(SOURCES)
	@echo "Done. Created $(ZIP_NAME)."

