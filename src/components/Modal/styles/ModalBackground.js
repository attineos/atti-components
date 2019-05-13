import styled from 'styled-components'

const ModalBackground = styled('div')`
  display: block;
  content: ' ';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.components.modal.colors.overlayBackground};
  z-index: 50;
`

export default ModalBackground
