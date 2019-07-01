import styled from 'styled-components'

import Container from 'components/Container'

const MenuNavMobile = styled(Container.withComponent('nav'))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

export default MenuNavMobile
