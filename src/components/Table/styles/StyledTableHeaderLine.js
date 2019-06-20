import styled from 'styled-components'

const StyledTableLine = styled.tr`
  height: ${({ theme }) => theme.components.table.spaces.headerHeight};

  text-align: left;
  th:first-child {
    padding-left: ${({ theme }) => theme.components.table.spaces.firstChildLeftSpacing};
  }
`

export default StyledTableLine
