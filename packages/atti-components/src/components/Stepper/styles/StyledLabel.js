import styled from 'styled-components'

const StyledLabel = styled.p`
  position: relative;
  font-size: ${({ theme }) => theme.components.stepper.fonts.fontSize};
  font-family: ${({ theme }) => theme.components.stepper.fonts.fontFamily};
  text-align: center;
  color: ${({ theme }) => theme.components.stepper.colors.text};
  margin-top: ${({ theme }) => theme.components.stepper.sizes.marginTopLabel};
`

export default StyledLabel
