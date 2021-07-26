# RhymoJS Contribution Guidelines

Contributing to RhymoJS is pretty simple. Just follow these few steps.

Note: *Try to commit only once, if you are making a lot of changes, please create multiple Pull Requests.*

- Fork this repository.
- Run `git checkout -b username/the-change` (fill in the blanks with proper data, and make sure you are following `kebab-case`).
- Run `yarn` to install the dependencies.
- Run `yarn test`, if all the tests pass, commit your changes. If your commit doesn't satisfy the git hooks, you will get an error explaining what you did wrong.
- Create a Pull Request targeting the `master` branch.
  - If you made a single commit:
    - The blank inputs will be automatically filled, don't change anything.
  - If you didn't make a single commit:
    - Make the title the short description of the change you are making (e.g. Fixed grammar errors at documentation files).
    - Make the description of the pull request the reasoning behind the change you are making.
