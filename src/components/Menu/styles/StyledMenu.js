import styled, { css } from 'styled-components'

const colors = css`
  background: ${({ theme }) => theme.components.menu.menu.colors.background};
`

const sizes = css`
  height: ${({ theme }) => theme.components.menu.menu.sizes.minHeight};
`

const StyledMenu = styled.nav`
  ${colors};
  ${sizes};

  display: flex;
  align-items: center;
`

export default StyledMenu
