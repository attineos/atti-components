A basic grid container with some cells in it.

mobile = 6 cols

tablet = 6 cols

desktop = 12 cols

xlDesktop = 12 cols

```js
<Grid>
  <Cell
    cols={[
      [1, 7], // Mobile
      [1, 7], // Tablet
      [1, 5], // Desktop
      //xlDesktop is infered from previous one
    ]}
  >
    Cells on one line
  </Cell>
  <Cell cols={[[1, 7], [1, 7], [5, 9]]}>Then goes to new line</Cell>
  <Cell cols={[[1, 7], [1, 7], [9, 13]]}>on mobile and tablets</Cell>
</Grid>
```
