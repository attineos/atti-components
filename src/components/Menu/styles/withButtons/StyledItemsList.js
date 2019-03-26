import styled from 'styled-components'

import { resetCSS } from 'helpers'

const ItemsList = styled.ul.attrs(resetCSS)`
  list-style-type: none;
  height: 100%;
  width: 100%;
  display: flex;
`

export default ItemsList
