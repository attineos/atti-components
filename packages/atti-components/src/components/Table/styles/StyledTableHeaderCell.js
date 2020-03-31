import styled from 'styled-components'

const StyledTableHeaderCell = styled.th`
  border-bottom: ${({ theme }) => theme.components.table.borders.borderWidth} solid
    ${({ theme }) => theme.components.table.colors.border};
  padding: ${({ theme }) => theme.components.table.spaces.header.padding};
`

export default StyledTableHeaderCell
