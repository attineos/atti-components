import styled, { css } from 'styled-components'
import { Text } from '../../Typography'

const border = css`
  border: ${({ theme }) =>
    `${theme.components.inputFile.borders.borderWidth} solid ${
      theme.components.inputFile.colors.border
    }`};
  border-radius: ${({ theme }) => theme.components.inputFile.borders.borderRadius};
`

const colors = css`
  background-color: ${({ theme }) => theme.components.inputFile.colors.background};
  color: ${({ theme }) => theme.components.inputFile.colors.text};

  &:hover {
    opacity: ${({ theme }) => theme.components.inputFile.opacities.hover};
  }
`

const forms = css`
  min-height: ${({ theme }) => theme.components.inputFile.forms.minHeight};
`

const spaces = css`
  padding: ${({ theme }) => theme.components.inputFile.spaces.paddingHeight}
    ${({ theme }) => theme.components.inputFile.spaces.paddingWidth};
`

const StyledFilePicker = styled(Text.withComponent('button'))`
  ${border};
  ${colors};
  ${forms};
  ${spaces};

  text-align: ${({ theme }) => theme.components.inputFile.textAlign};

  cursor: pointer;
`

export default StyledFilePicker
