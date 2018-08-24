import React from 'react'
import PropTypes from 'prop-types'

import GridContainerStyle from './styles/GridContainerStyle'

class GridContainer extends React.PureComponent {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }

  render() {
    const { children } = this.props

    return <GridContainerStyle>{children}</GridContainerStyle>
  }
}

export default GridContainer
