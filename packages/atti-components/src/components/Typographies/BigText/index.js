import styled from 'styled-components'

import getFontStyle from 'helpers/generators/getFontStyle'

import Typography from '../Typography'

/**
 * BigText.
 *
 */

const BigText = styled(Typography)`
  ${getFontStyle('bigText')};
`

// @component
export default BigText
