import styled, { css } from 'styled-components'

const colors = css``

const sizes = css`
  height: ${({ theme }) => theme.components.menu.menuDesktop.withLiftedTabs.menu.sizes.height};
  width: ${({ theme }) => theme.components.menu.menuDesktop.withLiftedTabs.menu.sizes.width};
`

const StyledMenu = styled.nav`
  ${colors};
  ${sizes};

  display: flex;
  align-items: center;

  li {
    flex-grow: 1;
  }
  li:first-child {
    border-left: none;
  }
  li:last-child {
    border-right: none;
  }
`

export default StyledMenu
