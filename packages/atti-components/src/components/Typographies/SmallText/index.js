import styled from 'styled-components'

import getFontStyle from 'helpers/generators/getFontStyle'

import Typography from '../Typography'

/**
 * SmallText.
 *
 */

const SmallText = styled(Typography)`
  ${getFontStyle('smallText')};
`

// @component
export default SmallText
