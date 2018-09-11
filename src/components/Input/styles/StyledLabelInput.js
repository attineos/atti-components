import styled, { css } from 'styled-components'

const colors = css`
  color: ${({ theme }) => theme.components.input.colors.text};
  background: ${({ theme }) => theme.components.input.colors.background};
`

const StyledLabelInput = styled.label`
  ${colors};
  display: block;
`

export default StyledLabelInput
