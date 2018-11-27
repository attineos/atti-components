A basic grid container with some cells.
Cell can change layout based on viewport size

```js
<Grid>
  <Cell
    cols={[
      [1, 2], // Mobile
      [1, 2], // Tablet
      [1, 3], // Desktop
      //xlDesktop is infered from previous one
    ]}
  >
    One cell
  </Cell>
  <Cell cols={[[3, 4], [3, 4], [4, 6]]}>Another cell</Cell>
  <Cell cols={[[1, 1], [1, 1], [1, 2]]}>One cell on another line</Cell>
  <Cell cols={[[2, 3], [2, 3], [3, 4]]}>Another cell on another line</Cell>
  <Cell cols={[[4, 4], [4, 4], [5, 6]]}>The very last cell</Cell>
  <Cell cols={[[1, 4], [1, 4], [1, 6]]}>Full line cell</Cell>
</Grid>
```

```js
<Grid>
  <Cell cols={[[1, 6], [1, 6], [1, 4]]}>Cells on one line</Cell>
  <Cell cols={[[1, 6], [1, 6], [4, 8]]}>Then goes to new line</Cell>
  <Cell cols={[[1, 6], [1, 6], [8, 12]]}>on mobile and tablets</Cell>
</Grid>
```
