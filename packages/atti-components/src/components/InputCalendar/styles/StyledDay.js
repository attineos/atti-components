import styled from 'styled-components'

const StyledDay = styled.div`
  width: 30px;
  height: 20px;

  ${({ isSunday }) => (isSunday ? 'color: green;' : '')}
  ${({ isToday }) => (isToday ? 'color: red;' : '')}
`

export default StyledDay
