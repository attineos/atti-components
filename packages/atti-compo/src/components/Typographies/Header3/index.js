import styled from 'styled-components'

import getFontStyle from 'helpers/generators/getFontStyle'

import Typography from '../Typography'

/**
 * Header3.
 *
 */

const Header3 = styled(Typography.withComponent('h3'))`
  ${getFontStyle('header3')};
`

// @component
export default Header3
