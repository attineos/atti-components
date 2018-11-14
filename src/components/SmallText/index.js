import styled from 'styled-components'
import PropTypes from 'prop-types'

import getFontStyle from '../../helpers/Typography/getFontStyle'
import resetCSS from '../../helpers/resetCSS'

/**
 * SmallText.
 *
 */

const SmallText = styled.p.attrs(resetCSS)`
  ${getFontStyle('smallText')};
`

SmallText.propTypes = {
  /**
   * Content of SmallText.
   */
  children: PropTypes.node,
  /**
   * String to determine the alignment of content.
   */
  textAlign: PropTypes.oneOf(['center', 'initial', 'inherit', 'justify', 'left', 'right']),
}

// @component
export default SmallText
