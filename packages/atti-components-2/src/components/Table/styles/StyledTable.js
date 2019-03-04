import styled from 'styled-components'

const StyledTable = styled.table`
  width: 100%;

  background-color: ${({ theme }) => theme.components.table.colors.background};
  border-radius: ${({ theme }) => theme.components.table.borders.borderRadius};
  border: ${({ theme }) => theme.components.table.borders.borderWidth} solid
    ${({ theme }) => theme.components.table.colors.border};

  border-collapse: collapse;
  border-spacing: 0;
`

export default StyledTable
