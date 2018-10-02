import styled, { css } from 'styled-components'

const colors = css`
  color: ${({ theme }) => theme.components.select.select.colors.text};
  background: ${({ theme }) => theme.components.select.select.colors.background};
`

const fonts = css`
  font-size: ${({ theme }) => theme.components.select.select.fonts.fontSize};
  font-weight: ${({ theme }) => theme.components.select.select.fonts.fontWeight};
  font-family: ${({ theme }) => theme.components.select.select.fonts.fontFamily};
`

const StyledSelect = styled.select`
  ${colors};
  ${fonts};
  border: ${({ theme }) => theme.components.select.select.border.width} solid
    ${({ theme }) => theme.components.select.select.border.color};
  margin-bottom: ${({ theme }) => theme.components.select.select.spaces.marginBottom};
`

export default StyledSelect
