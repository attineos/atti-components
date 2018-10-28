A basic grid container with some cells.
Cell can change layout based on viewport size

```js
<LayoutContainer type="CONTAINER_GRID_TYPE">
  <LayoutGridCell
    cols={[
      [1, 2], // Mobile
      [1, 2], // Tablet
      [1, 3], // Desktop
      //xlDesktop is infered from previous one
    ]}
  >
    One cell
  </LayoutGridCell>
  <LayoutGridCell cols={[[3, 4], [3, 4], [4, 6]]}>Another cell</LayoutGridCell>
  <LayoutGridCell cols={[[1, 1], [1, 1], [1, 2]]}>One cell on another line</LayoutGridCell>
  <LayoutGridCell cols={[[2, 3], [2, 3], [3, 4]]}>Another cell on another line</LayoutGridCell>
  <LayoutGridCell cols={[[4, 4], [4, 4], [5, 6]]}>The very last cell</LayoutGridCell>
  <LayoutGridCell cols={[[1, 4], [1, 4], [1, 6]]}>Full line cell</LayoutGridCell>
</LayoutContainer>
```

```js
<LayoutContainer type="CONTAINER_GRID_TYPE">
  <LayoutGridCell cols={[[1, 4], [1, 4], [1, 2]]}>Cells on one line</LayoutGridCell>
  <LayoutGridCell cols={[[1, 4], [1, 4], [2, 3]]}>The goes to new line</LayoutGridCell>
  <LayoutGridCell cols={[[1, 4], [1, 4], [3, 4]]}>on mobile and tablets</LayoutGridCell>
</LayoutContainer>
```
