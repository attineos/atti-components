import styled, { css } from 'styled-components'

const borders = css`
  border: ${({ theme }) => theme.components.input.input.borders.width} solid
    ${({ theme }) => theme.components.input.input.colors.border};
  border-radius: ${({ theme }) => theme.components.input.input.borders.radius};
`

const colors = css`
  color: ${({ theme }) => theme.components.input.input.colors.text};
  caret-color: ${({ theme }) => theme.components.input.input.colors.caret};
`

const fonts = css`
  font-size: ${({ theme }) => theme.components.input.input.fonts.fontSize};
  font-family: ${({ theme }) => theme.components.input.input.fonts.fontFamily};
`

const sizes = css`
  min-height: ${({ theme }) => theme.components.input.input.sizes.minHeight};
`

const spaces = css`
  padding: 0 ${({ theme }) => theme.components.input.input.spaces.paddingWidth};
`

const StyledInput = styled.input`
  ${borders};
  ${colors};
  ${fonts};
  ${sizes};
  ${spaces};

  ::placeholder {
    color: ${({ theme }) => theme.components.input.input.colors.placeholder};
  }

  &:focus {
    border-color: ${({ theme }) => theme.components.input.input.colors.borderFocus};
    box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.components.input.input.colors.boxShadowFocus};
  }
`

export default StyledInput
