## category

Technical Discussion

## title

Feedback wanted: keeping an embeddable agent core free of app dependencies in Go

## content

Hi all,

I maintain [suga](https://github.com/inhere/suga), a coding agent written in Go (MIT, still v0). Most of the work has gone into long sessions, but the part I would like Go feedback on is how the core is split out so other Go programs can embed it.

`pkg/agentcore` holds the model/tool loop, providers, the tool registry and approval. It must not import anything under `internal/`. Instead of relying on review, a test walks the package imports and checks them against an allowlist, so a new dependency or an unregistered package fails `go test`. The smallest working setup is:

```go
runtime := agentcore.New(agentcore.Config{
    Provider: mock.NewProvider(mock.Final("hello")),
})
result, err := runtime.Run(ctx, agentcore.RunInput{
    AgentID:     "example-agent",
    Instruction: "say hello",
})
```

Wrapping the registry in `tools.NewApproval` with no approver denies every call, so the default is closed rather than open.

Two things I am unsure about:

- Is an import allowlist test a reasonable way to keep a layer boundary, or would you split the core into its own module?
- The in-process SDK (`pkg/sugasdk`) is still marked experimental. For embedding an agent loop, would you rather get a callback-style API or a channel of events?

Longer write-up (sessions, token costs, what failed): https://inhere.github.io/en/blog/2026/suga-long-session/

Disclosure: I'm the author, and I use AI tools heavily on this project, including for drafting this post.
