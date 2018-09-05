import styled from 'styled-components'
import PropTypes from 'prop-types'

import Typography from '../Typography'

/**
 * Text.
 *
 * @version 0.1
 * @author Alexandre DEVE
 */

const BigText = styled.p`
  ${Typography('bigText')};
`

BigText.propTypes = {
  /**
   * Content of Header1.
   */
  children: PropTypes.node.isRequired,
  /**
   * String to determine the align of content.
   */
  textAlign: PropTypes.oneOf(['left', 'right', 'center', 'justify', 'initial', 'inherit']),
}

// @component
export default BigText
