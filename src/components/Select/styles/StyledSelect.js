import styled, { css } from 'styled-components'

const colors = css`
  color: ${({ theme }) => theme.components.select.colors.text};
  background: ${({ theme }) => theme.components.select.colors.background};
`

const fonts = css`
  font-size: ${({ theme }) => theme.components.select.fonts.fontSize};
  font-weight: ${({ theme }) => theme.components.select.fonts.fontWeight};
  font-family: ${({ theme }) => theme.components.select.fonts.fontFamily};
`

const StyledSelect = styled.select`
  ${colors};
  ${fonts};
  border: ${({ theme }) => theme.components.select.border.outterBorder};
  margin-bottom: ${({ theme }) => theme.components.select.spaces.marginBottom};
`

export default StyledSelect
