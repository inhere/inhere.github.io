# Inehre's Blog and Docs

Build by [Docusaurus](https://github.com/facebook/docusaurus)

## Site address

- http://inhere.xyz
- https://inhere.github.io

## Commands

```bash
npm run write-translations -- --locale en
```

## Plugins

### theme-github-codeblock

A Docusaurus v2 plugin that supports referencing code examples from public GitHub repositories.

- GitHub https://github.com/saucelabs/docusaurus-theme-github-codeblock

Instal plugins

```bash
yarn install @saucelabs/theme-github-codeblock
npm install @saucelabs/theme-github-codeblock
```

Usage:

```markdown
```js reference title="Example"
https://github.com/saucelabs/docusaurus-theme-github-codeblock/blob/main/src/theme/ReferenceCodeBlock/index.tsx#L105-L108
```
```

### openapi-docs

- GitHub https://github.com/PaloAltoNetworks/docusaurus-openapi-docs

Installation

Plugin:

```bash
yarn add docusaurus-plugin-openapi-docs
```

Theme:

```bash
yarn add docusaurus-theme-openapi-docs
```


# Docusaurus

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
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
