import styled, { css } from 'styled-components'

const borders = css`
  border: ${({ theme }) => theme.components.textarea.textarea.borders.width} solid
    ${({ theme }) => theme.components.textarea.textarea.colors.border};
  border-radius: ${({ theme }) => theme.components.textarea.textarea.borders.radius};
`

const colors = css`
  color: ${({ theme }) => theme.components.textarea.textarea.colors.text};
  caret-color: ${({ theme }) => theme.components.textarea.textarea.colors.caret};
`

const fonts = css`
  font-size: ${({ theme }) => theme.components.textarea.textarea.fonts.fontSize};
  font-family: ${({ theme }) => theme.components.textarea.textarea.fonts.fontFamily};
`

const spaces = css`
  padding: ${({ theme }) => theme.components.textarea.textarea.spaces.padding};
`

const StyledTextArea = styled.textarea`
  ${borders};
  ${colors};
  ${fonts};
  ${spaces};

  ::placeholder {
    color: ${({ theme }) => theme.components.textarea.textarea.colors.placeholder};
  }

  &:focus {
    border-color: ${({ theme }) => theme.components.textarea.textarea.colors.borderFocus};
    box-shadow: 0px 0px 2px 0px
      ${({ theme }) => theme.components.textarea.textarea.colors.boxShadowFocus};
  }
`

export default StyledTextArea
