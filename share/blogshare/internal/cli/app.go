// Package cli wires the blogshare commands on top of gookit/goutil/cflag/capp.
package cli

import (
	"fmt"
	"io/fs"

	"github.com/gookit/goutil/cflag/capp"
)

// BuildInfo holds version data injected with -ldflags.
type BuildInfo struct {
	Version   string
	GitHash   string
	BuildTime string
}

// NewApp creates the blogshare application with all commands registered.
func NewApp(info BuildInfo, content fs.FS) *capp.App {
	app := capp.NewApp()
	app.Name = "blogshare"
	app.Desc = "Record and review where blog posts were shared (JSONL log + web view)"
	app.Version = fmt.Sprintf("%s (hash %s, built %s)", info.Version, info.GitHash, info.BuildTime)
	app.LongHelp = `
<cyan>Examples:</>
  blogshare add blog/2026/sshc-intro hn --url https://news.ycombinator.com/item?id=1
  blogshare update 2609_a3k9qz --url https://news.ycombinator.com/item?id=2   # fix by id
  blogshare rm 2609_a3k9qz
  blogshare list --site reddit --status published
  blogshare show blog/2026/sshc-intro
  blogshare pending --post blog/2026/sshc-intro
  blogshare stats
  blogshare serve --open

<cyan>Files:</>
  records   ROOT/share/records.jsonl   (one JSON record per line, --file to override)
  root      auto-detected by walking up to config.toml + content/, --root to override
`
	app.Add(
		newAddCmd(),
		newUpdateCmd(),
		newRmCmd(),
		newListCmd(),
		newShowCmd(),
		newPendingCmd(),
		newSitesCmd(),
		newPostsCmd(),
		newStatsCmd(),
		newCheckCmd(),
		newServeCmd(content),
	)
	return app
}
