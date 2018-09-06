import styled, { css } from 'styled-components'
import Text from '../../Text'

const border = css`
  border-radius: ${({ theme }) => theme.components.button.border.borderRadius};
  border-width: ${({ theme }) => theme.components.button.border.borderWidth};
`
const colors = css`
  background-color: ${({ theme }) => theme.components.button.colors.background};
  border-color: ${({ theme }) => theme.components.button.colors.border};
  color: ${({ theme }) => theme.components.button.colors.text};

  &:hover {
    background-color: ${({ theme }) => theme.components.button.colors.backgroundHover};
  }
`

const spaces = css`
  padding: ${({ theme }) => theme.components.button.spaces.padding};
`

const ButtonStyled = styled(Text.withComponent('button'))`
  ${border};
  ${colors};
  ${spaces};
  cursor: pointer;
  box-shadow: none;
  box-sizing: border-box;
  user-select: none;
  text-decoration: none;
`

export default ButtonStyled
