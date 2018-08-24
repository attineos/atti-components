import styled from 'styled-components'

import { range, map } from 'lodash'

const getColumnTemplate = colCount => map(range(colCount), () => '1fr').join(' ')

const getColumnTemplateForIE = (colCount, gapSize) =>
  map(range(colCount), () => '1fr').join(` ${gapSize}px `)

const getStyleString = (colCount, totalSize, gapSize) => `
grid-gap: ${gapSize};
max-width: ${totalSize}
-ms-grid-columns: ${getColumnTemplateForIE(colCount, gapSize)};
grid-template-columns: ${getColumnTemplate(colCount)};
`

const GridContainerStyle = styled.div`
  display: -ms-grid;
  display: grid;

  width: 100%;

  ${({ theme }) =>
    getStyleString(
      theme.components.grid.cols.xlDesktop,
      theme.components.grid.maxWidth.xlDesktop,
      theme.components.grid.gap.xlDesktop,
    )}
    
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
  ${({ theme }) =>
    getStyleString(
      theme.components.grid.cols.desktop,
      theme.components.grid.maxWidth.desktop,
      theme.components.grid.gap.desktop,
    )}
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${({ theme }) =>
      getStyleString(
        theme.components.grid.cols.tablet,
        theme.components.grid.maxWidth.tablet,
        theme.components.grid.gap.tablet,
      )}
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    ${({ theme }) =>
      getStyleString(
        theme.components.grid.cols.mobile,
        theme.components.grid.maxWidth.mobile,
        theme.components.grid.gap.mobile,
      )}
  }
`

export default GridContainerStyle
