import styled from 'styled-components'
import Link from 'components/Link'

const MenuLink = styled(Link)`
  color: ${({ theme }) => theme.components.menu.menuMobile.link.colors.text};
  display: flex;
  align-items: center;
  height: 100%;
  padding: ${({ theme }) =>
    `${theme.components.menu.menuMobile.link.spaces.paddingHeight} ${theme.components.menu.menuMobile.link.spaces.paddingWidth}`};
  border: none;
  ${({ isSelected, theme }) =>
    isSelected &&
    `
    background-color: ${theme.components.menu.menuMobile.link.colors.backgroundSelected};
    color: ${theme.components.menu.menuMobile.link.colors.textSelected};
  `}
  &:hover {
    background-color: ${({ theme }) =>
      theme.components.menu.menuMobile.link.colors.backgroundHover};
    color: ${({ theme }) => theme.components.menu.menuMobile.link.colors.textHover};
  }
`

export default MenuLink
