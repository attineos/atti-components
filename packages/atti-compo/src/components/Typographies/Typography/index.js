import PropTypes from 'prop-types'
import styled from 'styled-components'

import { resetCSS } from 'helpers'

const Typography = styled.p.attrs(resetCSS)``

Typography.propTypes = {
  /**
   * Content of Text.
   */
  children: PropTypes.node,
  /**
   * String to determine the alignment of content.
   */
  textAlign: PropTypes.oneOf(['center', 'initial', 'inherit', 'justify', 'left', 'right']),
}

// @component
export default Typography
