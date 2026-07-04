# eget for r/commandline

## Title

How do you install fast-moving CLI release binaries?

## Post

I've been running into this more often lately: a CLI tool publishes a new GitHub release, but the package-manager index I use is still a few versions behind.

For tools with prebuilt binaries, I started using a small installer instead of waiting or downloading archives by hand. The rough flow is:

```bash
eget install junegunn/fzf
eget install sharkdp/bat
eget install --asset "windows,amd64,zip" owner/repo
```

It reads GitHub release assets directly, and also supports GitLab/Gitea, SourceForge, direct URLs, and internal URL templates.

Disclosure: I maintain it; it is not a paid product. It is not meant to replace Homebrew, Scoop, apt, or asdf. I use it for the gap where the upstream release exists but the package index or formula is lagging, or where the binary is internal.

Repo, if useful: https://github.com/inherelab/eget

I'm curious how people here handle this: wait for package indexes, download releases manually, use shell scripts, or something else?
