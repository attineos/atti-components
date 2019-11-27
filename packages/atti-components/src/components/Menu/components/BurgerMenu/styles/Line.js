import styled from 'styled-components'

const Line = styled.div`
  position: absolute;
  height: ${({ theme }) => theme.components.menu.burgerMenu.line.spaces.height};
  width: ${({ theme }) => theme.components.menu.burgerMenu.spaces.width};
  background-color: ${({ theme }) => theme.components.menu.burgerMenu.line.colors.background};
  transition: transform 0.3s ease-in-out;
  border-radius: ${({ theme }) => theme.components.menu.burgerMenu.line.borderRadius};
`

export default Line
