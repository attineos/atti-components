import styled, { css } from 'styled-components'
import { Text } from '../../Typography'

const border = css`
  border: ${({ variance, theme }) =>
    `${theme.components.button.borders[variance].borderWidth} solid ${
      theme.components.button.colors[variance].border
    }`};
  border-radius: ${({ variance, theme }) => theme.components.button.borders[variance].borderRadius};
`

const colors = css`
  background-color: ${({ variance, theme }) => theme.components.button.colors[variance].background};
  color: ${({ variance, theme }) => theme.components.button.colors[variance].text};

  &:hover {
    opacity: ${({ theme }) => theme.components.button.opacities.hover};
  }
`

const forms = css`
  height: ${({ theme }) => theme.components.button.sizes.height};
  width: ${({ theme }) => theme.components.button.sizes.width};
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

  text-align: ${({ theme }) => theme.components.button.textAlign};

  cursor: pointer;
`

StyledButton.defaultProps = {
  variance: 'normal',
}

export default StyledButton
