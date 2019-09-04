import styled, { css } from 'styled-components'

const fonts = css`
  font-size: ${({ theme }) => theme.components.breadcrumb.fonts.fontSize};
  font-weight: ${({ theme }) => theme.components.breadcrumb.fonts.fontWeight};
  font-family: ${({ theme }) => theme.components.breadcrumb.fonts.fontFamily};
`

const CurrentElement = styled.span`
  ${fonts};
  color: ${({ theme }) => theme.components.breadcrumb.currentElement.colors.text};
`

export default CurrentElement
