import styled from 'styled-components'

const SideMenu = styled('nav')`
  position: fixed;
  height: 100vh;
  top: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: ease 0.3s all;
  width: ${({ theme }) => theme.components.menu.menuMobile.menu.spaces.width};
  background-color: ${({ theme }) => theme.components.menu.menuMobile.menu.colors.background};
  padding: ${({ theme }) => theme.components.menu.menuMobile.menu.spaces.paddingHeight} 0;
  left: ${({ opened, theme }) =>
    opened ? '0' : `-${theme.components.menu.menuMobile.menu.spaces.width}`};
  ${({ isVertical, theme }) =>
    isVertical &&
    `
    @media only screen and (min-width: ${theme.breakpoints.tabletMin}) {
      left: 0;
    }
  `}
`

export default SideMenu
