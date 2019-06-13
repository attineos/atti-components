import styled from 'styled-components'

const MenuOpenerLine = styled('div')`
  position: absolute;
  height: ${({ theme }) => theme.components.menu.menuMobile.opener.line.spaces.height};
  width: ${({ theme }) => theme.components.menu.menuMobile.opener.line.spaces.width};
  background-color: ${({ theme }) =>
    theme.components.menu.menuMobile.opener.line.colors.background};
  transition: transform 0.3s ease-in-out;
  border-radius: ${({ theme }) => theme.components.menu.menuMobile.opener.line.borderRadius};
`

export default MenuOpenerLine
