import styled, { css } from 'styled-components'

const colors = css`
  background: ${({ theme }) => theme.components.menu.colors.background};
  color: ${({ theme }) => theme.components.menu.colors.text};
`

const fonts = css`
  font-family: ${({ theme }) => theme.components.menu.fonts.fontFamily};
  font-size: ${({ theme }) => theme.components.menu.fonts.fontSize};
  font-weight: ${({ theme }) => theme.components.menu.fonts.fontWeight};
`

const StyledMenu = styled.nav`
  ${colors};
  ${fonts};
`

export default StyledMenu
