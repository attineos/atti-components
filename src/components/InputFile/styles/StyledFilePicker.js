import styled, { css } from 'styled-components'
import { Text } from '../../Typographies'

const border = css`
  border: ${({ variance, theme }) =>
    `${theme.components.inputFile.borders[variance].borderWidth} solid ${
      theme.components.inputFile.colors[variance].border
    }`};
  border-radius: ${({ variance, theme }) =>
    theme.components.inputFile.borders[variance].borderRadius};
`

const colors = css`
  background-color: ${({ variance, theme }) =>
    theme.components.inputFile.colors[variance].background};
  color: ${({ variance, theme }) => theme.components.inputFile.colors[variance].text};

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
  variance: 'normal',
}

export default StyledFilePicker
