import styled from 'styled-components'
import Link from 'components/Link'

const StyledItemLink = styled(Link)`
  height: 100%;
  width: 100%;

  padding: 0 ${({ theme }) =>
    theme.components.menu.menuDesktop.withLiftedTabs.link.spaces.paddingWidth};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: ${({ isSelected, theme }) =>
    isSelected
      ? theme.components.menu.menuDesktop.withLiftedTabs.link.colors.textSelected
      : theme.components.menu.menuDesktop.withLiftedTabs.link.colors.text};
  background-color: ${({ isSelected, theme }) =>
    isSelected
      ? theme.components.menu.menuDesktop.withLiftedTabs.link.colors.backgroundSelected
      : theme.components.menu.menuDesktop.withLiftedTabs.link.colors.background};

  border-bottom: ${({ isSelected, theme }) =>
    `${theme.components.menu.menuDesktop.withLiftedTabs.menu.border} solid ${
      !isSelected
        ? theme.components.menu.menuDesktop.withLiftedTabs.menu.colors.border
        : 'transparent'
    }`};
  border-left: ${({ isSelected, theme }) =>
    `${theme.components.menu.menuDesktop.withLiftedTabs.menu.border} solid ${
      isSelected
        ? theme.components.menu.menuDesktop.withLiftedTabs.menu.colors.border
        : 'transparent'
    }`};
  border-right: ${({ isSelected, theme }) =>
    `${theme.components.menu.menuDesktop.withLiftedTabs.menu.border} solid ${
      isSelected
        ? theme.components.menu.menuDesktop.withLiftedTabs.menu.colors.border
        : 'transparent'
    }`};
  border-top: ${({ isSelected, theme }) =>
    `${theme.components.menu.menuDesktop.withLiftedTabs.menu.border} solid ${
      isSelected
        ? theme.components.menu.menuDesktop.withLiftedTabs.menu.colors.border
        : 'transparent'
    }`};


  border-top-left-radius: ${({ theme }) =>
    theme.components.menu.menuDesktop.withLiftedTabs.menu.borderRadius};
  border-top-right-radius: ${({ theme }) =>
    theme.components.menu.menuDesktop.withLiftedTabs.menu.borderRadius};
}

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) =>
      theme.components.menu.menuDesktop.withLiftedTabs.link.colors.backgroundHover};
    color: ${({ theme }) => theme.components.menu.menuDesktop.withLiftedTabs.link.colors.textHover};
  }
`

export default StyledItemLink
