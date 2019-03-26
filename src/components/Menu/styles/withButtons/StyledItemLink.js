import styled from 'styled-components'
import Link from 'components/Link'

const ItemLink = styled(Link)`
  height: 100%;
  width: 100%;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.components.menu.withButtons.link.colors.text};
  border-bottom: 0;

  background-color: ${({ theme }) => theme.components.menu.withButtons.link.colors.background};

  &:hover {
    background-color: ${({ theme }) =>
      theme.components.menu.withButtons.link.colors.backgroundHover};
    color: ${({ theme }) => theme.components.menu.withButtons.link.colors.textHover};
  }

  ${({ isSelected }) =>
    isSelected &&
    `
    background-color: ${({ theme }) =>
      theme.components.menu.withButtons.link.colors.backgroundHover};
    color: ${({ theme }) => theme.components.menu.withButtons.link.colors.textHover};
  `}
`

export default ItemLink
