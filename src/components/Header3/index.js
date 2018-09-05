import PropTypes from 'prop-types'
import styled from 'styled-components'
import Typography from '../Typography'

/**
 * Header3.
 *
 * @version 0.1
 * @author Alexandre DEVE
 */

const Header3 = styled.h3`
  ${Typography('header3')};
`

Header3.propTypes = {
  /**
   * Content of Header1.
   */
  children: PropTypes.node.isRequired,
  /**
   * String to determine the align of content.
   */
  textAlign: PropTypes.oneOf(['left', 'right', 'center', 'justify', 'initial', 'inherit']),
}

// @component
export default Header3
