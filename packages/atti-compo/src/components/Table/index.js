import React, { Fragment, PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { isNull, map, isFunction, isUndefined, size, isString } from 'lodash'

import chain from 'helpers/generators/chain'
import {
  StyledTable,
  StyledTableHeaderLine,
  StyledTableLine,
  StyledTableHeaderCell,
  StyledTableCell,
} from './styles'

import { Text } from '../Typographies'

/**
 * A Table component.
 *
 */
class Table extends PureComponent {
  renderTable(children) {
    const { className, renderTable } = this.props

    return chain(
      element => !isNull(element) && !isUndefined(element),
      () => (renderTable ? renderTable(children) : null),
      () => <StyledTable className={className}>{children}</StyledTable>,
    )
  }

  renderText(content) {
    if (isString(content)) {
      return <Text>{content}</Text>
    }

    return content
  }

  renderEmptyTable() {
    const { renderEmptyTable } = this.props

    return chain(
      element => !isNull(element) && !isUndefined(element),
      () => (renderEmptyTable ? renderEmptyTable() : null),
      () => <StyledTable />,
    )
  }

  renderHeaderLine(children) {
    const { renderHeaderLine } = this.props

    return chain(
      element => !isNull(element) && !isUndefined(element),
      () => (renderHeaderLine ? renderHeaderLine(children) : null),
      () => <StyledTableHeaderLine>{children}</StyledTableHeaderLine>,
    )
  }

  renderHeaderCell(col) {
    const { renderHeaderCell } = this.props

    return (
      <Fragment key={col.name}>
        {chain(
          element => !isNull(element) && !isUndefined(element),
          () => (renderHeaderCell ? renderHeaderCell(col) : null),
          () =>
            col.renderHeaderCell && isFunction(col.renderHeaderCell)
              ? col.renderHeaderCell(col)
              : null,
          () => (
            <StyledTableHeaderCell>{this.renderText(col.label)}</StyledTableHeaderCell>
          ),
        )}
      </Fragment>
    )
  }

  renderLine(element, children, id, odd) {
    const { renderLine, isLineHoverable, onLineClick } = this.props

    return (
      <Fragment key={id}>
        {chain(
          // We assume a valid result as soon as we got a non null element
          element => !isNull(element) && !isUndefined(element),
          () =>
            element && isFunction(element.render) ? element.render(element, children, odd) : null,
          () => (renderLine ? renderLine(element, children, odd) : null),
          () => {
            const isHoverable =
              'isLineHoverable' in element ? element.isLineHoverable : isLineHoverable
            const handleLineClick = 'onLineClick' in element ? element.onLineClick : onLineClick

            return (
              <StyledTableLine onClick={handleLineClick} isHoverable={isHoverable} odd={odd}>
                {children}
              </StyledTableLine>
            )
          },
        )}
      </Fragment>
    )
  }

  renderDetailsLine(element, id, odd) {
    const { renderDetailsLine, cols, isDetailsLineHoverable } = this.props

    const colCount = size(cols)
    const isDetailsHoverable =
      'isDetailsLineHoverable' in element ? element.isDetailsLineHoverable : isDetailsLineHoverable

    const component = chain(
      // We assume a valid result as soon as we got a non null element
      element => !isNull(element) && !isUndefined(element),
      () =>
        element && isFunction(element.renderDetails) ? element.renderDetails(element, odd) : null,
      () => (renderDetailsLine ? renderDetailsLine(element, odd) : null),
    )

    if (!component) {
      return null
    }

    return (
      <Fragment key={`details-${id}`}>
        <StyledTableLine isHoverable={isDetailsHoverable} odd={odd}>
          <StyledTableCell colSpan={colCount}>{component}</StyledTableCell>
        </StyledTableLine>
      </Fragment>
    )
  }

  renderCell(col, element, index) {
    const { renderCell } = this.props

    return (
      <Fragment key={`${index}-${col.name}`}>
        {chain(
          element => !isNull(element) && !isUndefined(element),
          () => (element && isFunction(element.render) ? element.render(col, element) : null),
          () => (col && isFunction(col.renderCell) ? col.renderCell(col, element) : null),
          () => (renderCell ? renderCell(col, element) : null),
          () => (
            <StyledTableCell>{this.renderText(element[col.name])}</StyledTableCell>
          ),
        )}
      </Fragment>
    )
  }

  render() {
    const { cols, elements } = this.props

    if (size(elements) === 0) {
      return this.renderEmptyTable()
    }
    return this.renderTable(
      <React.Fragment>
        <thead>
          {this.renderHeaderLine(
            <React.Fragment>{map(cols, col => this.renderHeaderCell(col))}</React.Fragment>,
          )}
        </thead>

        <tbody>
          {map(elements, (element, index) => (
            <React.Fragment>
              {this.renderLine(
                element,
                <React.Fragment>
                  {map(cols, col => this.renderCell(col, element, index))}
                </React.Fragment>,
                index,
                index % 2,
              )}
              {this.renderDetailsLine(element, index, index % 2)}
            </React.Fragment>
          ))}
        </tbody>
      </React.Fragment>,
    )
  }
}

Table.defaultProps = {
  className: '',
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
