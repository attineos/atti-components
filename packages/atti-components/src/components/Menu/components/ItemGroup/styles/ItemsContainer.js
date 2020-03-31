import styled from 'styled-components'

import Collapsible from 'components/Collapsible'
import { resetCSS } from 'helpers'
import Li from './Li'
import Item from '../../Item'

const ItemsContainer = styled(Collapsible)`
  ${resetCSS};
  list-style-type: none;
  ${Li} ${Item} {
    padding-left: ${({ theme }) => theme.spaces.s4};
  }
`

export default ItemsContainer
