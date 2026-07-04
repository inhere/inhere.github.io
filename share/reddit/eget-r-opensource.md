# eget for r/opensource

## Title

eget: open-source CLI for installing upstream release binaries

## Post

I maintain a small open-source CLI called `eget` for installing prebuilt tools directly from upstream release assets and download URLs.

The itch was package freshness. A lot of CLI projects publish binaries on GitHub or GitLab first, while package indexes, formulas, buckets, or internal mirrors may trail behind. For everyday tools that is fine. For trying a fix, testing a new version, or rolling out an internal binary, I wanted something that did not require a central index repo.

The common path looks like this:

```bash
eget install junegunn/fzf
eget install sharkdp/bat
eget install --asset "windows,amd64,zip" owner/repo
```

It can install from GitHub releases, GitLab/Gitea, SourceForge, direct URLs, local files, and reusable URL templates. The template part is useful for internal open-source-style tooling: a team can keep simple rules for where binaries live without running a full package registry.

It is not meant to replace Homebrew, Scoop, apt, asdf, or language-specific package managers. I use it for the gap where the upstream binary already exists but the package index is stale, missing, or not the right distribution path.

Repo: https://github.com/inherelab/eget

I would be interested in feedback from other open-source maintainers: do you prefer maintaining package-manager metadata, publishing release assets only, or providing a small installer path alongside releases?
