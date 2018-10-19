import styled from 'styled-components'
import PropTypes from 'prop-types'

import getFontStyle from '../../helpers/Typography/getFontStyle'
import resetCSS from '../../helpers/resetCSS'

/**
 * BigText.
 *
 * @version 0.1
 * @author Alexandre DEVE
 */

const BigText = styled.p.attrs(resetCSS)`
  ${getFontStyle('bigText')};
`

BigText.propTypes = {
  /**
   * Content of BigText.
   */
  children: PropTypes.node,
  /**
   * String to determine the alignment of content.
   */
  textAlign: PropTypes.oneOf(['center', 'initial', 'inherit', 'justify', 'left', 'right']),
}

// @component
export default BigText
