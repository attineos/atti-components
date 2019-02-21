import PropTypes from 'prop-types'
import styled from 'styled-components'

import getFontStyle from 'helpers/Typography/getFontStyle'
import { resetCSS } from 'helpers'

/**
 * Text.
 *
 */
const Text = styled.p.attrs(resetCSS)`
  ${getFontStyle('text')};
`

Text.propTypes = {
  /**
   * Content of Text.
   */
  children: PropTypes.node,
  /**
   * String to determine the alignment of content.
   */
  textAlign: PropTypes.oneOf(['center', 'initial', 'inherit', 'justify', 'left', 'right']),
}

// @component
export default Text
