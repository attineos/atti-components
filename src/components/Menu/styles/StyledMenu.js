import styled, { css } from 'styled-components'

const colors = css`
  background: ${({ theme }) => theme.components.menu.colors.background};
  color: ${({ theme }) => theme.components.menu.colors.text};
`

const StyledMenu = styled.nav`
  ${colors};

  height: 50px;
  display: flex;
  align-items: center;
  ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
    height: 100%;
    li {
      display: inline-block;
      height: 100%;
      a {
        height: 100%;
        padding: 0 20px;
        display: inline-flex;
        align-items: center;
        color: ${({ theme }) => theme.colors.snow};
        &:hover {
          background-color: ${({ theme }) => theme.colors.snow};
          color: ${({ theme }) => theme.colors.slate};
          border-bottom: 0;
        }
      }
    }
  }
`

export default StyledMenu
