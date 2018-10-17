import PropTypes from 'prop-types'
import styled from 'styled-components'
import getFontStyle from '../../helpers/Typography/getFontStyle'
import withResetCSS from '../../hoc/withResetCSS'

/**
 * Header1.
 *
 * @version 0.1
 * @author Alexandre DEVE
 */

const Header1 = styled.h1`
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
export default withResetCSS(Header1)
