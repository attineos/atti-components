// @noSnapshot
import styled from 'styled-components'
import { Text } from '../../Typographies'

const Ellipse = styled(Text.withComponent('span'))`
  position: absolute;
  width: 25px;
  height: 25px;
  background: #f39c12;
  border-radius: 50px;
  cursor: pointer;

  :after {
    left: 25px;
  }
`

Ellipse.defaultProps = {
  variance: 'normal',
}

export default Ellipse
