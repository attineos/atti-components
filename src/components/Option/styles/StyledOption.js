import styled, { css } from 'styled-components'

const borders = css`
  border: ${({ theme }) => `${theme.components.option.borders.width} ${
    theme.components.option.borders.style
  }
    ${theme.components.option.borders.color}`};
`

const colors = css`
  color: ${({ theme }) => theme.components.option.colors.text};
  background: ${({ selected, theme }) =>
    selected ? theme.components.option.colors.selected : theme.components.option.colors.background};
`

const StyledOption = styled.div`
  ${borders};
  ${colors};
  padding: ${({ theme }) => theme.components.option.spaces.padding};
  font-family: ${({ theme }) => theme.fonts.fontFamily.primary};
`

export default StyledOption
