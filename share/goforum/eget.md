## title

Feedback wanted: a CLI for installing GitHub release binaries and SDK archives

## content

Hi all,

I built a CLI tool called `eget`:

https://github.com/inherelab/eget

The goal is to install prebuilt binaries directly from upstream release assets or download URLs, without waiting for a central package index to update.

Basic GitHub examples:

```bash
eget i openai/codex
eget install junegunn/fzf
eget install --name rg BurntSushi/ripgrep
```

For projects with less predictable asset names, it can query and filter release assets:

```bash
eget query --action assets openai/codex
eget install --asset "PRE:codex,SUF:.zip" openai/codex
eget install --asset "windows,amd64,zip" owner/repo
```

It is not limited to GitHub. It can install or download from GitLab, Gitea/Forgejo, SourceForge, direct URLs, and local files:

```bash
eget install gitlab:fdroid/fdroidserver
eget install --asset linux,amd64 gitea:codeberg.org/forgejo/forgejo
eget install --asset x64,PerUser,setup sourceforge:winmerge
```

For internal tools, `pkg_templates` can describe a shared download rule once:

```toml
[pkg_templates.mydev]
latest_url = "http://mydev.lan/tools/{name}/latest.yaml"
latest_format = "yaml"
url_template = "http://mydev.lan/tools/{name}/{name}-{os}-{arch}{ext}"
ext_map = { windows = ".exe", linux = "", darwin = "" }
```

Then packages can be installed with short names:

```bash
eget install mydev:markview
eget install --add mydev:chlog
```

There is also an `eget sdk` command for downloading SDK archives, with index/cache/mirror support for Go, Node, and JDK:

```bash
eget sdk config add --all
eget sdk index refresh go
eget sdk install go@1.22.0
eget sdk install go:1.22 node:20.11.1
```

I wrote a longer post with the background and examples here:

https://inhere.github.io/en/blog/2026/eget-intro/

I would be interested in feedback from Go users: for CLI tools and SDKs, do you prefer waiting for package manager indexes, using `go install` when possible, downloading release assets manually, or keeping a small installer/config like this?
