import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import StyledLoader from './styles/StyledLoader'

/**
 * A Loader, nothing special for the moment.
 *
 */
class Loader extends PureComponent {
  render() {
    const { className, color, variance } = this.props

    return <StyledLoader className={className} color={color} variance={variance} />
  }
}

Loader.defaultProps = {
  className: '',
  color: null,
  variance: 'circle',
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
  variance: PropTypes.oneOf(['circle']),
}

/** @component */
export default styled(Loader)``
