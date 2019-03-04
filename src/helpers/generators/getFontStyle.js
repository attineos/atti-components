import { css } from 'styled-components'
import { get } from 'lodash'
import displays from '../displays'
import lineHeight from '../lineHeight'
import margins from '../margins'
import paddings from '../paddings'
import sizes from '../sizes'

const getFontStyle = fontType => css`
  color: ${({ theme }) => get(theme, `components.${fontType}.colors.text`)};
  font-size: ${({ theme }) => get(theme, `components.${fontType}.fonts.fontSize`)};
  font-family: ${({ theme }) => get(theme, `components.${fontType}.fonts.fontFamily`)};
  line-height: ${({ theme }) => get(theme, `components.${fontType}.fonts.lineHeight`)};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  ${displays}
  ${lineHeight}
  ${margins}
  ${paddings}
  ${sizes}
`

export default getFontStyle
