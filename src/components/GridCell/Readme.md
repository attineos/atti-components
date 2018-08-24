A basic grid container with some cells.
Cell can change layout based on viewport size

```js
<GridContainer>
  <GridCell
    colStartDesktop="1"
    colEndDesktop="3"
    colStartTablet="1"
    colEndTablet="2"
    colStartMobile="1"
    colEndMobile="2"
  >
    One cell
  </GridCell>
  <GridCell
    colStartDesktop="4"
    colEndDesktop="6"
    colStartTablet="3"
    colEndTablet="4"
    colStartMobile="3"
    colEndMobile="4"
  >
    Another cell
  </GridCell>
  <GridCell
    colStartDesktop="1"
    colEndDesktop="2"
    colStartTablet="1"
    colEndTablet="1"
    colStartMobile="1"
    colEndMobile="1"
  >
    One cell on another line
  </GridCell>
  <GridCell
    colStartDesktop="3"
    colEndDesktop="4"
    colStartTablet="2"
    colEndTablet="3"
    colStartMobile="2"
    colEndMobile="3"
  >
    Another cell on another line
  </GridCell>
  <GridCell
    colStartDesktop="5"
    colEndDesktop="6"
    colStartTablet="4"
    colEndTablet="4"
    colStartMobile="4"
    colEndMobile="4"
  >
    The very last cell
  </GridCell>
  <GridCell
    colStartDesktop="1"
    colEndDesktop="6"
    colStartTablet="1"
    colEndTablet="4"
    colStartMobile="1"
    colEndMobile="4"
  >
    Full line cell
  </GridCell>
</GridContainer>
```
