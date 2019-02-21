**Please note that this component should be the first component imported in your project ! Otherwise the style may be broken.**

Theme declaration :

```js
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
;<ThemeProvider theme={theme} suppressResetCss>
  <>
    <Square />
    <ThemeProvider otherTheme={colorOverride} suppressResetCss>
      <Square />
    </ThemeProvider>
  </>
</ThemeProvider>
```
