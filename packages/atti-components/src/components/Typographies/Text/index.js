import PropTypes from 'prop-types'
import styled from 'styled-components'

import getFontStyle from 'helpers/generators/getFontStyle'

import Typography from '../Typography'

/**
 * Text.
 *
 */
const Text = styled(Typography)`
  ${({ error, warning }) =>
    getFontStyle(error ? 'text.error' : warning ? 'text.warning' : 'text.normal')};
`

Text.propTypes = {
  /**
   * Should the string be displayed as an error
   */
  error: PropTypes.bool,
  /**
   * Should the string be displayed as a warning
   */
  warning: PropTypes.bool,
}

// @component
export default Text
