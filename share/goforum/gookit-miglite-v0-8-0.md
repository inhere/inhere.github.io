## title

Feedback wanted: embedding raw SQL migrations in a Go binary

## content

Hi all,

I maintain [miglite](https://github.com/gookit/miglite), a small migration tool for Go projects that prefer plain SQL files. The v0.8.0 release adds `fs.FS` support, mainly for services that want to embed migrations with `go:embed`:

```go
//go:embed migrations/*.sql
var migrationFS embed.FS

mig.SetFS(migrationFS).SetSqlDB(db)
```

The migration path is an `io/fs` logical path, and `SetFS(nil)` switches back to the local filesystem. The CLI commands and file format stay unchanged.

The same update fixes three behaviours that were easy to miss: `--skip-err` now continues but returns a failure, injected `*sql.DB` values are not closed by miglite, and a file without `DOWN` is reported as skipped.

Details: https://inhere.github.io/en/blog/2026/gookit-miglite-v0-8-0/

For small services, how do you decide between embedding migrations and shipping a separate directory? I would especially appreciate feedback on the `fs.FS` API.
