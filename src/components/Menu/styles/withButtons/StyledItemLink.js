import styled from 'styled-components'
import Link from 'components/Link'

const ItemLink = styled(Link)`
  height: 100%;
  width: 100%;

  padding: 0 ${({ theme }) => theme.components.menu.withButtons.link.spaces.paddingWidth};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-bottom: ${({ theme }) => theme.components.menu.withButtons.menu.bottomBorder} solid
    ${({ isSelected, theme }) =>
      isSelected
        ? theme.components.menu.withButtons.link.colors.bottomBorderSelected
        : theme.components.menu.withButtons.link.colors.bottomBorder};
  color: ${({ isSelected, theme }) =>
    isSelected
      ? theme.components.menu.withButtons.link.colors.textSelected
      : theme.components.menu.withButtons.link.colors.text};
  background-color: ${({ isSelected, theme }) =>
    isSelected
      ? theme.components.menu.withButtons.link.colors.backgroundSelected
      : theme.components.menu.withButtons.link.colors.background};

  &:hover {
    background-color: ${({ theme }) =>
      theme.components.menu.withButtons.link.colors.backgroundHover};
    color: ${({ theme }) => theme.components.menu.withButtons.link.colors.textHover};
  }
`

export default ItemLink