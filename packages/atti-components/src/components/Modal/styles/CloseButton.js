import styled from 'styled-components'

const CloseButton = styled('button')`
  background-color: transparent;
  box-shadow: none;
  border: 0;
  &:hover {
    cursor: pointer;
  }
  svg {
    path:first-child {
      fill: ${({ theme }) => theme.components.modal.colors.closeButton};
    }
  }
`

export default CloseButton
