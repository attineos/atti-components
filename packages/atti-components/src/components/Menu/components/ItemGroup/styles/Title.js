import styled from 'styled-components'

import { resetCSS } from 'helpers'
import Item from '../../Item'

const Title = styled(Item.withComponent('button'))`
  ${resetCSS};
  background-color: transparent;
  width: 100%;

  &:hover,
  &:focus,
  &.active {
    cursor: pointer;
  }
`

export default Title
