import styled from 'styled-components'

import getSpacesAsCss from 'helpers/generators/getSpacesAsCSS'

import Select from '../../Select'

const StyledMonthContainer = styled.div`
  display: flex;

  padding: ${({ theme }) => getSpacesAsCss(theme.components.inputTime, 'padding')};

  ${Select}:last-child {
    flex-shrink: 2;
  }
`

export default StyledMonthContainer
