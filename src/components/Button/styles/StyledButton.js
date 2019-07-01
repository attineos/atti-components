// @noSnapshot
import styled, { css } from 'styled-components'
import { Text } from '../../Typographies'

const border = css`
  border: ${({ variance, theme }) =>
    `${theme.components.button.borders[variance].borderWidth} solid ${theme.components.button.colors[variance].border}`};
  border-radius: ${({ variance, theme }) => theme.components.button.borders[variance].borderRadius};

  &:disabled {
    border: ${({ variance, theme }) =>
      `${theme.components.button.borders[variance].borderWidth} solid ${theme.components.button.colors.disabled.border}`};
  }
`

const colors = css`
  background-color: ${({ variance, theme }) => theme.components.button.colors[variance].background};
  color: ${({ variance, theme }) => theme.components.button.colors[variance].text};

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
  variance: 'normal',
}

export default StyledButton
