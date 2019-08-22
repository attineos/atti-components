import styled from 'styled-components'

import getFontStyle from 'helpers/generators/getFontStyle'

import Typography from '../Typography'

/**
 * Header4.
 *
 */

const Header4 = styled(Typography.withComponent('h4'))`
  ${getFontStyle('header4')};
`

// @component
export default Header4
