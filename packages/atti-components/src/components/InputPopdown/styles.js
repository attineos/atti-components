import styled from 'styled-components'

const StyledInputPopdownContainer = styled.div`
  width: 100%;

  position: relative;
`

const StyledInputPopdown = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};

  position: absolute;
  width: 100%;

  ${({ theme }) => `
    background: ${theme.components.inputPopdown.colors.background};
    box-shadow: ${theme.components.inputPopdown.boxShadows.boxShadow};
    border-radius: ${theme.components.inputPopdown.borders.radius};
  `}
`

export { StyledInputPopdownContainer, StyledInputPopdown }
