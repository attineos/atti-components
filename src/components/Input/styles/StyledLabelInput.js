import styled, { css } from 'styled-components'

const colors = css`
  color: ${({ theme }) => theme.components.input.colors.text};
  background: ${({ theme }) => theme.components.input.colors.background};
`

const StyledLabelInput = styled.label`
  ${colors};
  border: ${({ theme }) => theme.components.input.border.labelBorder};
  display: block;
`

export default StyledLabelInput
