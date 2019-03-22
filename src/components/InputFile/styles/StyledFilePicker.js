import styled, { css } from 'styled-components'
import { Text } from '../../Typography'

const border = css`
  border: ${({ styleLevel, theme }) =>
    `${theme.components.inputFile.borders[styleLevel].borderWidth} solid ${
      theme.components.inputFile.colors[styleLevel].border
    }`};
  border-radius: ${({ styleLevel, theme }) =>
    theme.components.inputFile.borders[styleLevel].borderRadius};
`

const colors = css`
  background-color: ${({ styleLevel, theme }) =>
    theme.components.inputFile.colors[styleLevel].background};
  color: ${({ styleLevel, theme }) => theme.components.inputFile.colors[styleLevel].text};

  &:hover {
    opacity: ${({ theme }) => theme.components.inputFile.opacities.hover};
  }
`

const sizes = css`
  height: ${({ theme }) => theme.components.inputFile.sizes.height};
  width: ${({ theme }) => theme.components.inputFile.sizes.width};
`

const spaces = css`
  padding: ${({ theme }) => theme.components.inputFile.spaces.paddingHeight}
    ${({ theme }) => theme.components.inputFile.spaces.paddingWidth};
`

const StyledFilePicker = styled(Text.withComponent('button'))`
  ${border};
  ${colors};
  ${sizes};
  ${spaces};

  text-align: ${({ theme }) => theme.components.inputFile.textAlign};

  cursor: pointer;
`

StyledFilePicker.defaultProps = {
  styleLevel: 'normal',
}

export default StyledFilePicker
