import React from 'react'
import PropTypes from 'prop-types'

import GridCellStyle from './styles/GridCellStyle'

class GridCell extends React.PureComponent {
  static propTypes = {
    /**
     * The start column (included in the cell) on desktop
     */
    colStartDesktop: PropTypes.number.isRequired,
    /**
     * The end column (included in the cell) on desktop
     */
    colEndDesktop: PropTypes.number.isRequired,
    /**
     * The start column (included in the cell) on tablet
     */
    colStartTablet: PropTypes.number.isRequired,
    /**
     * The end column (included in the cell) on tablet
     */
    colEndTablet: PropTypes.number.isRequired,
    /**
     * The start column (included in the cell) on mobile
     */
    colStartMobile: PropTypes.number.isRequired,
    /**
     * The endcolumn (included in the cell) on mobile
     */
    colEndMobile: PropTypes.number.isRequired,
    children: PropTypes.element.isRequired,
  }

  render() {
    const {
      colStartDesktop,
      colEndDesktop,
      colStartTablet,
      colEndTablet,
      colStartMobile,
      colEndMobile,

      children,
    } = this.props

    return (
      <GridCellStyle
        colStartDesktop={colStartDesktop}
        colEndDesktop={parseInt(colEndDesktop, 10) + 1}
        colStartTablet={colStartTablet}
        colEndTablet={parseInt(colEndTablet, 10) + 1}
        colStartMobile={colStartMobile}
        colEndMobile={parseInt(colEndMobile, 10) + 1}
      >
        {children}
      </GridCellStyle>
    )
  }
}

export default GridCell
