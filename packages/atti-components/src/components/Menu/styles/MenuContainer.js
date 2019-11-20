import styled from 'styled-components'

import MenuMobile from '../components/MenuMobile'
import MenuDesktop from '../components/MenuDesktop'

const MenuContainer = styled('div')`
  ${MenuDesktop} {
    display: flex;
  }

  ${MenuMobile} {
    ${({ isVertical }) =>
      isVertical
        ? `
        display: flex;
      `
        : `
        display: none;
      `}
  }

  ${({ isResponsive, theme }) =>
    isResponsive &&
    `
    @media only screen and (max-width: ${theme.breakpoints.tabletMin}) {
      ${MenuDesktop} {
        display: none;
      }
      ${MenuMobile} {
        display: flex;
      }
    }
  `}
`

export default MenuContainer
