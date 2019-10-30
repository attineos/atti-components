import styled from 'styled-components'

import getSpacesAsCss from 'helpers/generators/getSpacesAsCSS'

const StyledWeek = styled.div`
  display: flex;
  flex-direction: row;

  margin: ${({ theme }) => getSpacesAsCss(theme.components.inputCalendar.week.spaces, 'margin')};
  padding: ${({ theme }) => getSpacesAsCss(theme.components.inputCalendar.week.spaces, 'padding')};
`

export default StyledWeek
