## Subreddit

r/ClaudeAI. Before posting: read the rules and pinned posts in the browser, use the flair for projects or tools built with Claude, and follow any required disclosure format. If showcase posts are limited to a megathread, post there.

## Title

How I review what several Claude Code sessions changed before anything gets merged

## Post

I usually have three or four Claude Code sessions going (plus some Codex), spread over two machines and a container. The part that kept going wrong was not the coding. It was knowing which session was waiting for me, what each one changed, and whether it actually ran the tests.

What works for me now:

- Every task runs in its own git worktree and branch, so sessions don't step on each other and the main checkout stays clean.
- "Done" is not "accepted". When a session finishes, I look at its report, commits, diff and test output together, then merge or send it back with a reason, and it continues in the same session (`--resume`), so I don't re-explain the context.
- Sessions that stop to ask me something show up in one queue that I can answer from my phone.

I built this into a tool called gofer (I'm the author, MIT, single Go binary with a web console). It doesn't replace Claude Code; it starts the CLI you already have and keeps track of the jobs. It is 0.x and changes often.

Disclosure: most of gofer's code was written by Claude Code and other agents running on gofer, with me splitting the work, reviewing every diff and running the tests before releases.

Write-up with screenshots and a short GIF of the review flow: https://inhere.github.io/en/blog/2026/gofer-intro/
Repo: https://github.com/inhere/gofer

How do you handle several Claude Code sessions at once? Do you review each change as it lands, or let them run and check at the end?
