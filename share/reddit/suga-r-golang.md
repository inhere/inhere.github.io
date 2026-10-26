## Subreddit

r/golang (check the pinned rules and flair before posting)

## Title

How do you keep an agent's early constraints alive after the context gets compacted?

## Post

I maintain suga, a coding agent written in Go that I use for my own work every day. The thing I keep running into is long sessions: once the context fills up and gets summarized, the constraint I gave in turn 1 ("don't touch vendor/") is exactly what disappears.

What I ended up doing in suga: instead of summarizing, it starts a new segment that opens with a handoff in a fixed shape. The section with hard constraints and the user's own words is copied verbatim with no size limit. Every other section has a byte budget. Before the budgets, the handoff in one 14-turn session grew from 4.7 KB to 16 KB, because each one folded in the whole previous one.

Two things that surprised me:

- I capped the output of the model call that writes the handoff. Unit tests and fake-model evals passed. With a real reasoning model, 3 of 4 tasks came back with an empty summary, because thinking used up the output budget before any text was written.
- Models never call tools that are only described in the prompt and not declared (0 of 9 runs across three models), so lazy-loading rarely used tools needs a proxy tool. Even then it only saved 6.8% overall, so it ships off by default.

Go-specific bits, if anyone cares: the core (`pkg/agentcore`) has no dependency on `internal/*`, and a test with an allowlist enforces that; Windows is a first-class target (Job Objects for process trees, ConPTY smoke tests).

Write-up with the numbers: https://inhere.github.io/en/blog/2026/suga-long-session/

If you run agents on long tasks, how do you handle the context filling up? Rely on the tool's compaction, start fresh sessions by hand, or something else?
