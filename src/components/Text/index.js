import PropTypes from 'prop-types'
import getFontStyle from '../../helpers/Typography/getFontStyle'
import StyledText from './styles/index.web.js'

/**
 * Text.
 *
 * @version 0.1
 * @author Alexandre DEVE
 */

const Text = StyledText`
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
