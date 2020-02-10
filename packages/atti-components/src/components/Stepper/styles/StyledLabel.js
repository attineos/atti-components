import styled from 'styled-components'

const StyledLabel = styled.p`
  font-size: ${({ theme }) => theme.components.stepper.fonts.fontSize};
  font-family: ${({ theme }) => theme.components.stepper.fonts.fontFamily};
  text-align: center;
  margin-top: ${({ theme }) => theme.components.stepper.sizes.marginTopLbl};
  color: ${({ theme }) => theme.components.stepper.colors.text};

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    position: absolute;
    top: calc(50% - ${({ theme }) => theme.components.stepper.fonts.fontSize});
    left: ${({ theme }) => theme.components.stepper.sizes.leftLbl};
  }
`

export default StyledLabel
