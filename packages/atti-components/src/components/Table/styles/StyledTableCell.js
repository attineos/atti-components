import styled from 'styled-components'

const StyledTableCell = styled.td`
  padding: ${({ theme }) => theme.components.table.spaces.cell.padding};
  padding-bottom: ${({ theme }) => theme.components.table.spaces.cell.paddingBottom};
`

export default StyledTableCell
