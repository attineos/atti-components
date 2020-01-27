import styled from 'styled-components'

const StyledStep = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ theme }) => theme.components.stepper.sizes.ellipse};
  height: ${({ theme }) => theme.components.stepper.sizes.ellipse};
`

export default StyledStep
