import styled from 'styled-components'

const StyledBar = styled.span`
  position: absolute;

  width: ${({ theme }) => theme.components.stepper.sizes.widthBar};
  height: ${({ theme }) => theme.components.stepper.sizes.heightBar};
  margin-top: ${({ theme }) => theme.components.stepper.sizes.marginTopBar};

  background-color: ${({ theme }) => theme.components.stepper.colors.background};
  border-radius: ${({ theme }) => theme.components.stepper.sizes.borderRadius};
`

export default StyledBar
