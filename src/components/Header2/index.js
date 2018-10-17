import PropTypes from 'prop-types'
import styled from 'styled-components'
import getFontStyle from '../../helpers/Typography/getFontStyle'

/**
 * Header2.
 *
 * @version 0.1
 * @author Alexandre DEVE
 */

const Header2 = styled.h2`
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
