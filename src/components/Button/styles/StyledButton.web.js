import styled, { css } from 'styled-components'
import { Text } from '../../Typography'

const border = css`
  border: ${({ styleLevel, theme }) =>
    `${theme.components.button.borders[styleLevel].borderWidth} solid ${
      theme.components.button.colors[styleLevel].border
    }`};
  border-radius: ${({ styleLevel, theme }) =>
    theme.components.button.borders[styleLevel].borderRadius};
`

const colors = css`
  background-color: ${({ styleLevel, theme }) =>
    theme.components.button.colors[styleLevel].background};
  color: ${({ styleLevel, theme }) => theme.components.button.colors[styleLevel].text};

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
  styleLevel: 'normal',
}

export default StyledButton
