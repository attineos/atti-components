import styled from 'styled-components'

import getSpacesAsCss from 'helpers/generators/getSpacesAsCSS'

const StyledCalendarContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: ${({ theme }) => getSpacesAsCss(theme.components.inputTime, 'padding')};

  border: 1px solid red;
`

export default StyledCalendarContainer
