import PropTypes from 'prop-types'
import styled from 'styled-components'
import getFontStyle from '../../helpers/Typography/getFontStyle'

/**
 * Header3.
 *
 * @version 0.1
 * @author Alexandre DEVE
 */

const Header3 = styled.h3`
  ${getFontStyle('header3')};
`

Header3.propTypes = {
  /**
   * Content of Header3.
   */
  children: PropTypes.node.isRequired,
  /**
   * String to determine the alignment of content.
   */
  textAlign: PropTypes.oneOf(['center', 'initial', 'inherit', 'justify', 'left', 'right']),
}

// @component
export default Header3
