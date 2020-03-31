import styled, { css } from 'styled-components'
import { Text } from '../../Typographies'

const borders = css`
  border: ${({ theme }) => theme.components.input.input.borders.width} solid
    ${({ theme, variant }) => theme.components.input.input.colors[variant].border};
  border-radius: ${({ theme }) => theme.components.input.input.borders.radius};
`

const colors = css`
  color: ${({ theme, variant }) => theme.components.input.input.colors[variant].text};
  caret-color: ${({ theme, variant }) => theme.components.input.input.colors[variant].caret};
`

const sizes = css`
  height: ${({ theme }) => theme.components.input.input.sizes.height};
  width: ${({ theme }) => theme.components.input.input.sizes.width};
`

const spaces = css`
  padding: ${({ theme }) => theme.components.input.input.spaces.paddingHeight}
    ${({ theme }) => theme.components.input.input.spaces.paddingWidth}
    ${({ theme }) => theme.components.input.input.spaces.paddingHeight}
    ${({ theme }) => theme.components.input.input.spaces.paddingWidth};
`

const StyledInput = styled(Text.withComponent('input'))`
  ${borders};
  ${colors};
  ${sizes};
  ${spaces};

  ::placeholder {
    color: ${({ theme, variant }) => theme.components.input.input.colors[variant].placeholder};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme, variant }) =>
      theme.components.input.input.colors[variant].borderFocus};
    box-shadow: ${({ theme }) => theme.components.input.input.boxShadows.boxShadowFocus};
  }
`

StyledInput.defaultProps = {
  variant: 'normal',
}

export default StyledInput
