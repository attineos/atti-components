import styled from 'styled-components'

const StyledLabel = styled.p`
  font-size: ${({ theme }) => theme.components.stepper.fonts.fontSize};
  font-family: ${({ theme }) => theme.components.stepper.fonts.fontFamily};
  text-align: center;
  color: ${({ theme }) => theme.components.stepper.colors.text};
  margin-top: 50%;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin-top: -25%;
    margin-left: 125%;
    text-align: right;
  }
`

export default StyledLabel
