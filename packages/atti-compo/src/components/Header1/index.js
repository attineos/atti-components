import styled from 'styled-components'
import PropTypes from 'prop-types'

import getFontStyle from 'helpers/Typography/getFontStyle'
import { resetCSS } from 'helpers'

/**
 * Header1.
 *
 */

const Header1 = styled.h1.attrs(resetCSS)`
  ${getFontStyle('header1')};
`

Header1.propTypes = {
  /**
   * Content of Header1.
   */
  children: PropTypes.node,
  /**
   * String to determine the alignment of content.
   */
  textAlign: PropTypes.oneOf(['center', 'initial', 'inherit', 'justify', 'left', 'right']),
}

// @component
export default Header1
