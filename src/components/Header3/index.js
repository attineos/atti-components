import styled from 'styled-components'
import PropTypes from 'prop-types'

import getFontStyle from 'helpers/Typography/getFontStyle'
import resetCSS from 'helpers/resetCSS'

/**
 * Header3.
 *
 */

const Header3 = styled.h3.attrs(resetCSS)`
  ${getFontStyle('header3')};
`

Header3.propTypes = {
  /**
   * Content of Header3.
   */
  children: PropTypes.node,
  /**
   * String to determine the alignment of content.
   */
  textAlign: PropTypes.oneOf(['center', 'initial', 'inherit', 'justify', 'left', 'right']),
}

// @component
export default Header3
