BINARY_NAME=website

PACKAGE=$$(go list -m)
VERSION=$$(git describe --tags --always --abbrev=0 --match='v[0-9]*.[0-9]*.[0-9]*' 2> /dev/null | sed 's/^.//')
COMMIT_HASH=$$(git rev-parse HEAD)
BUILD_TIMESTAMP=$$(date '+%Y-%m-%dT%H:%M:%S')

LDFLAGS+=-s -w
LDFLAGS+=-X main.Version=${VERSION}
LDFLAGS+=-X main.CommitHash=${COMMIT_HASH}
LDFLAGS+=-X main.BuildTime=${BUILD_TIMESTAMP}

.PHONY build:
build:
	mkdir -p build && GOARCH=amd64 GOOS=linux go build \
		-v -ldflags="${LDFLAGS}" \
		-o build/${BINARY_NAME}-linux.elf \
		cmd/website/main.go

.PHONY run:
run:
	build/${BINARY_NAME}-linux.elf

certs:
	mkdir -p certs

.PHONY clean:
clean:
	rm -rf build