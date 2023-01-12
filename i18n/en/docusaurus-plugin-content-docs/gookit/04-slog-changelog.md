# Slog

[gookit/slog](https://github.com/gookit/slog) - Lightweight, configurable, extensible logging library written in Go. Support multi level, multi outputs and built-in multi file logger, buffers, clean, rotate-file handling.

## v0.4.0 Change Log

> https://github.com/gookit/slog/releases/tag/v0.4.0

### Update

- go: require the go 1.18+
- pref: optimize the log write logic https://github.com/gookit/slog/commit/6f145bdbfb4cdf7a26806a4e255723c94b0548f3
- up: update the benchmark tests package version to latest, add new tests log https://github.com/gookit/slog/commit/c17c0a43657eb4dd0cc5c61987aecc72e7c9d338
- :necktie: up: update logger caller skip value, fix test error https://github.com/gookit/slog/commit/214491a6082a30095fb0dc3cdf1557a1001f9b8c
- :necktie: up: update log write logic, add more unit tests https://github.com/gookit/slog/commit/4799e4bfd390ba939ab0dc95d4bddccc71192a7f
- :necktie: up: update logger handler, remove defaultH setting. https://github.com/gookit/slog/commit/d671f338a9a60a84c882b2deb27a89a189b5bebd

### Other

- style: re-format some code style by gofmt https://github.com/gookit/slog/commit/fb365538e6242afe8617325dcbf745439540cd06
- build(deps): bump WillAbides/setup-go-faster from 1.7.0 to 1.8.0 https://github.com/gookit/slog/commit/5a347895a70f22711ee716b3fb31d824e46d81fa

> **Full Changelog**: https://github.com/gookit/slog/compare/v0.3.4...v0.4.0
