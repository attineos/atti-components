import styled from 'styled-components'

const StyledEllipse = styled.div`
  position: absolute;

  width: ${({ theme }) => theme.components.stepper.sizes.ellipse};
  height: ${({ theme }) => theme.components.stepper.sizes.ellipse};

  background-color: ${({ theme }) => theme.components.stepper.colors.bulle};
  border-radius: ${({ theme }) => theme.components.stepper.sizes.borderRadius};
`

export default StyledEllipse
