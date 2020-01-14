// @noSnapshot
import styled, { css } from 'styled-components'
import { Text } from '../../Typographies'

const Rectangle = styled(Text.withComponent('span'))`
  position: absolute;
  width: 50px;
  height: 25px;
  background: rgba(243, 156, 18, 0.6);
  border-radius: 50px;
`

Rectangle.defaultProps = {
  variance: 'normal',
}

export default Rectangle
