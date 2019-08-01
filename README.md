# atti-components

[<img src="https://travis-ci.org/attineos/atti-components.svg?branch=master">](https://travis-ci.org/attineos/atti-components)
[<img src="https://img.shields.io/npm/v/atti-components.svg">](https://www.npmjs.com/package/atti-components)
[<img src="https://img.shields.io/npm/dm/atti-components.svg">](https://www.npmjs.com/package/atti-components)
[![DeepScan grade](https://deepscan.io/api/teams/3505/projects/5178/branches/40277/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3505&pid=5178&bid=40277)

Reusable and fully customizable React components for web applications.

This library aims to provide a common set of basic UI components that can be used on web applications.

[See the live demo/documentation](https://atti-components.netlify.com/).

## Basic usage for any project

### Installation

To use this library, simply add it as a dependency to your yarn or npm project by running the command:

```
yarn add atti-components
```

This will install the latest atti-component version right away in your project

Then, you can start importing components:

```js
import * from 'atti-components'
```

For a more detailed view of individual components and how to use them, please [see the live demo/documentation](https://atti-components.netlify.com/).

### Usage example

To use the components, you should provide your application a theme. Based on [styled-components' usage](https://www.styled-components.com/docs/advanced#theming), you should wrap your components in a `ThemeProvider` component.

In atti-components, we provide you a custom `ThemeProvider` and a basic theme that you can override.

So the root of your application should look like something like this:

```js
import { defaultTheme, Button, ThemeProvider } from 'atti-components'

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <Button>Click me</Button>
  </ThemeProvider>
)
```

## Troubleshooting

### Missing font

In the `defaultTheme`, the font used is Roboto. As we don't want to include it for you to avoid any conflicts, you should include it by yourself.
For example you can add the following in one of your CSS files:

```css
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
```

If you don't want to use Roboto as your default font, you can simply override the `theme.fonts.fontFamily.primary` to any other value and include the corresponding font by yourself.

Please note that there is also a `theme.fonts.fontFamily.secondary` property but this one is not used so far. That said, it doesn't prevent you from overriding its value and using it :).

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

Run `yarn prettier` to run prettier on all your files. It will automatically fix them if necessary.

Run `yarn snapshots` to create automatically all snapshot tests of the components.

Run `yarn test` to run the tests.

Run `yarn test -u` to run and update the snapshot tests if the update is validated and expected.

Run `yarn preparecommit` to check if you can commit your code. The command runs `yarn snapshots`, `yarn prettier`, `yarn lint` and `yarn test` (you can add -u to run and update snapshots).

Run `yarn build` to transpile and compress your components into multiple bundles formats.

### Contributing rules and help

Before contributing to `atti-components`, please [check the contributing file](CONTRIBUTING.md). It contains lot of help on how to write your contribution the right way.

## Useful links

- React: https://github.com/facebook/react
- Styled-components : https://github.com/styled-components/styled-components
- Styleguidist : https://github.com/styleguidist/react-styleguidist
