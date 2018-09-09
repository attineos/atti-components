import { css } from 'styled-components'
import { get } from 'lodash'

const getFontStyle = fontType => css`
  color: ${({ theme }) => get(theme, `components.${fontType}.colors.text`)};
  font-family: ${({ theme }) => get(theme, `components.${fontType}.fonts.fontFamily`)};
  font-size: ${({ theme }) => get(theme, `components.${fontType}.fonts.fontSize`)};
  font-weight: ${({ theme }) => get(theme, `components.${fontType}.fonts.fontWeight`)};
  line-height: ${({ theme }) => get(theme, `components.${fontType}.fonts.lineHeight`)};
  text-align: ${({ textAlign }) => textAlign};
`

export default getFontStyle
