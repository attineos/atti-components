import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { clone } from 'lodash'

import CellStyle from './styles/CellStyle'

/**
 * Defines a Cell.
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
class Cell extends React.Component {
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
    const { children, className } = this.props

    const { cols } = this.state

    return (
      <CellStyle className={className} cols={cols}>
        {children}
      </CellStyle>
    )
  }
}

Cell.defaultProps = {
  className: '',
}

Cell.propTypes = {
  /**
   * The childrens to use as content of the Cell.
   */
  children: PropTypes.element.isRequired,
  /**
   * Classes of the Cell.
   */
  className: PropTypes.string,
  /**
   * The cols data to use for display.
   */
  cols: PropTypes.element.isRequired,
}

/** @component */
export default styled(Cell)``
