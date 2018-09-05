import styled, { css } from 'styled-components'
import Text from '../../Text'

const BorderCSS = css`
  border-radius: ${({ theme }) => theme.components.button.border.borderRadius};
  border-width: ${({ theme }) => theme.components.button.border.borderWidth};
`
const colorsCSS = css`
  background-color: ${({ theme }) => theme.components.button.colors.background};
  border-color: ${({ theme }) => theme.components.button.colors.border};
  color: ${({ theme }) => theme.components.button.colors.text};

  &:hover {
    background-color: ${({ theme }) => theme.components.button.colors.backgroundHover};
  }
`

const spacesCSS = css`
  padding: ${({ theme }) => theme.components.button.spaces.padding};
`

const ButtonStyled = styled(Text.withComponent('button'))`
  ${BorderCSS};
  ${colorsCSS};
  ${spacesCSS};
  cursor: pointer;
  box-shadow: none;
  box-sizing: border-box;
  user-select: none;
  text-decoration: none;
`

export default ButtonStyled
