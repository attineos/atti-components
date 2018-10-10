import styled, { css } from 'styled-components'
import Text from '../../Text'

const borders = css`
  border: ${({ theme }) => `
    ${theme.components.option.borders.width}
    ${theme.components.option.borders.style}
    ${theme.components.option.borders.color}`};
`

const colors = css`
  color: ${({ selected, theme }) =>
    selected ? theme.components.option.colors.textSelected : theme.components.option.colors.text};
  background: ${({ selected, theme }) =>
    selected
      ? theme.components.option.colors.backgroundSelected
      : theme.components.option.colors.background};
`

const StyledOption = styled(Text.withComponent('p'))`
  ${borders};
  ${colors};
  padding: ${({ theme }) => theme.components.option.spaces.padding};
  font-family: ${({ theme }) => theme.fonts.fontFamily.primary};
  cursor: pointer;

  // TODO: remove when reset.css will be used
  margin-top: 0;
  margin-bottom: 0;
`

export default StyledOption
