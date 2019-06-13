import { css } from 'styled-components'

import { join, map, values, first, last, get } from 'lodash'

import wrapMediaQuery from './generators/wrapMediaQuery'

const interpolateMargingCols = cols => {
  const margingColsCount = Math.floor(cols / 2)
  return cols + margingColsCount
}

const getColumsStyle = (start, end) => `grid-column: ${start} / ${end};`
const getColumsStyleForIE = (start, end) => `
  -ms-grid-column: ${interpolateMargingCols(start)};
  -ms-grid-column-span: ${interpolateMargingCols(end - start)};
`

export default () => css`
  ${({ theme, cols }) =>
    join(
      map(values(theme.layout), (layout, index) =>
        wrapMediaQuery(
          layout.from,
          layout.to,
          `
        ${getColumsStyle(
          first(get(cols, `[${index}]`, last(cols))),
          last(get(cols, `[${index}]`, last(cols))),
        )}
        ${getColumsStyleForIE(
          first(get(cols, `[${index}]`, last(cols))),
          last(get(cols, `[${index}]`, last(cols))),
        )}
      `,
        ),
      ),
      '',
    )};
`
