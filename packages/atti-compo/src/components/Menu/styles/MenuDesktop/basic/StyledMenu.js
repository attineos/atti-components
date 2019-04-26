import styled, { css } from 'styled-components'

const colors = css`
  background: ${({ theme }) => theme.components.menu.menuDesktop.basic.menu.colors.background};
`

const sizes = css`
  height: ${({ theme }) => theme.components.menu.menuDesktop.withButtons.menu.sizes.height};
  width: ${({ theme }) => theme.components.menu.menuDesktop.withButtons.menu.sizes.width};
`

const StyledMenu = styled.nav`
  ${colors};
  ${sizes};

  display: flex;
  align-items: center;
`

export default StyledMenu
