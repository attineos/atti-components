import styled from 'styled-components'

const StyledEllipse = styled.div`
  position: absolute;

  width: ${({ theme }) => theme.components.stepper.sizes.ellipse};
  height: ${({ theme }) => theme.components.stepper.sizes.ellipse};

  background-color: ${({ theme }) => theme.components.stepper.colors.bulle};
  border-radius: ${({ theme }) => theme.components.stepper.sizes.borderRadius};
  top: 0
  cursor: pointer;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);

  :hover {
    background-color: ${({ theme }) => theme.components.stepper.colors.hover};
  }
`

export default StyledEllipse
