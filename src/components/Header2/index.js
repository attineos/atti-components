import styled from 'styled-components'
import PropTypes from 'prop-types'

import getFontStyle from 'helpers/Typography/getFontStyle'
import { resetCSS } from 'helpers'
/**
 * Header2.
 *
 */

const Header2 = styled.h2.attrs(resetCSS)`
  ${getFontStyle('header2')};
`

Header2.propTypes = {
  /**
   * Content of Header2.
   */
  children: PropTypes.node,
  /**
   * String to determine the alignment of content.
   */
  textAlign: PropTypes.oneOf(['center', 'initial', 'inherit', 'justify', 'left', 'right']),
}

// @component
export default Header2
