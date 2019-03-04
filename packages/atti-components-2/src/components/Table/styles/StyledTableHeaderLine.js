import styled from 'styled-components'

const StyledTableLine = styled.tr`
  height: ${({ theme }) => theme.components.table.spaces.headerHeight};

  border-bottom: ${({ theme }) => theme.components.table.borders.borderWidth} solid
    ${({ theme }) => theme.components.table.colors.border};

  text-align: left;
  th:first-child {
    padding-left: ${({ theme }) => theme.components.table.spaces.firstChildLeftSpacing};
  }
`

export default StyledTableLine
