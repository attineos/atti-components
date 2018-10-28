import React from 'react'
import PropTypes from 'prop-types'

import { clone } from 'lodash'

import GridCellStyle from './styles/GridCellStyle'

/**
 * Defines a Layout Grid Cell.
 *
 * To be used in conjuction with a layout of grid type, this component define a Cell in the grid.
 *
 * A cell is defined by a start column and an end column.
 * This component also support responsive types as we can pass columns by theme breakpoint in the form.
 * cols=[
 *    // First breakpoint start and end
 *    [1, 3],
 *    // Second breakpoint start and end
 *    [1, 2]
 *    //And so on
 * ]
 *
 * If given less breakpoints than in the theme, the last one is used.
 * If given more breakpoints than in the theme, the excess ones are ignored.
 */
class LayoutGridCell extends React.Component {
  static propTypes = {
    /**
     * The cols data to use for display.
     */
    cols: PropTypes.element.isRequired,
    /**
     * The childrens to use as content of the Cell.
     */
    children: PropTypes.element.isRequired,
  }

  state = {
    cols: [],
  }

  componentWillMount() {
    this.state.cols = clone(this.props.cols)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.cols !== nextProps.cols) {
      this.setState({ cols: clone(nextProps.cols) })
    }
  }

  render() {
    const { children } = this.props

    const { cols } = this.state

    return <GridCellStyle cols={cols}>{children}</GridCellStyle>
  }
}

export default LayoutGridCell
