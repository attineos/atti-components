import styled from 'styled-components'
import PropTypes from 'prop-types'
import getFontStyle from '../../helpers/Typography/getFontStyle'

/**
 * Label.
 *
 * @version 0.1
 */

const Label = styled.label`
  ${getFontStyle('label')};
`

Label.propTypes = {
  /**
   * Content of Label.
   */
  children: PropTypes.node,
  /**
   * String to determine the alignment of content.
   */
  textAlign: PropTypes.oneOf(['center', 'initial', 'inherit', 'justify', 'left', 'right']),
}

// @component
export default Label
