import styled, { css } from 'styled-components'

const borders = css`
  border: ${({ theme }) => theme.components.textarea.textarea.borders.width} solid
    ${({ theme }) => theme.components.textarea.textarea.borders.color};
`

const colors = css`
  background: ${({ theme }) => theme.components.textarea.textarea.colors.background};
  color: ${({ theme }) => theme.components.textarea.textarea.colors.text};
`

const fonts = css`
  font-size: ${({ theme }) => theme.components.textarea.textarea.fonts.fontSize};
  font-weight: ${({ theme }) => theme.components.textarea.textarea.fonts.fontWeight};
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
    color: ${({ theme }) => theme.colors.extraDarkSmoke};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.colors.secondary};
  }
`

export default StyledTextArea
