import styled from 'styled-components'

import getSpacesAsCss from 'helpers/generators/getSpacesAsCSS'

const StyledCalendarContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: ${({ theme }) => getSpacesAsCss(theme.components.inputCalendar.spaces, 'margin')};
  padding: ${({ theme }) => getSpacesAsCss(theme.components.inputCalendar.spaces, 'padding')};

  max-width: ${({ theme }) => theme.components.inputCalendar.maxWidth};

  box-shadow: ${({ theme }) => theme.components.inputCalendar.boxShadow};

  padding: 5px;
`

export default StyledCalendarContainer
