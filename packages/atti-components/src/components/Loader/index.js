import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import StyledLoader from './styles/StyledLoader'

/**
 * A Loader, nothing special for the moment.
 *
 */
const Loader = ({ color, variant, ...rest }) => (
  <StyledLoader color={color} variant={variant} {...rest} />
)

Loader.defaultProps = {
  color: null,
  variant: 'circle',
}

Loader.propTypes = {
  /**
   * The color of the Loader content.
   */
  color: PropTypes.string,
  /**
   * The Loader type, at the moment the only type provided is circle.
   */
  variant: PropTypes.oneOf(['circle']),
}

/** @component */
export default styled(Loader)``
