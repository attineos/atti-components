import styled, { css } from 'styled-components'

const colors = css`
  color: ${({ theme }) => theme.components.textarea.colors.text};
  background: ${({ theme }) => theme.components.textarea.colors.background};
`

const StyledLabelTextArea = styled.label`
  ${colors};
  border: ${({ theme }) => theme.components.textarea.border.labelBorder};
  margin-bottom: ${({ theme }) => theme.components.textarea.spaces.marginBottom};
  display: block;
`

export default StyledLabelTextArea
