package main

import (
	"embed"

	"github.com/inhere/blogshare/internal/cli"
)

//go:embed web/index.html
var content embed.FS

// Build-time variables injected with -ldflags.
var (
	Version   = "dev"
	GitHash   = "unknown"
	BuildTime = "unknown"
)

func main() {
	cli.NewApp(cli.BuildInfo{Version: Version, GitHash: GitHash, BuildTime: BuildTime}, content).Run()
}
