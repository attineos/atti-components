import styled, { css } from 'styled-components'

const colors = css``

const sizes = css`
  height: ${({ theme }) => theme.components.menu.menuDesktop.withButtons.menu.sizes.height};
  width: ${({ theme }) => theme.components.menu.menuDesktop.withButtons.menu.sizes.width};
`

const StyledMenu = styled.nav`
  ${colors};
  ${sizes};

  display: flex;
  align-items: center;

  li {
    flex-grow: 1;
    border-right: 1px solid
      ${({ theme }) => theme.components.menu.menuDesktop.withButtons.menu.colors.border};
  }
  li:last-child {
    border-right: none;
  }
`

export default StyledMenu
