import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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
const Cell = ({ children, cols, ...rest }) => {
  return (
    <CellStyle cols={cols} {...rest}>
      {children}
    </CellStyle>
  )
}

Cell.propTypes = {
  /**
   * The childrens to use as content of the Cell.
   */
  children: PropTypes.node.isRequired,
  /**
   * The cols data to use for display.
   */
  cols: PropTypes.array.isRequired,
}

/** @component */
export default styled(Cell)``
