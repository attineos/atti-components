import React from 'react'
import PropTypes from 'prop-types'

import RawContainerStyle from './styles/RawContainerStyle'
import GridContainerStyle from './styles/GridContainerStyle'

/**
 * Container type that just create a container with no display rules for childrens
 * @type {string}
 */
export const CONTAINER_RAW_TYPE = 'CONTAINER_RAW_TYPE'
/**
 * Container type that create a container with grid layout display rules
 * @type {string}
 */
export const CONTAINER_GRID_TYPE = 'CONTAINER_GRID_TYPE'

export const CONTAINER_TYPES = [CONTAINER_RAW_TYPE, CONTAINER_GRID_TYPE]

class LayoutContainer extends React.PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(CONTAINER_TYPES).isRequired,
    children: PropTypes.element.isRequired,
  }

  getRenderableComponent() {
    const { type } = this.props

    switch (type) {
      case CONTAINER_RAW_TYPE:
        return RawContainerStyle
      case CONTAINER_GRID_TYPE:
        return GridContainerStyle
    }
  }

  render() {
    const { children } = this.props

    const ContainerInstance = this.getRenderableComponent()

    return <ContainerInstance>{children}</ContainerInstance>
  }
}

export default LayoutContainer
