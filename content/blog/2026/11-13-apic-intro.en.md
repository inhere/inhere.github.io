---
title: "apic: a command line for any HTTP API, without writing a CLI per service"
date: 2026-11-13T10:00:00
taxonomies:
  tags: [apic, api, openapi, golang, cli, ai-agent]
slug: apic-intro
extra:
  social_media_card: "img/blog/apic-intro-poster.png"
---

`apic` turns any HTTP API into a command line tool: **it reads the API definition (OpenAPI / Swagger, or a few lines of YAML) and builds one command per endpoint**, with parameters as options and shell completion.

- **Definitions become commands**: a service with an OpenAPI document is one `site add` away; for an internal service without one, list its endpoints in a few lines of YAML. `apic link` also gives a site its own command, such as `petctl`.
- **Environments and authentication**: separate base URLs and credentials for dev and prod; bearer, basic, apikey, log-in-for-a-token and token-from-a-command auth; writes to production need `--yes`.
- **Picking, paging, formatting**: `--pick` takes fields from any level and renames them, `--all-pages` walks and merges the pages, `-o table` / `yaml` makes the result readable.
- **For people and AI agents**: stdout carries only the response body, exit codes have fixed meanings, and `apic skill` writes a `SKILL.md` for agents. Secrets are masked in `-v`, `--dry-run` and error messages.

<!-- more -->

apic is MIT licensed, a single Go binary for Linux, macOS and Windows. Installing and trying it takes four or five commands, in the next two sections.

