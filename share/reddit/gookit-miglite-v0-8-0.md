## Title

How do you ship SQL migrations with a single Go binary?

## Post

I maintain `gookit/miglite`, a small Go migration tool that keeps migration files as raw SQL. The v0.8.0 release adds `fs.FS` support, so a service can embed its migration files with `go:embed` instead of copying a `migrations/` directory beside the binary.

The important detail is that the embedded path is an `io/fs` path, not a disk path:

```go
//go:embed migrations/*.sql
var migrationFS embed.FS

mig, err := miglite.NewAuto(func(cfg *miglite.Config) {
    cfg.Migrations.Path = "migrations"
})
if err != nil { return err }
mig.SetFS(migrationFS).SetSqlDB(db)
```

The same release also fixes a few behaviours that were accepted but ineffective: `--skip-err` now continues after a failed file while returning an error, injected `*sql.DB` values are no longer closed by the library, and a migration without `DOWN` is reported as skipped.

I wrote up the changes here: https://inhere.github.io/en/blog/2026/gookit-miglite-v0-8-0/

I am the maintainer. For small Go services, do you prefer embedding migrations in the binary, shipping a separate directory, or using a different migration setup?
