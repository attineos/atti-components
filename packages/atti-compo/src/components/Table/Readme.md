Table :

```js
<Table
  cols={[
    { name: 'ident', label: 'ID' },
    { name: 'name', label: 'Name' },
    { name: 'someData', label: 'SomeData' },
    { name: 'moreData', label: 'MoreData' },
  ]}
  elements={[
    {
      ident: 1,
      name: 'Product 1',
      someData: '17',
      moreData: '42',
    },
    {
      ident: 3,
      name: 'Product 13',
      someData: 'NA',
      moreData: '43',
    },
    {
      ident: 78,
      name: 'Product abc',
    },
  ]}
/>
```

You can also surcharge each render at multiple levels

```js
const styled = require('styled-components')
const CustomInnerCell = styled.default.span`
  color: red;
`
const CustomColRenderCell = styled.default.td`
  color: green;
`
const CustomColHeaderCell = styled.default.td`
  color: blue;
`
const SomeMoreDataFinder = styled.default.td`
  color: cyan;
`
;<Table
  // Override the default renderer on all cells
  // Here we check if the element has a special attribute on it to render a special color
  // If not, we return null so as to fallback to the renderer of next priority (in this case, the default renderer)
  renderCell={(col, element) =>
    !!element.SomeMoreData ? <SomeMoreDataFinder>{element[col.name]}</SomeMoreDataFinder> : null
  }
  cols={[
    { name: 'id', label: 'Ident' },
    {
      name: 'name',
      label: 'Name',
      // Override the value cells, just for that column
      renderCell: (col, element) => <CustomColRenderCell>{element[col.name]}</CustomColRenderCell>,
    },
    { name: 'someData', label: 'SomeData' },
    {
      name: 'moreData',
      label: 'MoreData',
      // Override the header cell, just for that col
      renderHeaderCell: col => <CustomColHeaderCell>{col.label}</CustomColHeaderCell>,
    },
  ]}
  elements={[
    {
      id: 6,
      name: 'First Product',
      someData: '',
      moreData: 'N/C',
    },
    {
      id: 1,
      name: <CustomInnerCell>Some red Product</CustomInnerCell>, // Display JSX inside this cell
      someData: '17',
      moreData: '42',
    },
    {
      id: 3,
      name: 'Product 13',
      someData: 'NA',
      moreData: '43',
      SomeMoreData: 'This is an invisible data', // Because no cols uses this name, it'll not be displayed
      // However it's still passed to renderers that has an element parameter
    },
    {
      id: 78,
      name: 'Product abc',
      // Missing data, the cell is rendererd anyway, but with null data,
      // It's up to the custom renderer can handle that case
    },
  ]}
/>
```
