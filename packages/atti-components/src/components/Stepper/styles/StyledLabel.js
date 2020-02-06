import styled from 'styled-components'

const StyledLabel = styled.p`
  color: ${({ theme }) => theme.components.stepper.colors.text};
  text-align: center;
  margin-top: ${({ theme }) => theme.components.stepper.sizes.marginTopLbl};
  font-size: ${({ theme }) => theme.components.stepper.fonts.fontSize};
  font-family: ${({ theme }) => theme.components.stepper.fonts.fontFamily};

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
  }
`

export default StyledLabel
