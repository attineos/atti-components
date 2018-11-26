import styled from 'styled-components'

import { join, range, map } from 'lodash'

import wrapMediaQuery from 'helpers/wrapMediaQuery'
import BaseContainerStyle from './BaseContainerStyle'

const getColumnTemplate = colCount => map(range(colCount), () => '1fr').join(' ')

const getColumnTemplateForIE = (colCount, gapSize) =>
  map(range(colCount), () => '1fr').join(` ${gapSize}px `)

const getStyleString = (colCount, totalSize, gapSize) => `
  grid-gap: ${gapSize};
  max-width: ${totalSize}
  -ms-grid-columns: ${getColumnTemplateForIE(colCount, gapSize)};
  grid-template-columns: ${getColumnTemplate(colCount)};
`

const GridContainerStyle = styled(BaseContainerStyle)`
  display: -ms-grid;
  display: grid;

  ${({ theme }) =>
    join(
      map(theme.layout, layout =>
        wrapMediaQuery(
          layout.from,
          layout.to,
          getStyleString(layout.cols, layout.maxWidth, layout.gap),
        ),
      ),
      '',
    )};
`

export default GridContainerStyle
