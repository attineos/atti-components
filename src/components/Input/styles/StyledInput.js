import styled, { css } from 'styled-components'
import Text from '../../Text'

const borders = css`
  border: ${({ theme }) => theme.components.input.input.borders.width} solid
    ${({ theme }) => theme.components.input.input.colors.border};
  border-radius: ${({ theme }) => theme.components.input.input.borders.radius};
`

const colors = css`
  color: ${({ theme }) => theme.components.input.input.colors.text};
  caret-color: ${({ theme }) => theme.components.input.input.colors.caret};
`

const sizes = css`
  min-height: ${({ theme }) => theme.components.input.input.sizes.minHeight};

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
  box-sizing: content-box;

  ${borders};
  ${colors};
  ${sizes};
  ${spaces};

  ::placeholder {
    color: ${({ theme }) => theme.components.input.input.colors.placeholder};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.components.input.input.colors.borderFocus};
    box-shadow: ${({ theme }) => theme.components.input.input.boxShadows.boxShadowFocus};
  }
`

export default StyledInput
