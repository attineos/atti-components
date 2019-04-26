import styled, { css } from 'styled-components'
import { Text } from '../../Typographies'

const borders = css`
  border: ${({ theme }) => theme.components.input.input.borders.width} solid
    ${({ theme, variance }) => theme.components.input.input.colors[variance].border};
  border-radius: ${({ theme }) => theme.components.input.input.borders.radius};
`

const colors = css`
  color: ${({ theme, variance }) => theme.components.input.input.colors[variance].text};
  caret-color: ${({ theme, variance }) => theme.components.input.input.colors[variance].caret};
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
    color: ${({ theme, variance }) => theme.components.input.input.colors[variance].placeholder};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme, variance }) =>
      theme.components.input.input.colors[variance].borderFocus};
    box-shadow: ${({ theme }) => theme.components.input.input.boxShadows.boxShadowFocus};
  }
`

StyledInput.defaultProps = {
  variance: 'normal',
}

export default StyledInput
