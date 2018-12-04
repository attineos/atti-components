import styled, { css } from 'styled-components'
import Text from '../../Text'

const borders = css`
  border: ${({ theme }) => theme.components.textarea.textarea.borders.width} solid
    ${({ theme }) => theme.components.textarea.textarea.colors.border};
  border-radius: ${({ theme }) => theme.components.textarea.textarea.borders.radius};
`

const colors = css`
  color: ${({ theme }) => theme.components.textarea.textarea.colors.text};
  caret-color: ${({ theme }) => theme.components.textarea.textarea.colors.caret};
`

const spaces = css`
  padding: ${({ theme }) => theme.components.textarea.textarea.spaces.padding};
`

const StyledTextArea = styled(Text.withComponent('textarea'))`
  ${borders};
  ${colors};
  ${spaces};

  ::placeholder {
    color: ${({ theme }) => theme.components.textarea.textarea.colors.placeholder};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.components.textarea.textarea.colors.borderFocus};
    box-shadow: ${({ theme }) => theme.components.textarea.textarea.boxShadows.boxShadowFocus};
  }
`

export default StyledTextArea
