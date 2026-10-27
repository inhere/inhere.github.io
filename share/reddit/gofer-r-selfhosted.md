## Subreddit

r/selfhosted. Before posting: read the sidebar rules and the pinned posts in the browser (they could not be fetched from here), pick the flair they ask for, and check whether new projects have a set day or need an AI-use disclosure. If self-promotion is limited to a weekly thread, post there instead.

## Title

Self-hosted control plane for running Claude Code / Codex as reviewable jobs across my own machines

## Post

I'm the author. gofer is a single Go binary with a built-in web console (MIT). I run it on my main box; two other machines and a container connect to it as workers. The workers dial out to the server, so nothing on them needs an open inbound port.

What it does: it starts the coding agents I already have (Claude Code, Codex, ACP agents, or plain commands) as jobs. Each job can get its own git worktree and branch. When the agent finishes, the job waits for review: I read the report, commits, diff and test output in one place, then merge it or send it back with a reason so the agent continues in the same session.

Things that might matter to this sub:

- No cloud in between. Jobs, logs and the tracker live on your machines. Access is token based.
- It is not a sandbox: a job runs with the permissions of the gofer process. Keep it on your LAN or a VPN.
- One server, many workers, upgrades from the console (the server waits for running jobs before it restarts).
- The web console works on a phone, so I can answer an agent that stopped to ask something.

It is 0.x and changes often. Most of the code was written by agents running on gofer itself, with me splitting the work, reviewing diffs and running the tests before each release.

Write-up with screenshots: https://inhere.github.io/en/blog/2026/gofer-intro/
Repo: https://github.com/inhere/gofer

For those of you running agents on your own hardware: where do you run them, and how do you keep track of what they changed?
