# Atti Component

![pipelines](https://gitlab.com/attineos/atti-components/badges/develop/build.svg)

Reusable React components, using the styled-components library.

[See the live demo/documentation](https://atti-components.netlify.com/).

## Installation

```
git clone https://gitlab.com/attineos/atti-components.git
cd atti-components
yarn install
```

## Usage

Run `yarn start` so you can start contributing/testing right away (alias of `yarn start:styleguidist`)

Run `yarn build:watch` to set a watcher on your file and automatically build them on save.

Run `yarn prettier` to run prettier on all your files. It will automatically fix them if necessary.

Run `yarn start:styleguidist` to start the styleguidist server, and see the documentation of yours components.

Run `yarn snapshots` to create automatically all snapshot tests of the components.

Run `yarn test` to run the tests.

Run `yarn test -u` to run and update the snapshot tests if the update is validated and expected.

Run `yarn preparecommit` to check if you can commit your code. The command runs `yarn snapshots`, `yarn prettier`, `yarn lint` and `yarn test` (you can add -u to run and update snapshots).

Run `yarn build` to transpile and compress your components into 2 bundles (one for the web and one for native).

## Contribution

If you want to contribute to `atti-components`, please [see the contributing file](CONTRIBUTING.md).

## Useful links

* React: https://github.com/facebook/react
* Styled-components : https://github.com/styled-components/styled-components
* Styleguidist : https://github.com/styleguidist/react-styleguidist
