import styled from 'styled-components'
import PropTypes from 'prop-types'

import getFontStyle from 'helpers/generators/getFontStyle'

import Typography from '../Typography'

/**
 * Label.
 *
 */

const Label = styled(Typography.withComponent('label'))`
  ${getFontStyle('label')};

  ${({ disabled }) => !disabled && 'cursor: pointer;'}
`

Label.propTypes = {
  /**
   * The component to be a label for
   */
  htmlFor: PropTypes.string.isRequired,
  /**
   * Should interaction be disabled
   */
  disabled: PropTypes.bool,
}

Label.defaultProps = {
  disabled: false,
}

// @component
export default Label
