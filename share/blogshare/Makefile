## blogshare — Makefile

APP     := blogshare
GOEXE   := $(shell go env GOEXE)
BINARY  := $(APP)$(GOEXE)

BUILD_TIME := $(shell date +%Y-%m-%dT%H:%M:%S)
GIT_HASH   := $(shell git rev-parse --short=8 HEAD 2>/dev/null || echo "unknown")
VERSION    ?= $(shell git describe --tags --always --dirty 2>/dev/null | sed 's/^v//' || echo "dev-$(GIT_HASH)")

LDFLAGS := -s -w \
	-X main.Version=$(VERSION) \
	-X main.GitHash=$(GIT_HASH) \
	-X 'main.BuildTime=$(BUILD_TIME)'

.PHONY: all build install run test fmt vet tidy clean cross help

## all: fmt, vet, test and build (default)
all: fmt vet test build

## build: compile the binary for the current platform
build:
	go build -trimpath -ldflags "$(LDFLAGS)" -o $(BINARY) .

## install: install the binary to $GOBIN
install:
	go install -trimpath -ldflags "$(LDFLAGS)" .

## run: build and serve the web view
run: build
	./$(BINARY) serve --open

## test: run unit tests
test:
	go test ./...

## fmt: format all Go files
fmt:
	gofmt -w ./internal ./main.go

## vet: run go vet
vet:
	go vet ./...

## tidy: tidy go.mod/go.sum
tidy:
	go mod tidy

## cross: cross-compile for common platforms into dist/
cross:
	GOOS=linux   GOARCH=amd64 go build -trimpath -ldflags "$(LDFLAGS)" -o dist/$(APP)-linux-amd64 .
	GOOS=darwin  GOARCH=arm64 go build -trimpath -ldflags "$(LDFLAGS)" -o dist/$(APP)-darwin-arm64 .
	GOOS=windows GOARCH=amd64 go build -trimpath -ldflags "$(LDFLAGS)" -o dist/$(APP)-windows-amd64.exe .

## clean: remove build artifacts
clean:
	rm -rf dist $(BINARY)

## help: show this help
help:
	@grep -E '^## ' $(MAKEFILE_LIST) | sed 's/## /  /'
