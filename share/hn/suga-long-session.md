## title

Show HN: suga - a Go coding agent built for day-long sessions

## url

https://github.com/inhere/suga

## text

I wrote suga for my own daily coding work. It is a single Go binary with chat, one-shot runs and an ACP server, MIT licensed, still v0.

Most of the work went into long sessions. When the context fills up, suga starts a new segment with a structured handoff instead of a free-form summary; hard constraints are copied verbatim and the other sections have byte budgets. A set of 13-14 turn evals with 2-3 forced resets checks whether the turn-1 constraint survives (12/12 on deepseek-v4.1-flash, 3 runs each).

Every run goes into one SQLite file, and `suga inspect trace --analyze` reports re-reads, repeated commands and tests after the first pass. `--verify` runs your check command after the turn and feeds failures back, so "tests pass" comes from the command, not the model.

The write-up covers what failed along the way (a capped handoff call that returned empty summaries, lazy tool loading that saved only 6.8%): https://inhere.github.io/en/blog/2026/suga-long-session/
