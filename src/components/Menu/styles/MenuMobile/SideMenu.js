import styled from 'styled-components'

const SideMenu = styled('nav')`
  position: fixed;
  height: 100vh;
  width: ${({ theme }) => theme.components.menu.menuMobile.menu.spaces.width};
  background-color: ${({ theme }) => theme.components.menu.menuMobile.menu.colors.background};
  top: 0;
  transition: ease 0.3s all;
  left: ${({ opened, theme }) =>
    opened ? '0' : `-${theme.components.menu.menuMobile.menu.spaces.width}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.components.menu.menuMobile.menu.spaces.paddingHeight} 0;
  z-index: 5;
`

export default SideMenu
