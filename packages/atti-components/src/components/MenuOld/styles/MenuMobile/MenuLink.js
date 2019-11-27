import styled from 'styled-components'
import Link from 'components/Link'

const MenuLink = styled(Link)`
  color: ${({ theme }) => theme.components.menuOld.menuMobile.link.colors.text};
  display: flex;
  align-items: center;
  height: 100%;
  padding: ${({ theme }) =>
    `${theme.components.menuOld.menuMobile.link.spaces.paddingHeight} ${theme.components.menuOld.menuMobile.link.spaces.paddingWidth}`};
  border: none;
  ${({ isSelected, theme }) =>
    isSelected &&
    `
    background-color: ${theme.components.menuOld.menuMobile.link.colors.backgroundSelected};
    color: ${theme.components.menuOld.menuMobile.link.colors.textSelected};
  `}
  &:hover {
    background-color: ${({ theme }) =>
      theme.components.menuOld.menuMobile.link.colors.backgroundHover};
    color: ${({ theme }) => theme.components.menuOld.menuMobile.link.colors.textHover};
  }
`

export default MenuLink
