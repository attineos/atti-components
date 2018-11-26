import styled from 'styled-components'
import PropTypes from 'prop-types'

import getFontStyle from 'helpers/Typography/getFontStyle'
import resetCSS from 'helpers/resetCSS'

/**
 * Label.
 *
 */

const Label = styled.label.attrs(resetCSS)`
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
