import styled from 'styled-components'

const StyledTableHeaderCell = styled.th`
  border-bottom: ${({ theme }) => theme.components.table.borders.borderWidth} solid
    ${({ theme }) => theme.components.table.colors.border};
`

export default StyledTableHeaderCell
