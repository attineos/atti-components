import PropTypes from 'prop-types'
import styled from 'styled-components'
import getFontStyle from '../../helpers/Typography/getFontStyle'

/**
 * SmallText.
 *
 * @version 0.1
 * @author Alexandre DEVE
 */

const SmallText = styled.p`
  ${getFontStyle('smallText')};
`

SmallText.propTypes = {
  /**
   * Content of SmallText.
   */
  children: PropTypes.node.isRequired,
  /**
   * String to determine the alignment of content.
   */
  textAlign: PropTypes.oneOf(['center', 'initial', 'inherit', 'justify', 'left', 'right']),
}

// @component
export default SmallText
