// @noSnapshot
import styled, { css } from 'styled-components'
import { Text } from '../../Typographies'

const border = css`
  border: ${({ variant, theme }) =>
    `${theme.components.button.borders[variant].borderWidth} solid ${theme.components.button.colors[variant].border}`};
  border-radius: ${({ variant, theme }) => theme.components.button.borders[variant].borderRadius};

  &:disabled {
    border: ${({ variant, theme }) =>
      `${theme.components.button.borders[variant].borderWidth} solid ${theme.components.button.colors.disabled.border}`};
  }
`

const colors = css`
  background-color: ${({ variant, theme }) => theme.components.button.colors[variant].background};
  color: ${({ variant, theme }) => theme.components.button.colors[variant].text};

  &:disabled {
    background-color: ${({ theme }) => theme.components.button.colors.disabled.background};
    color: ${({ theme }) => theme.components.button.colors.disabled.text};
  }
`

const forms = css`
  height: ${({ theme }) => theme.components.button.sizes.height};
`

const spaces = css`
  padding: ${({ theme }) => theme.components.button.spaces.paddingHeight}
    ${({ theme }) => theme.components.button.spaces.paddingWidth};
`

const StyledButton = styled(Text.withComponent('button'))`
  ${border};
  ${colors};
  ${forms};
  ${spaces};

  display: inline-block;
  text-align: ${({ theme }) => theme.components.button.textAlign};
  cursor: pointer;

  &:hover {
    opacity: ${({ theme }) => theme.components.button.opacities.hover};
  }
  &:disabled {
    &:hover {
      opacity: 1;
      cursor: not-allowed;
    }
  }
`

StyledButton.defaultProps = {
  variant: 'normal',
}

export default StyledButton
