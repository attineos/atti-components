import styled from 'styled-components'

const Line = styled.div`
  position: absolute;
  ${({ theme }) => `
    height: ${theme.components.menu.burgerMenu.line.spaces.height};
    width: ${theme.components.menu.burgerMenu.spaces.width};
    background-color: ${theme.components.menu.burgerMenu.line.colors.background};
    border-radius: ${theme.components.menu.burgerMenu.line.borderRadius};
    transition: transform ${theme.animations.duration.d4} ease-in-out;
  `}
`

export default Line
