---
title: miglite v0.8.0: ship migrations inside the binary
published: false
canonical_url: https://inhere.github.io/en/blog/2026/gookit-miglite-v0-8-0/
---


The last post about `miglite` covered v0.4.0 in June. Since then it shipped four releases and 69 commits (`v0.4.0..v0.8.0`), up to v0.8.0. The design did not change. Two things did: migration files can now travel inside the binary, and several flags that were accepted but ignored now take effect.

![miglite v0.8.0: embed migrations in the binary](/img/blog/miglite-v080-poster.png)

<!-- more -->

- Project: [https://github.com/gookit/miglite](https://github.com/gookit/miglite)
- API docs: [https://pkg.go.dev/github.com/gookit/miglite](https://pkg.go.dev/github.com/gookit/miglite)
- Previous post: [miglite: raw SQL migrations for Go projects](/en/blog/2026/gookit-miglite-intro/)
- Latest release: [v0.8.0](https://github.com/gookit/miglite/releases/tag/v0.8.0)

## What changed across these releases

| Version | Date | Change |
| --- | --- | --- |
| v0.5.0 | 2026-07-18 | `exec` runs multiple statements in one transaction; `--db` overrides the database name |
| v0.6.0 | 2026-08-08 | Dependency updates |
| v0.7.0 | 2026-09-21 | `internal/runtime` extraction, four behaviour fixes |
| v0.8.0 | 2026-09-28 | `fs.FS` / `embed.FS` migrations |

The command set is unchanged: `create / init / up / down / skip / status / show / exec`. Upgrade scripts do not need edits.

## Ship migrations inside the binary

Deploying a small service used to mean keeping a `migrations/` directory next to the binary. In a container image that directory needs a `COPY` line and the working directory has to line up with it. When the directory is missing or its files come from an older build, `miglite status` reports no pending migrations, which is not an obvious failure.

SQL files can now be embedded with `go:embed`:

```go
package main

import (
	"embed"

	"github.com/gookit/miglite"
	"github.com/gookit/miglite/pkg/command"

	_ "modernc.org/sqlite"
)

//go:embed migrations/*.sql
var migrationFS embed.FS

func main() {
	mig, err := miglite.NewAuto(func(cfg *miglite.Config) {
		// a logical path inside migrationFS, not a disk path
		cfg.Migrations.Path = "migrations"
	})
	if err != nil {
		panic(err)
	}

	// miglite.NewWithConfigAndFS(cfg, migrationFS) does the same
	mig.SetFS(migrationFS).SetSqlDB(db)
	if err := mig.Up(command.UpOption{Yes: true}); err != nil {
		panic(err)
	}
}
```

A few details:

- After `SetFS`, `cfg.Migrations.Path` is an io/fs logical path with forward slashes, not a directory on disk.
- `SetFS(nil)` goes back to reading from the local filesystem, for projects that support both.
- An embedded filesystem is read-only, so `create` still writes to the local disk and cannot add files to `embed.FS`.
- The new API surface is `Migrator.SetFS`, `NewWithConfigAndFS` and the package-level `miglite.BindFS`, plus `ParseFS`, `FindMigrationsFS` and `MigrationsFromFS` in `pkg/migration`.

If you reuse miglite's commands in your own CLI instead of calling `cmd/miglite`, one `miglite.BindFS(migrationFS)` call before `app.Run()` makes the handlers read from that filesystem.

## --db points one command at another database

Debugging and tests often need the same instance with a different database name, for example running migrations against a copy of production data. Editing the config or the environment variables for that is easy to forget to undo.

v0.5.0 added a global `--db` flag:

```bash
# status of one specific database
miglite --db new_db status

# run SQL against that database
miglite exec --db new_db --yes "SELECT current_database();"
```

It overrides the database name from the YAML file, `DATABASE_DSN` or `DATABASE_URL`; for SQLite it overrides the database file path. The flag applies to the current command only and is not written back to the config.

## exec runs multi-statement SQL in one transaction

`exec` used to send statements to the database one at a time. If statement five failed, the first four had already been applied and the rest never ran.

It now splits the input with `SplitSQL` and runs the statements inside a single transaction, committing only when all of them succeed. Query statements go through `Query`, and their result set is printed:

```bash
miglite exec --yes ./scripts/import-seed.sql
```

The database still decides what can be rolled back. Several MySQL DDL statements commit implicitly and cannot be rolled back as part of a transaction. miglite guarantees how it executes the statements; whether a DDL statement is reversible depends on the engine. Migration files have the same constraint.

## Four behaviours that only looked right

v0.7.0 moved the logic out of package-level globals in `pkg/command` into `internal/runtime`: each call builds a `Runtime` (config, connection, filesystem, connection ownership), and the CLI and the library share one output path. The refactor was not meant to be visible, and it fixed four real problems along the way:

- `up --skip-err` accepted the flag and ignored it. A failed file is now skipped and the remaining migrations still run, while the command returns an error and the CLI exits non-zero.
- An injected `*sql.DB` is no longer closed. A connection passed to `SetSqlDB(db)` belongs to the caller, and only connections opened from the config are closed by miglite. In a long-running service the old behaviour could close a connection out from under you.
- A migration file without a `DOWN` section is now reported as skipped with the `empty_down` status, and only a real rollback reaches the after hook. Before, `down` on such a file gave the impression that a rollback had happened.
- Failures no longer print the success banner. That sounds minor until a script scans the output by eye and the last line says everything completed.

```bash
miglite up --yes --skip-err
```

## Using miglite as a library

The main package still builds on `database/sql` and does not bind a driver by default, the same as in v0.4.0. A typical call sequence now looks like this:

```go
mig, err := miglite.NewWithConfig(cfg) // or NewAuto / New(configFile)
if err != nil {
	return err
}

if err = mig.SetSqlDB(db).Init(command.InitOption{}); err != nil {
	return err
}
if err = mig.Up(command.UpOption{Yes: true}); err != nil {
	return err
}
if err = mig.Status(command.StatusOption{}); err != nil {
	return err
}
```

Three differences from the CLI:

- Library calls never ask for confirmation. `Yes` only affects the CLI prompt.
- Library calls print the same progress output as the CLI, through the shared output path introduced in v0.7.0.
- There is nothing to close. The `*sql.DB` you pass in stays yours, and connections opened from the config are closed at the end of each call.

## Should you upgrade

There are no breaking changes between v0.4.0 and v0.8.0: no command was removed, no config key changed, and the migration file format is the same. Two things are worth checking after the upgrade:

- If a script relied on `up --skip-err` stopping at the first failure, it now continues past failed files. Check the exit-code handling around it.
- If you pass your own `*sql.DB`, the connection is no longer closed for you, so workarounds added for that can be deleted.

For a single-binary deployment that should not carry a `migrations` directory, the `embed.FS` support in v0.8.0 removes that step. For a local SQLite database that just needs schema management, the v0.4.0 usage still works unchanged.

- Project: [gookit/miglite](https://github.com/gookit/miglite)
- Quick install: `go install github.com/gookit/miglite/cmd/miglite@latest`
- Or with [eget](https://github.com/inherelab/eget): `eget install gookit/miglite`
