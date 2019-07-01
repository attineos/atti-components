import styled from 'styled-components'
import Link from 'components/Link'

const StyledItemLink = styled(Link)`
  height: 100%;
  padding: 0 ${({ theme }) => theme.components.menu.menuDesktop.basic.link.spaces.paddingWidth};
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.components.menu.menuDesktop.basic.link.colors.text};
  border-bottom: 0;
  &:hover {
    background-color: ${({ theme }) =>
      theme.components.menu.menuDesktop.basic.link.colors.backgroundHover};
    color: ${({ theme }) => theme.components.menu.menuDesktop.basic.link.colors.textHover};
  }

  ${({ isSelected, theme }) =>
    isSelected &&
    `
    background-color: ${theme.components.menu.menuDesktop.basic.link.colors.backgroundHover};
    color: ${theme.components.menu.menuDesktop.basic.link.colors.textHover};
  `}
`

export default StyledItemLink
