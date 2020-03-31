import styled, { css } from 'styled-components'
import { Text } from '../../Typographies'

const border = css`
  border: ${({ variant, theme }) =>
    `${theme.components.inputFile.borders[variant].borderWidth} solid ${theme.components.inputFile.colors[variant].border}`};
  border-radius: ${({ variant, theme }) =>
    theme.components.inputFile.borders[variant].borderRadius};
`

const colors = css`
  background-color: ${({ variant, theme }) =>
    theme.components.inputFile.colors[variant].background};
  color: ${({ variant, theme }) => theme.components.inputFile.colors[variant].text};

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
  variant: 'normal',
}

export default StyledFilePicker
