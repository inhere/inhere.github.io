---
title: gookit/slog - release v0.5.2, Lightweight, configurable, extensible logging library
taxonomies:
  tags: [gookit,golang,logger,slog]
date: 2023-06-19T17:16:00
# gen by: kite run script/cgen.php --name gookit-slog-release-v0.5.2 --tags gookit,golang,logger,slog
---

`gookit/slog` 📑 Lightweight, configurable, extensible logging library written in Go.
Support multi level, multi outputs and built-in multi file logger, buffers, clean, rotate-file handling.

<!-- more -->

> Github https://github.com/gookit/slog

## v0.5.2 changelog

**Full changelog**: https://github.com/gookit/slog/compare/v0.5.1...v0.5.2

### Feature

- ✨ feat: Add new option FilePerm to customize the permission on log file creation. issues #102 https://github.com/gookit/slog/commit/699ecd8bc2dea0fb35607ba89d4299e86f96e40b
- ✨ feat: rotatefile - Added new option `ModeCreate` to support creating log files at rotation time. https://github.com/gookit/slog/commit/8c4a9a08a9b3432a699f6770b73935ecfd42e5b8

### Update

- 👔 up: Update and add more unit tests, upgrade goutil to v0.6.10 https://github.com/gookit/slog/commit/693cc04eb0e375183357be18893cbecaa171ffa1
- 📝 doc: Update README document description https://github.com/gookit/slog/commit/cbf77c38db5615a9a7ec8ab07853b2f9e3517bfa
- ✅ test: Add more unit test cases https://github.com/gookit/slog/commit/8468ea470645bb981fb34002176671bac1a9559e

## New feature usage

### Custom log file permissions

The log file permission flag created by configuring the `FilePerm` setting of `hander.Config`.

```go
h1 := handler.MustFileHandler("/tmp/error.log",
    handler.WithLogLevels(slog.DangerLevels),
    handler.WithFilePerm(0644), // <- sets log file permissions
)

slog.PushHandler(h1)

```

### Split files using ModeCreate mode

about `RotateMode`:

- ModeRename By default, every time rename handles rotation.
- ModeCreate Create files only by split time


Setting `RotateMode=ModeCreate` allows log files to be created only by split time.

```go
h1 := handler.MustRotateFile(
    "/tmp/error.log",
    rotatefile.EveryHour, // split by hour
    handler.WithLogLevels(slog.DangerLevels),
    handler.WithRotateMode(rotatefile.ModeCreate), // set RotateMode=ModeCreate
)

slog.PushHandler(h1)
```

Configure the logfile as `/tmp/error.log` in the above example. When set to `ModeCreate` mode, the file will not actually be created,
Instead, it will be created according to the actual split time:

```bash
/tmp/error.log.20230618_1500
/tmp/error.log.20230618_1600
/tmp/error.log.20230618_1700
...
```

> **Tips**: The `ModeCreate` mode can be applied to command-line tool applications. Because they exit after each execution, `ModeRename` may not be able to split files on time.


And using `ModeRename` mode will have the following effect:

```bash
/tmp/error.log # <- Logs are always written to this file
/tmp/error.log.20230618_1500
/tmp/error.log.20230618_1600
/tmp/error.log.20230618_1700
...
```


## More usage

More usage please see [README](https://github.com/gookit/slog/blob/master/README.md)
