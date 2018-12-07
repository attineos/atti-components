A basic grid container with some cells in it.

mobile = 6 cols

tablet = 6 cols

desktop = 12 cols

xlDesktop = 12 cols

```js
<Grid>
  <Cell
    cols={[
      [1, 6], // Mobile
      [1, 6], // Tablet
      [1, 4], // Desktop
      //xlDesktop is infered from previous one
    ]}
  >
    Cells on one line
  </Cell>
  <Cell cols={[[1, 6], [1, 6], [4, 8]]}>Then goes to new line</Cell>
  <Cell cols={[[1, 6], [1, 6], [8, 12]]}>on mobile and tablets</Cell>
</Grid>
```
