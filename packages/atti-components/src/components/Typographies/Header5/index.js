import styled from 'styled-components'

import getFontStyle from 'helpers/generators/getFontStyle'

import Typography from '../Typography'

/**
 * Header5.
 *
 */

const Header5 = styled(Typography.withComponent('h5'))`
  ${getFontStyle('header5')};
`

// @component
export default Header5
