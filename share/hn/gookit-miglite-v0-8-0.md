## title

Show HN: miglite v0.8.0 - embed raw SQL migrations in a Go binary

## url

https://inhere.github.io/en/blog/2026/gookit-miglite-v0-8-0/

## text

I maintain miglite, a small raw-SQL migration tool for Go. v0.8.0 adds `fs.FS` and `embed.FS` support, so a service can ship its migration files inside the binary instead of copying a `migrations/` directory into the container image.

The release also fixes a few accepted-but-ignored behaviours: `--skip-err` continues after a failed file but returns an error, injected `*sql.DB` connections stay owned by the caller, and migrations without a `DOWN` section are reported as skipped.

The command set and migration file format are unchanged. I would like feedback on the embedded-filesystem API and the trade-off between a single binary and keeping migrations as separate files.
