import React from 'react'
import PropTypes from 'prop-types'

import StyledLoader from './styles/StyledLoader'

/**
 * A Loader, nothing special for the moment.
 *
 */
const Loader = ({ color, type }) => <StyledLoader color={color} type={type} />

Loader.defaultProps = {
  color: null,
  type: 'circle',
}

Loader.propTypes = {
  /**
   * The color of the loader content.
   */
  color: PropTypes.string,
  /**
   * The loader type, at the moment the only type provided is circle.
   */
  type: PropTypes.oneOf(['circle']),
}

export default Loader
