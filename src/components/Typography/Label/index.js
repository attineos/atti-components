import styled from 'styled-components'
import PropTypes from 'prop-types'

import getFontStyle from 'helpers/generators/getFontStyle'
import { resetCSS } from 'helpers'

/**
 * Label.
 *
 */

const Label = styled.label.attrs(resetCSS)`
  ${getFontStyle('label')};

  ${({ disabled }) => !disabled && 'cursor: pointer;'}
`

Label.propTypes = {
  /**
   * Content of Label.
   */
  children: PropTypes.node,
  /**
   * String to determine the alignment of content.
   */
  textAlign: PropTypes.oneOf(['center', 'initial', 'inherit', 'justify', 'left', 'right']),
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
