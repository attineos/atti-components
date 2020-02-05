import styled from 'styled-components'

const StyledMidLabel = styled.p`
  display: block;
  padding-top: 40%;
  font-size: ${({ theme }) => theme.components.stepper.fonts.fontSize};
  font-family: ${({ theme }) => theme.components.stepper.fonts.fontFamily};
  color: ${({ theme }) => theme.components.stepper.colors.midText};
  text-align: center;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: ${({ theme }) => theme.components.stepper.fonts.fontSizeMobile};
  }
`

export default StyledMidLabel
