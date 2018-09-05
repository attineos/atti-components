import { css } from 'styled-components'

const getFontStyle = fontType => css`
  color: ${({ theme }) => theme.components[fontType].colors.text};
  font-family: ${({ theme }) => theme.components[fontType].fonts.fontFamily};
  font-size: ${({ theme }) => theme.components[fontType].fonts.fontSize};
  font-weight: ${({ theme }) => theme.components[fontType].fonts.fontWeight};
  line-height: ${({ theme }) => theme.components[fontType].fonts.lineHeight};
  text-align: ${({ textAlign }) => textAlign || 'inherit'};
`

export default getFontStyle
