import styled, { css } from 'styled-components'
import Text from '../../Text'

const border = css`
  border: ${({ theme }) =>
    `${theme.components.button.borders.borderWidth} solid ${
      theme.components.button.colors.border
    }`};
  border-radius: ${({ theme }) => theme.components.button.borders.borderRadius};
`

const colors = css`
  background-color: ${({ theme }) => theme.components.button.colors.background};
  color: ${({ theme }) => theme.components.button.colors.text};

  &:hover {
    opacity: ${({ theme }) => theme.components.button.opacities.hover};
  }
`

const forms = css`
  min-height: ${({ theme }) => theme.components.button.forms.minHeight};
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

export default StyledButton
