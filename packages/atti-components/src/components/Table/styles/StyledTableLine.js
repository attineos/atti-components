import styled from 'styled-components'

const StyledTableLine = styled.tr`
  border-bottom: ${({ theme }) => theme.components.table.borders.borderWidth} solid
    ${({ theme }) => theme.components.table.colors.border};

  td:first-child {
    padding-left: ${({ theme }) => theme.components.table.spaces.firstChildLeftSpacing};
  }

  background-color: ${({ theme, odd }) =>
    odd == 1
      ? theme.components.table.colors.backgroundOdd
      : theme.components.table.colors.backgroundEven};

  ${({ isHoverable, theme }) =>
    isHoverable
      ? `&:hover {
    background: ${theme.components.table.colors.backgroundHover};
  }`
      : ``}

  ${({ onClick }) => (!!onClick ? `cursor: pointer;` : ``)}
`

export default StyledTableLine
