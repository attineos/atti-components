import styled from 'styled-components'

import getFontStyle from 'helpers/generators/getFontStyle'

import Typography from '../Typography'
/**
 * Header2.
 *
 */

const Header2 = styled(Typography.withComponent('h2'))`
  ${getFontStyle('header2')};
`

// @component
export default Header2
