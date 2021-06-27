<!-- markdownlint-disable MD033 -->

<h1 align="center">
  <a href="https://rhymojs.com/">Rhymo</a> • A React Library
</h1>

<p align="center">
  <img src="./assets/logo.svg" width="165" />
</p>

<p align="center">
  <i>
    Rhymo is a React library that contains interfaces, <br /> components, utilities, etc. to make <br /> avoiding repetitive code easier.
  </i>
</p>

<p align="center">
  <a href="https://rhymojs.com">
    <b>rhymojs.com</b>
  </a>
</p>

<p align="center">
  <a href="https://github.com/xeptao/rhymojs/blob/dev/CONTRIBUTING.md"><b>Contribution Guidelines</b></a> · <a href="https://github.com/xeptao/rhymojs/issues/new"><b>Report a bug</b></a> · <a href="https://rhymojs.com/docs/"><b>Documentation</b></a>
</p>

---

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
- Use the [CDN](https://unpkg.com/@rhymo/core@latest/index.js) to add Rhymo to your project in seconds.

## Documentation

You can find the documentation on our [website](https://rhymojs.com/docs/).

You can check the [Getting Started](https://rhymojs.com/docs/getting-started/) page for learning more about Rhymo.

You can improve it by contributing to [this repository](https://github.com/xeptao/rhymojs/).

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

### [Contribution Guidelines](https://github.com/xeptao/rhymojs/blob/dev/CONTRIBUTING.md)

Read this guideline to get a better and clear understanding of how to contribute to Rhymo.

### [Code Of Conduct](https://github.com/xeptao/rhymojs/blob/dev/CODE_OF_CONDUCT.md)

We have adopted a code of conduct to keep everything clean and nice. Please make sure you read and understand it because any action that breaks any of the rules will not be tolerated.

## Community

Get updates on Rhymo's development and chat with the project maintainers and community members.

- Follow [@rhymojs](https://twitter.com/rhymojs/) on Twitter.
- Subscribe to the [Rhymo's Blog](https://rhymojs.com/blog/).
- Join our [Discord community](https://discord.gg/rhymojs/).

## License

Rhymo maintains its code by attribution under the terms of the [MIT License](http://opensource.org/licenses/mit-license).

See the [LICENSE](https://github.com/xeptao/rhymojs/blob/dev/LICENSE) file for more details.
