import { css } from 'styled-components'
import { get } from 'lodash'

const getFontStyle = fontType => css`
  color: ${({ theme }) => get(theme, `components.${fontType}.colors.text`)};
  font-size: ${({ theme }) => get(theme, `components.${fontType}.fonts.fontSize`)};
  font-family: ${({ theme }) => get(theme, `components.${fontType}.fonts.fontFamily`)};
  line-height: ${({ theme }) => get(theme, `components.${fontType}.fonts.lineHeight`)};
  text-align: ${({ textAlign }) => textAlign || 'auto'};
`

export default getFontStyle
