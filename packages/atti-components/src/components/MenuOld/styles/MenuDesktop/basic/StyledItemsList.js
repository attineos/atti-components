import styled from 'styled-components'

import { resetCSS } from 'helpers'

const StyledItemsList = styled.ul.attrs(resetCSS)`
  list-style-type: none;
  height: 100%;
`

export default StyledItemsList