- Repository: [github.com/inhere/apic](https://github.com/inhere/apic)
- Releases: [releases/latest](https://github.com/inhere/apic/releases/latest)

## Install

[eget](https://github.com/inherelab/eget) is the recommended way (it verifies the checksum):

```bash
eget install inhere/apic
# or: go install github.com/inhere/apic/cmd/apic@latest
```

## Quick start

Try it on the public Petstore service, or write a simple definition as shown in "Wrap a service in a few lines" below:

```bash
apic site add pet --spec https://petstore3.swagger.io/api/v3/openapi.json --base-url https://petstore3.swagger.io
apic ops pet
apic pet find-pets-by-status --status available --pick '*.{id,name}' -o table
apic pet get-pet-by-id --petId 1 --pick 'name,category=category.name'   # {"name":"doggie","category":"Dogs"}
```

The README has a "Recipes" section covering lists as tables, paging, scripts, production guards and credentials.

> A read-only example configuration for the GitLab API is in [examples/gitlab](https://github.com/inhere/apic/tree/main/examples/gitlab).

```bash
$ apic pet users --all-pages --pick '*.{id,name,dept=dept.name}' -o table
id  name    dept
1   user1   ops
2   user2   dev
...
42  user42  dev
```

This command walks every page, takes three fields from each record (one of them nested and renamed) and prints a table. The token is referenced in the config and never appears on the command line.

## Wrap a service in a few lines

Many internal services have no OpenAPI document. apic also accepts a "simple definition": write down the endpoints you use.

```yaml
# ~/.config/apic/defs/pet.yaml
operations:
  users:
    get: /api/users
    summary: list users
    query: [keyword, page, size]
  user:
    get: /api/users/{id}             # becomes a required --id
  create-user:
    post: /api/users
```

Register the site and call operations by name:

```bash
apic site add pet --def ~/.config/apic/defs/pet.yaml --base-url http://127.0.0.1:8080
apic ops pet                                  # list operations
apic pet users --keyword tom                  # query parameters become options
apic pet user --id 7                          # path parameter
apic pet create-user -f name=tom -f age:=3    # JSON body: {"name":"tom","age":3}
```

With an OpenAPI / Swagger document it is a single `apic site add pet --spec <url>`, and command names come from `operationId`. The definition is cached locally; completion reads only the cache and sends no requests.

When a document is wrong or a command name is awkward, leave the upstream document alone: rename, hide or fix operations and parameters in `overlays/<site>.yaml`. The overlay survives `site refresh`.

## Environments, authentication and write protection

Test and production environments with separate accounts are common. In an apic site, environments and authentications are declared separately, and each environment can be bound to its own authentication:

```yaml
sites:
  pet:
    source: {type: simple, file: defs/pet.yaml}
    envs:
      dev:  {base_url: http://127.0.0.1:8080, auth: dev}
      prod: {base_url: https://pet.example.com, protect: true, auth: prod}
    default_env: dev
    auths:
      dev:  {type: bearer, token: "${env:PET_DEV_TOKEN}"}
      prod: {type: bearer, token: "${exec:pass show pet/prod-token}"}
```

The safety rules:

- **Authentication bound to the environment**: `--env prod` always uses the prod token. A choice saved earlier with `apic use` never sends the dev token to prod.
- **Write protection**: on a `protect: true` environment GET works as usual, while POST/PUT/DELETE without `--yes` is refused with exit code 6. An authentication can also carry `allow_methods: [GET, HEAD]` to make it read-only.
- **Credentials stay out of the config**: `${env:NAME}` reads from `.env` or the environment; `${exec:command}` reads the output of a command such as a password manager. Supported auth types are bearer, basic, apikey, log in for a token (cached, logs in again on 401), and getting a token from an external command.
- **Masked everywhere**: secrets show as `***` in `-v`, `--dry-run`, error messages and `config show`.

```bash
apic pet create-user --env prod -f name=tom
# error: POST on a protected environment requires --yes   (exit code 6)
apic pet create-user -f name=tom --dry-run
# curl -X POST -H 'Authorization: ***' -H 'Content-Type: application/json' --data-raw '{"name":"tom"}' 'http://127.0.0.1:8080/api/users'
```

`--dry-run` prints the equivalent curl command without sending anything, which is a good check before a real write.

## A command of its own for each site

A site you use often can get its own command, which works like a CLI written for that service, so you no longer type `apic pet` every time:

```bash
apic link pet --name petctl              # creates petctl
petctl users --keyword tom               # same as apic pet users --keyword tom
petctl create-user -f name=tom --dry-run

apic link pet --name pet-prod --env prod # pinned environment: pet-prod only talks to prod
apic link ls                             # list generated commands
apic link rm pet-prod
```

The result is a thin script (`exec apic --api pet --env prod "$@"`). It goes to `~/.local/bin` by default, or `%USERPROFILE%\bin` on Windows, where a `.cmd` file is generated too; `defaults.link_dir` or `--dir` changes the location. `--env` and `--auth` pin the environment and authentication into the command, and write protection still applies. These commands get completion as well: `eval "$(apic link ls --completion bash)"`.

## Take only the fields you need

API responses usually wrap the data in a few layers. `--pick` takes values out:

```bash
apic pet user --id 7 --pick data.name                          # user7 (strings print bare, ready for a shell variable)
apic pet users --pick 'total=data.total,first=data.list.0.name'  # {"total":42,"first":"user1"}
apic pet users --pick 'data.list.*.{id,name,dept=dept.name}' -o table
```

Items are comma separated and each starts at the root; `{...}` takes several keys under one prefix; `*` walks an array; `alias=path` renames a key. `-o` accepts json, yaml, table and raw.

Pagination is configured once per site:

```yaml
    paginate: {page: page, size: size, items: data.list, total: data.total}
```

After that, `--all-pages` follows the page numbers to the end and merges the `data.list` of every page into one array. `--pick` paths then start at that array, which is why the example at the top uses `*.{...}`. `--max-pages N` caps the number of pages and prints a warning on stderr when more remain.

## Ready for AI agents

stdout carries only the response body, everything else goes to stderr, and exit codes have fixed meanings:

| Code | Meaning |
|---|---|
| 0 | 2xx / 3xx |
| 1 | local error: config, definition, parameter validation |
| 2 | usage error |
| 3 | network error or timeout |
| 4 | HTTP 4xx |
| 5 | HTTP 5xx |
| 6 | refused by write protection |
| 7 | the request succeeded but `--pick` or `-o` failed; do not retry |

Scripts and agents decide the next step from the exit code instead of parsing error messages.

apic can also write skill files:

```bash
apic skill        # generic: how to use apic, how to write a simple definition (with an example), exit codes
apic skill pet    # per site: operations, environment and authentication names (no URLs, no credentials)
```

The generated `SKILL.md` can be installed for an agent such as Claude Code. The generic skill does not read the local config and contains no site, URL or credential, so it can be copied to other machines as is; read a site skill before sharing it.

## What it is and what it is not

apic is an HTTP client that builds commands from a definition. It is meant for everyday queries and small writes, by people and agents alike.

It does not:

- test APIs: there are no assertions, test suites or reports; Postman, Hurl and similar tools fit that job better.
- generate code: no SDK or standalone CLI source is produced; commands are built from the definition at run time.
- run interactive logins such as OAuth authorization code or device code flows. The `exec` authentication can call an existing SSO command line tool to get a token instead.

### Compared with similar tools

- **curl / HTTPie**: they call anything and are the most flexible. apic only sends HTTP requests too, and `--dry-run` prints a curl command. The difference is that apic remembers base URLs, environments and authentication, and completes commands and parameters; with curl you keep that in shell aliases and scripts.
- **Restish**: it also builds commands from OpenAPI, and it is mature with a wide feature set. apic focuses on internal services without an OpenAPI document (simple definitions, overlays), authentication bound to environments with write protection, and the skill files and exit code contract for agents.
- **A hand-written CLI per service**: it can give the best experience, but each one has to be written and maintained. apic fits the services that deserve a command line but not a dedicated one.
