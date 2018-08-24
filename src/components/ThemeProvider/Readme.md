Theme declaration :

```js
const { Fragment } = require('react')
const styled = require('styled-components')

const Square = styled.default.div`
    height: 100px;
    width: 100px;
    background-color: ${({ theme }) => theme.components.square.background};
    border: 2px solid ${({ theme }) => theme.components.square.border};
  `

const theme = {
  colors: {
    primary: 'grey',
    secondary: 'black',
  },
  componentsFactory: ({ colors }) => ({
    square: {
      background: colors.primary,
      border: colors.secondary,
    },
  }),
}

const colorOverride = {
  colors: {
    primary: 'black',
  },
  components: {
    square: {
      border: 'red',
    },
  },
}
;<ThemeProvider theme={theme}>
  <Fragment>
    <Square />
    <ThemeProvider otherTheme={colorOverride}>
      <Square />
    </ThemeProvider>
  </Fragment>
</ThemeProvider>
```
