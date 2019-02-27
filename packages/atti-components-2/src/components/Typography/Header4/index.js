import styled from 'styled-components'
import PropTypes from 'prop-types'

import getFontStyle from 'helpers/generators/getFontStyle'
import { resetCSS } from 'helpers'

/**
 * Header4.
 *
 */

const Header4 = styled.h4.attrs(resetCSS)`
  ${getFontStyle('header4')};
`

Header4.propTypes = {
  /**
   * Content of Header4.
   */
  children: PropTypes.node,
  /**
   * String to determine the alignment of content.
   */
  textAlign: PropTypes.oneOf(['center', 'initial', 'inherit', 'justify', 'left', 'right']),
}

// @component
export default Header4
