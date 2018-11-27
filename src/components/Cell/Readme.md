Cells can change layout based on viewport size.

Cells are mobile first so if you don't specify sizes for each breakpoint, it will be infered from previous one.

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
