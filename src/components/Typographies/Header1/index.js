import styled from 'styled-components'

import getFontStyle from 'helpers/generators/getFontStyle'

import Typography from '../Typography'

/**
 * Header1.
 *
 */

const Header1 = styled(Typography.withComponent('h1'))`
  ${getFontStyle('header1')};
`

// @component
export default Header1
