import styled from 'styled-components'

const StyledTableHeaderLine = styled.tr`
  height: ${({ theme }) => theme.components.table.spaces.headerHeight};

  text-align: left;
  th:first-child {
    padding-left: ${({ theme }) => theme.components.table.spaces.firstChildLeftSpacing};
  }
`

export default StyledTableHeaderLine
