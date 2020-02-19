import styled from 'styled-components'
import { resetCSS } from 'helpers'

const ItemsHolder = styled.ul`
  ${resetCSS};
  height: ${({ theme }) => theme.components.menu.spaces.height};
  display: flex;
  list-style-type: none;
`

export default ItemsHolder
