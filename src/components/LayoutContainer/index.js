import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import RawContainerStyle from './styles/RawContainerStyle'
import GridContainerStyle from './styles/GridContainerStyle'

import * as types from './types'

/**
 * Generates a new Layout container.
 *
 * The container simply contains things.
 * Layout is defined by the type of the container (Raw, Grid, something else).
 */
class LayoutContainer extends React.PureComponent {
  getRenderableComponent() {
    const { type } = this.props

    switch (type) {
      case types.CONTAINER_RAW_TYPE:
        return RawContainerStyle
      case types.CONTAINER_GRID_TYPE:
        return GridContainerStyle
    }
  }

  render() {
    const { children, className } = this.props

    const ContainerInstance = this.getRenderableComponent()

    return <ContainerInstance className={className}>{children}</ContainerInstance>
  }
}

LayoutContainer.defaultProps = {
  className: '',
}

LayoutContainer.propTypes = {
  /**
   * The childrens to use as content of the container.
   */
  children: PropTypes.element.isRequired,
  /**
   * Classes of the LayoutContainer.
   */
  className: PropTypes.string,
  /**
   * The type of the container.
   */
  type: PropTypes.oneOf(types.CONTAINER_TYPES).isRequired,
}

export default styled(LayoutContainer)``
