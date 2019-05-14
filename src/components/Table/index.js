import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import TableFacade from './facade'
/**
 * A Simple Button compatible for web and native.
 *
 */
class Table extends PureComponent {
  render() {
    const { className, cols, elements, ...rest } = this.props

    return <TableFacade className={className} cols={cols} elements={elements} {...rest} />
  }
}

Table.defaultProps = {
  className: '',
  renderCell: null,
  renderEmptyTable: null,
  renderLine: null,
  renderHeaderLine: null,
  renderHeaderCell: null,
  renderTable: null,
}

Table.propTypes = {
  /**
   * Classes of the Button.
   */
  className: PropTypes.string,
  /**
   * The cols to use as header for the table
   */
  cols: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.any,
    }),
  ).isRequired,
  /**
   * The actuals elements to display in the table
   */
  elements: PropTypes.arrayOf(PropTypes.any).isRequired,
  /**
   *  Define the component used to render each table cells, accept a children params
   */
  renderCell: PropTypes.func,
  /**
   *  Define the component used to render the table content when the table is empty
   */
  renderEmptyTable: PropTypes.func,
  /**
   *  Define the component used to render each table's headers cells, accept a children params
   */
  renderHeaderCell: PropTypes.func,
  /**
   *  Define the component used to render the table's header line, accept a children params
   */
  renderHeaderLine: PropTypes.func,
  /**
   *  Define the component used to render each table's lines, accept a children params
   */
  renderLine: PropTypes.func,
  /**
   *  Define the component used to render the table element, accept a children params
   */
  renderTable: PropTypes.func,
}

/** @component */
export default styled(Table)``
