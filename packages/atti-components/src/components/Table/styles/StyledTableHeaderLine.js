import styled from 'styled-components'

const StyledTableHeaderLine = styled.tr`
  text-align: left;
  th:first-child {
    padding-left: ${({ theme }) => theme.components.table.spaces.firstChildLeftSpacing};
  }
`

export default StyledTableHeaderLine
