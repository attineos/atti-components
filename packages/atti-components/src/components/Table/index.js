import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { map, size } from 'lodash'

import {
  StyledTable,
  StyledTableHeaderLine,
  StyledTableLine,
  StyledTableHeaderCell,
  StyledTableCell,
} from './styles'

import {
  renderCell,
  renderDetailsLine,
  renderEmptyTable,
  renderHeaderCell,
  renderHeaderLine,
  renderLine,
  renderTable,
} from './helpers'

/**
 * A Table component.
 *
 */
const Table = ({ cols, elements, ...props }) => {
  if (size(elements) === 0) {
    return renderEmptyTable(props)
  }

  return renderTable(
    <>
      <thead>
        {renderHeaderLine(<>{map(cols, col => renderHeaderCell(col, props))}</>, props)}
      </thead>

      <tbody>
        {map(elements, (element, index) => (
          <React.Fragment key={`line-${element.name}`}>
            {renderLine(
              element,
              <>{map(cols, col => renderCell(col, element, props))}</>,
              index,
              index % 2,
              props,
            )}
            {renderDetailsLine(cols, element, index, index % 2, props)}
          </React.Fragment>
        ))}
      </tbody>
    </>,
    props,
  )
}

Table.defaultProps = {
  isDetailsLineHoverable: false,
  isLineHoverable: false,
  onLineClick: null,
  renderCell: null,
  renderDetailsLine: null,
  renderEmptyTable: null,
  renderLine: null,
  renderHeaderLine: null,
  renderHeaderCell: null,
  renderTable: null,
}

Table.propTypes = {
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
   *  Are the detailsLines hoverable
   */
  isDetailsLineHoverable: PropTypes.bool,
  /**
   *  Are the lines hoverable
   */
  isLineHoverable: PropTypes.bool,
  /**
   *  Function called when clicking on a line.
   */
  onLineClick: PropTypes.func,
  /**
   *  Define the component used to render each table cells, accept a children params
   */
  renderCell: PropTypes.func,
  /**
   *  Define the component used to render a detailed line
   */
  renderDetailsLine: PropTypes.func,
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

Table.StyledTable = StyledTable
Table.StyledTableCell = StyledTableCell
Table.StyledTableHeaderCell = StyledTableHeaderCell
Table.StyledTableHeaderLine = StyledTableHeaderLine
Table.StyledTableLine = StyledTableLine

/** @component */
export default styled(Table)``
