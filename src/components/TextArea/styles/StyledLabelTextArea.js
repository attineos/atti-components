import styled, { css } from 'styled-components'
import Label from '../../Label'

const colors = css`
  color: ${({ theme }) => theme.components.textarea.label.colors.text};
  background: ${({ theme }) => theme.components.textarea.label.colors.background};
`

const fonts = css`
  font-size: ${({ theme }) => theme.components.textarea.label.fonts.fontSize};
  font-weight: ${({ theme }) => theme.components.textarea.label.fonts.fontWeight};
  font-family: ${({ theme }) => theme.components.textarea.label.fonts.fontFamily};
`

const StyledLabelTextArea = styled(Label)`
  ${colors};
  ${fonts};
  margin-bottom: ${({ theme }) => theme.components.textarea.label.spaces.marginBottom};
  display: block;
`

export default StyledLabelTextArea
