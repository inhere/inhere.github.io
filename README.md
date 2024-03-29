# Inehre's Blog and Docs

Build by [Docusaurus](https://github.com/facebook/docusaurus)

## Site address

- https://inhere.github.io

## Quick generate new doc

```bash
kite run script/cgen.php -h
kite run script/cgen.php --name install-tools-by-scoop-on-windows --tags tool,windows,scoop
```

## Docusaurus

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ pnpm install
```

### Local Development

```bash
$ pnpm start
# or
$ yarn start
# or
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
# or
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
