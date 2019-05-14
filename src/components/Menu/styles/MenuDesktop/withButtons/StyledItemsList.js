import styled from 'styled-components'

import { resetCSS } from 'helpers'

const ItemsList = styled.ul.attrs(resetCSS)`
  list-style-type: none;
  height: 100%;
  display: flex;

  border: 1px solid
    ${({ theme }) => theme.components.menu.menuDesktop.withButtons.menu.colors.border};
  border-radius: ${({ theme }) => theme.components.menu.menuDesktop.withButtons.menu.borderRadius};
`

export default ItemsList
