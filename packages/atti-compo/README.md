# Atti Component

[<img src="https://travis-ci.org/attineos/atti-components.svg?branch=master">](https://travis-ci.org/attineos/atti-components)

Reusable and cross platform React components, for web and Native application.

This library aims to provide a common set of basic UI components that can be used seamlessly by both web and native application.
Each component aims to provide the same options and functionality on both environments so your UI code can be written once and deployed everywhere.

[See the live demo/documentation](https://atti-components.netlify.com/).

## Basic usage for any project

To use this library, simply add it as a dependency to your yarn or npm project by running the command:

```
yarn add atti-components
```

This will install the latest atti-component version right away in your project

Then, add the right import depending if you want to use Native or Web components:

```js
// Import Web components
import * from 'atti-components'

// Import Native components
import * from 'atti-components/native'
```

The goal of this library is to abstract native and web differencies and expose a common interface. 
However some inconsistencies may still exist and you will have to thoroughly test your application on all devices you intend to distribute it on.

For a more detailed view of individual components and how to use them, please [see the live demo/documentation](https://atti-components.netlify.com/).

## Contributing

### Installation

```
git clone https://github.com/attineos/atti-components.git
cd atti-components
yarn install
```

### Yarn commands

Please note that for contributing, we only support YARN for consistency.

Run `yarn start` to start the styleguidist server, and let you see/test the components right in your browser.

Run `yarn build:watch` to set a watcher on your file and automatically build them on save.

Run `yarn prettier` to run prettier on all your files. It will automatically fix them if necessary.

Run `yarn snapshots` to create automatically all snapshot tests of the components.

Run `yarn test` to run the tests.

Run `yarn test -u` to run and update the snapshot tests if the update is validated and expected.

Run `yarn preparecommit` to check if you can commit your code. The command runs `yarn snapshots`, `yarn prettier`, `yarn lint` and `yarn test` (you can add -u to run and update snapshots).

Run `yarn build` to transpile and compress your components into 2 bundles (one for the web and one for native).


### Contributing rules and help

Before contributing to `atti-components`, please [check the contributing file](CONTRIBUTING.md). It contains lot of help on how to write your contribution the right way.

## Useful links

* React: https://github.com/facebook/react
* Styled-components : https://github.com/styled-components/styled-components
* Styleguidist : https://github.com/styleguidist/react-styleguidist
