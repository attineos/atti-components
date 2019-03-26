import styled from 'styled-components'
import Link from 'components/Link'

const ItemLink = styled(Link)`
  height: 100%;
  width: 100%;
  
  padding: 0 ${({ theme }) => theme.components.menu.withLiftedTabs.link.spaces.paddingWidth};

  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  color: ${({ isSelected, theme }) =>
    isSelected
      ? theme.components.menu.withLiftedTabs.link.colors.textSelected
      : theme.components.menu.withLiftedTabs.link.colors.text};
  background-color: ${({ isSelected, theme }) =>
    isSelected
      ? theme.components.menu.withLiftedTabs.link.colors.backgroundSelected
      : theme.components.menu.withLiftedTabs.link.colors.background};
  
  border-bottom: ${({ isSelected, theme }) =>
    isSelected
      ? `none`
      : `${theme.components.menu.withLiftedTabs.menu.border} solid ${
          theme.components.menu.withLiftedTabs.menu.colors.border
        }`};
  border-left: ${({ isSelected, theme }) =>
    isSelected
      ? `${theme.components.menu.withLiftedTabs.menu.border} solid ${
          theme.components.menu.withLiftedTabs.menu.colors.border
        }`
      : `none`};
  border-right: ${({ isSelected, theme }) =>
    isSelected
      ? `${theme.components.menu.withLiftedTabs.menu.border} solid ${
          theme.components.menu.withLiftedTabs.menu.colors.border
        }`
      : `none`};
  border-top: ${({ isSelected, theme }) =>
    isSelected
      ? `${theme.components.menu.withLiftedTabs.menu.border} solid ${
          theme.components.menu.withLiftedTabs.menu.colors.border
        }`
      : `none`};
  
  border-top-left-radius: ${({ theme }) => theme.components.menu.withLiftedTabs.menu.borderRadius};
  border-top-right-radius: ${({ theme }) => theme.components.menu.withLiftedTabs.menu.borderRadius};
}

  &:hover {
    background-color: ${({ theme }) =>
      theme.components.menu.withLiftedTabs.link.colors.backgroundHover};
    color: ${({ theme }) => theme.components.menu.withLiftedTabs.link.colors.textHover};
  }
`

export default ItemLink
