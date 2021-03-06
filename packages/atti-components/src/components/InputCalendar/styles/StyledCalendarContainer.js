import styled from 'styled-components'

import getSpacesAsCss from 'helpers/generators/getSpacesAsCSS'

const StyledCalendarContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: ${({ theme }) => getSpacesAsCss(theme.components.inputCalendar.spaces, 'margin')};
  padding: ${({ theme }) => getSpacesAsCss(theme.components.inputCalendar.spaces, 'padding')};

  min-width: ${({ theme }) => theme.components.inputCalendar.maxWidth};

  padding: 5px;
`

export default StyledCalendarContainer
