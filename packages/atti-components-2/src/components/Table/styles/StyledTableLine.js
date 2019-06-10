import styled from 'styled-components'

const StyledTableLine = styled.tr`
  height: ${({ theme }) => theme.components.table.spaces.lineHeight};

  border-bottom: ${({ theme }) => theme.components.table.borders.borderWidth} solid
    ${({ theme }) => theme.components.table.colors.border};

  td:first-child {
    padding-left: ${({ theme }) => theme.components.table.spaces.firstChildLeftSpacing};
  }

  &:nth-child(even) {
    background: ${({ theme }) => theme.components.table.colors.backgroundEven};
  }

  &:nth-child(odd) {
    background: ${({ theme }) => theme.components.table.colors.backgroundOdd};
  }

  ${({ isHoverable, theme }) =>
    isHoverable
      ? `&:hover {
    background: ${theme.components.table.colors.backgroundHover};
  }`
      : ``}

  ${({ onClick }) => (!!onClick ? `cursor: pointer;` : ``)}
`

export default StyledTableLine
