import React from 'react'
import PropTypes from 'prop-types'

import GridCellStyle from './styles/GridCellStyle'

class LayoutGridCell extends React.Component {
  static propTypes = {
    cols: PropTypes.element.isRequired,
    children: PropTypes.element.isRequired,
  }

  /**
   * Here we normalize data in case some of the cols data can be infered
   * @param colsData
   * @returns {*}
   */
  static normalize(colsData) {
    return colsData
  }

  state = {
    cols: {},
  }

  componentWillMount() {
    this.state.cols = LayoutGridCell.normalize(this.props.cols)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.cols !== nextProps.cols) {
      this.setState({ cols: this.normalize(nextProps.cols) })
    }
  }

  render() {
    const { children } = this.props

    const { cols } = this.state

    return <GridCellStyle cols={cols}>{children}</GridCellStyle>
  }
}

export default LayoutGridCell
