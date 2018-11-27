import styled from 'styled-components'
import { join, map, range } from 'lodash'

import wrapMediaQuery from 'helpers/wrapMediaQuery'

import Container from '../Container'

const getColumnTemplate = colCount => map(range(colCount), () => '1fr').join(' ')

const getColumnTemplateForIE = (colCount, gapSize) =>
  map(range(colCount), () => '1fr').join(` ${gapSize}px `)

// Iterate over the responsive spaces to apply the corresponding rules
const responsiveGrid = layout => `
  grid-gap: ${layout.gap};
  -ms-grid-columns: ${getColumnTemplateForIE(layout.cols, layout.gap)};
  grid-template-columns: ${getColumnTemplate(layout.cols)};
`

// By default, Container is full-sized and center-aligned
const Grid = styled(Container)`
  display: -ms-grid;
  display: grid;
  ${({ theme }) =>
    join(
      map(theme.layout, layout => wrapMediaQuery(layout.from, layout.to, responsiveGrid(layout))),
      '',
    )};
`

/** @component */
export default Grid
