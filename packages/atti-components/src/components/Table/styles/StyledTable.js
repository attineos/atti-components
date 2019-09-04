import styled from 'styled-components'

const StyledTable = styled.table`
  width: 100%;

  background-color: ${({ theme }) => theme.components.table.colors.background};
  border-radius: ${({ theme }) => theme.components.table.borders.borderRadius};
  border: ${({ theme }) => theme.components.table.borders.borderWidth} solid
    ${({ theme }) => theme.components.table.colors.border};

  border-spacing: 0;

  tbody tr:last-child td:first-child {
    border-bottom-left-radius: ${({ theme }) => theme.components.table.borders.borderRadius};
  }
  tbody tr:last-child td:last-child {
    border-bottom-right-radius: ${({ theme }) => theme.components.table.borders.borderRadius};
  }
`

export default StyledTable
