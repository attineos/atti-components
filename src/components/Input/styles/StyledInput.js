import styled, { css } from 'styled-components'
import { Text } from '../../Typography'

const borders = css`
  border: ${({ theme }) => theme.components.input.input.borders.width} solid
    ${({ theme, showState }) => theme.components.input.input.colors[showState].border};
  border-radius: ${({ theme }) => theme.components.input.input.borders.radius};
`

const colors = css`
  color: ${({ theme, showState }) => theme.components.input.input.colors[showState].text};
  caret-color: ${({ theme, showState }) => theme.components.input.input.colors[showState].caret};
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
    color: ${({ theme, showState }) => theme.components.input.input.colors[showState].placeholder};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme, showState }) =>
      theme.components.input.input.colors[showState].borderFocus};
    box-shadow: ${({ theme }) => theme.components.input.input.boxShadows.boxShadowFocus};
  }
`

StyledInput.defaultProps = {
  showState: 'normal',
}

export default StyledInput
