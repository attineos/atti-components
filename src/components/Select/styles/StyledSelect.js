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
  border-radius: 3px;
  margin-bottom: ${({ theme }) => theme.components.select.select.spaces.marginBottom};

  height: 36px;
  padding: 0px 30px 0 10px;
  position: relative;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.colors.secondary};
  }
`

export default StyledSelect
