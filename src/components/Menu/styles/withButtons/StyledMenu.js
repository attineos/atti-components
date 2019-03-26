import styled, { css } from 'styled-components'

const colors = css``

const sizes = css`
  height: ${({ theme }) => theme.components.menu.withButtons.menu.sizes.height};
  width: ${({ theme }) => theme.components.menu.withButtons.menu.sizes.width};
`

const StyledMenu = styled.nav`
  ${colors};
  ${sizes};

  display: flex;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.components.menu.withButtons.menu.colors.border};
  border-radius: ${({ theme }) => theme.components.menu.withButtons.menu.borderRadius};

  li {
    flex-grow: 1;
    border-right: 1px solid ${({ theme }) => theme.components.menu.withButtons.menu.colors.border};
  }
  li:last-child {
    border-right: none;
  }
`

export default StyledMenu
