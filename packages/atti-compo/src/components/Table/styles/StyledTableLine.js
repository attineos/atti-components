import styled from 'styled-components'

const StyledTableLine = styled.tr`
  height: ${({ theme }) => theme.components.table.spaces.lineHeight};

  border-bottom: ${({ theme }) => theme.components.table.borders.borderWidth} solid
    ${({ theme }) => theme.components.table.colors.border};

  td:first-child {
    padding-left: ${({ theme }) => theme.components.table.spaces.firstChildLeftSpacing};
  }
`

export default StyledTableLine
