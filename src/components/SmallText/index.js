import PropTypes from 'prop-types'
import styled from 'styled-components'
import Typography from '../Typography'

/**
 * SmallText.
 *
 * @version 0.1
 * @author Alexandre DEVE
 */

const SmallText = styled.p`
  ${Typography('smallText')};
`

SmallText.propTypes = {
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
export default SmallText
