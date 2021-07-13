<!-- markdownlint-disable MD033 -->


<p align="center">
  <img src="./assets/logo_without_text.svg" width="100" />
</p>

<h1 align="center">
  Rhymo
</h1>

<p align="center">
  <img alt="npm" src="https://img.shields.io/npm/v/@rhymo/core?color=%23AFB3F7&label=version&style=flat-square">&nbsp;&nbsp;<img alt="npm" src="https://img.shields.io/npm/dt/@rhymo/core?color=%23AFB3F7&label=downloads&style=flat-square">&nbsp;&nbsp;<a href="https://twitter.com/intent/retweet?tweet_id=1414686937676451840"><img alt="Retweet About Rhymojs" src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Frhymojs%2Frhymojs"></a>
</p>

<p align="center">
  Avoid writing repetitive React code. We, web developers, struggle every day because of repetitive actions. Rhymo makes your development process easier with useful hooks, utilities, and components.
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

**There are several ways to install/try Rhymo:**

- Install the NPM [package](https://www.npmjs.com/package/@rhymo/core).
- Try it with the playground on our [website](https://rhymojs.com/playground/).
- Try it on [RunKit](https://npm.runkit.com/%40rhymo%2Fcore).

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

Read this guideline to get a better understanding of how to contribute to Rhymo.

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
