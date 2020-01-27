import styled from 'styled-components'

const StyledStep = styled.input`
  position: absolute;

  width: ${({ theme }) => theme.components.stepper.sizes.ellipse};
  height: ${({ theme }) => theme.components.stepper.sizes.ellipse};
  background-color: white;
  border: 0;
`

export default StyledStep
