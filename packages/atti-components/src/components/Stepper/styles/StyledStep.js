import styled from 'styled-components'

const StyledStep = styled.button`
  position: absolute;

  width: ${({ theme }) => theme.components.stepper.sizes.ellipse};
  height: ${({ theme }) => theme.components.stepper.sizes.ellipse};
  background-color: white;
  border: 0;
  cursor: pointeur;
`

export default StyledStep
