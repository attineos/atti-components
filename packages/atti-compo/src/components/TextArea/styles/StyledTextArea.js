import styled, { css } from 'styled-components'

const border = css`
  border-radius: ${({ theme }) => theme.components.textarea.border.radius};
  border-width: ${({ theme }) => theme.components.textarea.border.widths};
`

const colors = css`
  background: ${({ theme }) => theme.components.textarea.colors.background};
  color: ${({ theme }) => theme.components.textarea.colors.text};
`

const StyledTextArea = styled.textarea`
  ${border};
  ${colors};
`

export default StyledTextArea
