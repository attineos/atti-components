import styled, { css } from 'styled-components'

const border = css`
  border: ${({ theme }) => `${theme.components.option.border.width} ${
    theme.components.option.border.style
  }
    ${theme.components.option.border.color}`};
`

const colors = css`
  color: ${({ theme }) => theme.components.option.colors.text};
  background: ${({ selected, theme }) =>
    selected ? theme.components.option.colors.selected : theme.components.option.colors.background};
`

const StyledOption = styled.div`
  ${border};
  ${colors};
  padding: ${({ theme }) => theme.components.option.spaces.padding};
`

export default StyledOption
