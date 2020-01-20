import styled from 'styled-components'

import Collapsible from 'components/Collapsible'
import Li from './Li'
import Item from '../../Item'

const ItemsContainer = styled(Collapsible)`
  ${Li} ${Item} {
    padding-left: ${({ theme }) => theme.spaces.s4};
  }
`

export default ItemsContainer
