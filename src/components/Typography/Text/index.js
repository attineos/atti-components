import PropTypes from 'prop-types'
import styled from 'styled-components'

import getFontStyle from 'helpers/generators/getFontStyle'
import { resetCSS } from 'helpers'

/**
 * Text.
 *
 */
const Text = styled.p.attrs(resetCSS)`
  ${({ error, warning }) =>
    getFontStyle(error ? 'text.error' : warning ? 'text.warning' : 'text.normal')};
`

Text.propTypes = {
  /**
   * Content of Text.
   */
  children: PropTypes.node,
  /**
   * Should the string be displayed as an error
   */
  error: PropTypes.bool,
  /**
   * String to determine the alignment of content.
   */
  textAlign: PropTypes.oneOf(['center', 'initial', 'inherit', 'justify', 'left', 'right']),
  /**
   * Should the string be displayed as a warning
   */
  warning: PropTypes.bool,
}

// @component
export default Text
