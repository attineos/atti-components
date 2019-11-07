import styled from 'styled-components'

const StyledInputPopdownContainer = styled.div`
  position: relative;
`

const StyledInputPopdown = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};

  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;

  ${({ theme }) => `
    background: ${theme.components.inputPopdown.colors.background};
    box-shadow: ${theme.components.inputPopdown.boxShadows.boxShadow};
    border-radius: ${theme.components.inputPopdown.borders.radius};
  `}
`

export { StyledInputPopdownContainer, StyledInputPopdown }
