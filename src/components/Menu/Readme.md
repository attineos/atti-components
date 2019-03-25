Menu :

```js
<Menu
  elements={[
    { url: '/', name: 'Index page' },
    { url: '/#/Navigation?id=menu', name: 'Menu page' },
    { url: 'https://www.w3.org', name: 'W3C', target: '_blank' },
    {
      url: 'https://github.com/attineos/atti-component',
      name: 'Our Github Page',
      target: '_blank',
    },
  ]}
/>
```

### Custom rendering:

The default rendering function expect each element to have at least a name as a string.
You can also provide an url to generate a link around this element.

You can provide your own rendering function as element.render. You can also pass a global rendering function as renderElement prop.
These functions will be called from most specific to least specific (ie: element, then global, then default). It'll stop at the first function that return a valid JSX component.

```js
const styled = require('styled-components')

// Define some default CSS for our custom elements
const DefaultItem = styled.css`
  height: 100%;
  padding: 0 ${({ theme }) => theme.components.menu.link.spaces.paddingWidth};
  display: inline-flex;
  &:hover {
    background-color: ${({ theme }) => theme.components.menu.link.colors.backgroundHover};
    color: ${({ theme }) => theme.components.menu.link.colors.textHover};
  }
`

const Red = styled.default.li`
${DefaultItem}
display: initial; 
color: red;
`
const Green = styled.default.li`
${DefaultItem}
display: initial; 
color: green;
`

;<Menu
  elements={[
    { name: 'Specific Custom render', someProps: 15, render: element => <Red>{element.name}</Red> },
    { name: 'Global Custom renderer', someProps: 10 },
    { name: 'Default Renderer with an url', url: '#' },
    { name: 'Default Renderer w/out an url' },
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
