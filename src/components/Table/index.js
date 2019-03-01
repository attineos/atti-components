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
    const {
      className,
      renderTable,
      renderHeaderLine,
      renderLine,
      renderHeaderCell,
      renderCell,
      cols,
      elements,
    } = this.props

    return (
      <TableFacade
        className={className}
        renderTable={renderTable}
        renderHeaderLine={renderHeaderLine}
        renderLine={renderLine}
        renderHeaderCell={renderHeaderCell}
        renderCell={renderCell}
        cols={cols}
        elements={elements}
      />
    )
  }
}

Table.defaultProps = {
  className: '',
  renderTable: null,
  renderHeaderLine: null,
  renderLine: null,
  renderHeaderCell: null,
  renderCell: null,
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
    PropTypes.objectOf({
      name: PropTypes.string.required,
      label: PropTypes.any,
    }),
  ).isRequired,
  /**
   * The actuals elements to display in the table
   */
  elements: PropTypes.arrayOf(PropTypes.any).isRequired,
  /**
   *  Define the component used to render the table element, accept a children params
   */
  renderTable: PropTypes.func,
  /**
   *  Define the component used to render the table's header line, accept a children params
   */
  renderHeaderLine: PropTypes.func,
  /**
   *  Define the component used to render each table's lines, accept a children params
   */
  renderLine: PropTypes.func,
  /**
   *  Define the component used to render each table's headers cells, accept a children params
   */
  renderHeaderCell: PropTypes.func,
  /**
   *  Define the component used to render each table cells, accept a children params
   */
  renderCell: PropTypes.func,
}

/** @component */
export default styled(Table)``
