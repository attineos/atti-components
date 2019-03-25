import styled from 'styled-components'
import Link from '../../Link'

const ItemLink = styled(Link)`
  height: 100%;
  padding: 0 ${({ theme }) => theme.components.menu.link.spaces.paddingWidth};
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.components.menu.link.colors.text};
  border-bottom: 0;
  &:hover {
    background-color: ${({ theme }) => theme.components.menu.link.colors.backgroundHover};
    color: ${({ theme }) => theme.components.menu.link.colors.textHover};
  }

  ${({ isSelected }) =>
    isSelected &&
    `
    background-color: ${({ theme }) => theme.components.menu.link.colors.backgroundHover};
    color: ${({ theme }) => theme.components.menu.link.colors.textHover};
  `}
`

export default ItemLink
