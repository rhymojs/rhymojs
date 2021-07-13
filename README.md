<!-- markdownlint-disable MD033 -->


<p align="center">
  <img src="./assets/logo_without_text.svg" width="100" />
</p>

<h1 align="center">
  Rhymo
</h1>

<p align="center">
  <img alt="npm" src="https://img.shields.io/npm/v/@rhymo/core?color=%23AFB3F7&label=version&style=flat-square">&nbsp;&nbsp;<img alt="npm" src="https://img.shields.io/npm/dt/@rhymo/core?color=%23AFB3F7&label=downloads&style=flat-square">&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="61" height="20"><style>a:hover #llink{fill:url(#b);stroke:#ccc}a:hover #rlink{fill:#4183c4}</style><linearGradient id="a" x2="0" y2="100%"><stop offset="0" stop-color="#fcfcfc" stop-opacity="0"/><stop offset="1" stop-opacity=".1"/></linearGradient><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#ccc" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><g stroke="#d5d5d5"><rect stroke="none" fill="#fcfcfc" x="0.5" y="0.5" width="60" height="19" rx="2"/></g><image x="5" y="3" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMURBMUYyIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VHdpdHRlcjwvdGl0bGU+PHBhdGggZD0iTTIzLjk1MyA0LjU3YTEwIDEwIDAgMDEtMi44MjUuNzc1IDQuOTU4IDQuOTU4IDAgMDAyLjE2My0yLjcyM2MtLjk1MS41NTUtMi4wMDUuOTU5LTMuMTI3IDEuMTg0YTQuOTIgNC45MiAwIDAwLTguMzg0IDQuNDgyQzcuNjkgOC4wOTUgNC4wNjcgNi4xMyAxLjY0IDMuMTYyYTQuODIyIDQuODIyIDAgMDAtLjY2NiAyLjQ3NWMwIDEuNzEuODcgMy4yMTMgMi4xODggNC4wOTZhNC45MDQgNC45MDQgMCAwMS0yLjIyOC0uNjE2di4wNmE0LjkyMyA0LjkyMyAwIDAwMy45NDYgNC44MjcgNC45OTYgNC45OTYgMCAwMS0yLjIxMi4wODUgNC45MzYgNC45MzYgMCAwMDQuNjA0IDMuNDE3IDkuODY3IDkuODY3IDAgMDEtNi4xMDIgMi4xMDVjLS4zOSAwLS43NzktLjAyMy0xLjE3LS4wNjdhMTMuOTk1IDEzLjk5NSAwIDAwNy41NTcgMi4yMDljOS4wNTMgMCAxMy45OTgtNy40OTYgMTMuOTk4LTEzLjk4NSAwLS4yMSAwLS40Mi0uMDE1LS42M0E5LjkzNSA5LjkzNSAwIDAwMjQgNC41OXoiLz48L3N2Zz4="/><g aria-hidden="false" fill="#333" text-anchor="middle" font-family="Helvetica Neue,Helvetica,Arial,sans-serif" text-rendering="geometricPrecision" font-weight="700" font-size="110px" line-height="14px"><a target="_blank" xlink:href="https://twitter.com/intent/retweet?tweet_id=1414686937676451840"><text aria-hidden="true" x="385" y="150" fill="#fff" transform="scale(.1)" textLength="330">Tweet</text><text x="385" y="140" transform="scale(.1)" textLength="330">Tweet</text><rect id="llink" stroke="#d5d5d5" fill="url(#a)" x=".5" y=".5" width="60" height="19" rx="2"/></a></g></svg>
</p>

<p align="center">
  Avoid writing repetitive React code. We, web developers, struggle every day because of repetitive actions. Rhymo makes your development process a lot easier with useful hooks, utilities, and components.
</p>

<p align="center">
  <a href="https://github.com/rhymojs/rhymojs/blob/master/CONTRIBUTING.md"><b>Contribution Guidelines</b></a> • <a href="https://github.com/rhymojs/rhymojs/issues/new/choose"><b>Report a bug</b></a> • <a href="https://rhymojs.com/docs/"><b>Documentation</b></a>
</p>

<br />
<br />
<br />

## Table Of Contents

- [Installation](#installation)
- [Documentation](#documentation)
- [Examples](#examples)
- [Contributing](#contributing)
- [Community](#community)
- [License](#license)

## Installation

**There is several ways to install/try Rhymo:**

- Install the NPM [package](https://www.npmjs.com/package/@rhymo/core).
- Try it with the playground on our [website](https://rhymojs.com/playground/).
- Try it on [RunKit](https://npm.runkit.com/%40rhymo%2Fcore).
- Use the [CDN](https://unpkg.com/@rhymo/core@latest/lib/index.js) to add Rhymo to your project in seconds.

## Documentation

You can find the documentation on our [website](https://rhymojs.com/docs/).

You can check the [Getting Started](https://rhymojs.com/docs/getting-started/) page for learning more about Rhymo.

You can improve it by contributing to [this repository](https://github.com/rhymojs/rhymojs.com/).

## Examples

```jsx
import React from "react";
import { toCapitalizeCase } from "@rhymo/core";

const ExampleComponent = () => {
  return (
    <div>
      <h1>{toCapitalizeCase("hello rhymo")}</h1>
    </div>
  );
};

export default ExampleComponent;
```

This example returns "Hello Rhymo".

Rhymo is built with [TypeScript](https://www.typescriptlang.org/). But is compiled to JavaScript. It still serves the autocompletions and types.

## Contributing

### [Contribution Guidelines](https://github.com/rhymojs/rhymojs/blob/master/CONTRIBUTING.md)

Read this guideline to get a better and clear understanding of how to contribute to Rhymo.

### [Code Of Conduct](https://github.com/rhymojs/rhymojs/blob/master/CODE_OF_CONDUCT.md)

We have adopted a code of conduct to keep everything clean and nice. Please make sure you read and understand it because any action that breaks any of the rules will not be tolerated.

## Community

Get updates on Rhymo's development and chat with the project maintainers and community members.

- Follow [@rhymojs](https://twitter.com/rhymojs/) on Twitter.
- Subscribe to the [Rhymo's Blog](https://rhymojs.com/blog/).
- Join our [Discord community](https://discord.gg/rhymojs/).

## License

Rhymo maintains its code by attribution under the terms of the [MIT License](http://opensource.org/licenses/mit-license).

See the [LICENSE](https://github.com/rhymojs/rhymojs/blob/master/LICENSE) file for more details.
