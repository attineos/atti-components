import styled from 'styled-components'

const interpolateMargingCols = cols => {
  const margingColsCount = Math.floor(cols / 2)
  return cols + margingColsCount
}

const getColumsStyle = (start, end) => `grid-column: ${start} / ${end};`
const getColumsStyleForIE = (start, end) => `
  -ms-grid-column: ${interpolateMargingCols(start)};
  -ms-grid-column-span: ${interpolateMargingCols(end - start)};
`

const GridCellStyle = styled.div`
  ${({ colStartMobile, colEndMobile }) => getColumsStyle(colStartMobile, colEndMobile)}
  ${({ colStartMobile, colEndMobile }) => getColumsStyleForIE(colStartMobile, colEndMobile)}
  
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
  ${({ colStartTablet, colEndTablet }) => getColumsStyle(colStartTablet, colEndTablet)}
  ${({ colStartTablet, colEndTablet }) => getColumsStyleForIE(colStartTablet, colEndTablet)}
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  ${({ colStartDesktop, colEndDesktop }) => getColumsStyle(colStartDesktop, colEndDesktop)}
  ${({ colStartDesktop, colEndDesktop }) => getColumsStyleForIE(colStartDesktop, colEndDesktop)}
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  ${({ colStartXlDesktop, colEndXlDesktop }) => getColumsStyle(colStartXlDesktop, colEndXlDesktop)}
  ${({ colStartXlDesktop, colEndXlDesktop }) =>
    getColumsStyleForIE(colStartXlDesktop, colEndXlDesktop)}
  }
`

export default GridCellStyle
