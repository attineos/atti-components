import styled from 'styled-components'

const MenuMobile = styled.div`
  height: ${({ theme }) => theme.components.menu.spaces.height};
  background-color: ${({ theme }) => theme.components.menu.colors.background};
  display: flex;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopMin}) {
    display: none;
  }
`

export default MenuMobile
