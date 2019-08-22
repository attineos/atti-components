import styled from 'styled-components'

const ModalContainer = styled('div')`
  z-index: 51;
  position: fixed;
  width: 80%;
  height: auto;
  max-height: 90vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${({ theme }) => `
    background: ${theme.components.modal.colors.background};
    box-shadow: ${theme.components.modal.boxShadows.boxShadow};
    border-radius: ${theme.components.modal.borders.radius};
  `}
`

export default ModalContainer
