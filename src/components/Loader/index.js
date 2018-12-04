import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import StyledLoader from './styles/StyledLoader'

/**
 * A Loader, nothing special for the moment.
 *
 */
const Loader = ({ className, color, type }) => (
  <StyledLoader className={className} color={color} type={type} />
)

Loader.defaultProps = {
  className: '',
  color: null,
  type: 'circle',
}

Loader.propTypes = {
  /**
   * Classes of the Loader.
   */
  className: PropTypes.string,
  /**
   * The color of the Loader content.
   */
  color: PropTypes.string,
  /**
   * The Loader type, at the moment the only type provided is circle.
   */
  type: PropTypes.oneOf(['circle']),
}

/** @component */
export default styled(Loader)``
