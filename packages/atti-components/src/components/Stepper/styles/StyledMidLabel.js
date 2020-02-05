import styled from 'styled-components'

const StyledMidLabel = styled.p`
  display: block;
  padding-top: 40%;
  font-size: ${({ theme }) => theme.components.stepper.fonts.fontSize};
  font-family: ${({ theme }) => theme.components.stepper.fonts.fontFamily};
  color: ${({ theme }) => theme.components.stepper.colors.midText};
  text-align: center;
`

export default StyledMidLabel
