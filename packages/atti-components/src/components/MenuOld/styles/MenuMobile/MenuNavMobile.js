import styled from 'styled-components'

import Container from 'components/Container'
import MenuOpenerContainer from './MenuOpenerContainer'

const MenuNavMobile = styled(Container.withComponent('nav'))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  ${({ isVertical, theme }) =>
    isVertical &&
    `
      @media only screen and (min-width: ${theme.breakpoints.tabletMin}) {
        ${MenuOpenerContainer} {
          display: none;
        }
      }
    `}
`

export default MenuNavMobile
