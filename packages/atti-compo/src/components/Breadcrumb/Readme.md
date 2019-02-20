### Basic usage:

```js
<Breadcrumb
  elements={[
    { name: 'Home', url: '/#' },
    { name: 'Components', url: '/#components' },
    { name: 'Breadcrumb' },
  ]}
/>
```

Breacrumb with larger margin and custom separator :

```js
const customTheme = {
  components: {
    breadcrumb: {
      breadcrumbSeparator: {
        spaces: {
          marginLeft: '16px',
          marginRight: '16px',
        },
      },
    },
  },
}
;<ThemeProvider otherTheme={customTheme}>
  <Breadcrumb
    elements={[
      { name: 'Home', url: '/#' },
      { name: 'Components', url: '/components' },
      { name: 'Breadcrumb' },
    ]}
    separator={'>'}
  />
</ThemeProvider>
```

### Custom rendering:

The default rendering function expect each element to have at least a name as a string.
You can also provide an url to generate a link around this element.

You can provide your own rendering function as element.render. You can also pass a global rendering function as renderElement prop.
These functions will be called from most specific to least specific (ie: element, then global, then default). It'll stop at the first function that return a valid JSX component.

```js
const styled = require('styled-components')
const Red = styled.default.div`display: initial; color: red;`
const Green = styled.default.div`display: initial; color: green;`

;<Breadcrumb
  elements={[
    { name: 'Ultra Custom render', someProps: 15, render: element => <Red>{element.name}</Red> },
    { name: 'Global Breadcrumb Custom renderer', someProps: 10 },
    { name: 'Default Renderer with an url', url: '#' },
    { name: 'Default Renderer without an url' },
  ]}
  separator={'>'}
  renderElement={element => {
    // Let's render, only when some prop is equals to 10
    // We return nothing (or null) so that it falls back to the default renderer
    if (element.someProps === 10) {
      return <Green>{element.name}</Green>
    }
  }}
/>
```
