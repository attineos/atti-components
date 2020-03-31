import styled from 'styled-components'

const StyledTable = styled.table`
  width: 100%;

  background-color: ${({ theme }) => theme.components.table.colors.background};
  border: ${({ theme }) => theme.components.table.borders.borderWidth} solid
    ${({ theme }) => theme.components.table.colors.border};

  border-spacing: 0;
`

export default StyledTable
