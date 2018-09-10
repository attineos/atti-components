import styled from 'styled-components'
import PropTypes from 'prop-types'
import getFontStyle from '../../helpers/Typography/getFontStyle'

/**
 * Text.
 *
 * @version 0.1
 * @author Alexandre DEVE
 */

const Text = styled.p`
  ${getFontStyle('text')};
`

Text.propTypes = {
  /**
   * Content of Text.
   */
  children: PropTypes.node.isRequired,
  /**
   * String to determine the alignment of content.
   */
  textAlign: PropTypes.oneOf(['center', 'initial', 'inherit', 'justify', 'left', 'right']),
}

// @component
export default Text
