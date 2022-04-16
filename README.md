# Pkg-Compile

<p>
  <a href="https://www.npmjs.com/package/pkg-compile">
    <img src="https://badgen.net/npm/v/pkg-compile" alt="Version">
  </a>
  <a href="https://github.com/ditejs/pkg-compile" target="_blank">
    <img src="https://github.com/ditejs/pkg-compile/workflows/CI/badge.svg" alt="build status"  />
  </a>
  <a href="https://github.com/ditejs/pkg-compile/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome" />
  </a>
  <a href="/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="GitHub license" /></a>
</p>

Inspired by [umi4](https://www.yuque.com/seeconf/2022/ibm88n#z4sct).

## Usage

### Installation

```bash
npm i -g pkg-compile
```

### Usage

Create the `compiled.json` file:

```bash
touch compiled.json
```

File the content of the `compiled.json` file:

```bash
{
  "deps": [
    "chalk",
    "cross-spawn",
    "fs-extra",
    "glob",
    "lodash",
    "pkg-up"
  ],
  "externals": {
    "fs-extra": "$$LOCAL"
  }
}

```

Then can use the `pkg-compile` command:
```bash
pkg-compile
```

## LICENSE

[MIT](./LICENSE)
