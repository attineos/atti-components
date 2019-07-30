import styled from 'styled-components'

import getSpacesAsCss from 'helpers/generators/getSpacesAsCSS'

const StyledTimeContainer = styled.div`
  display: flex;

  padding: ${({ theme }) => getSpacesAsCss(theme.components.inputTime, 'padding')};
`

export default StyledTimeContainer
