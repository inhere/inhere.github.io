I maintain [miglite](https://github.com/gookit/miglite), a small raw-SQL migration tool for Go. v0.8.0 adds `fs.FS` / `embed.FS` support, so services can ship migrations inside the binary instead of copying a directory into the image. It also fixes `--skip-err`, injected `*sql.DB` ownership, and missing `DOWN` reporting.

Write-up: https://inhere.github.io/en/blog/2026/gookit-miglite-v0-8-0/

I would like feedback from people running migrations from embedded filesystems.
