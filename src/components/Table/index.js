import React, { Fragment } from 'react'
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
const Table = ({
  className,
  cols,
  elements,
  isDetailsLineHoverable,
  isLineHoverable,
  onLineClick,
  renderCell: propsRenderCell,
  renderDetailsLine: propsRenderDetailsLine,
  renderEmptyTable: propsRenderEmptyTable,
  renderHeaderCell: propsRenderHeaderCell,
  renderHeaderLine: propsRenderHeaderLine,
  renderLine: propsRenderLine,
  renderTable: propsRenderTable,
}) => {
  const renderTable = content => {
    return chain(
      element => !isNull(element) && !isUndefined(element),
      () => (propsRenderTable ? propsRenderTable(content) : null),
      () => <StyledTable className={className}>{content}</StyledTable>,
    )
  }

  const renderText = content => {
    if (isString(content)) {
      return <Text>{content}</Text>
    }

    return content
  }

  const renderEmptyTable = () => {
    return chain(
      element => !isNull(element) && !isUndefined(element),
      () => (propsRenderEmptyTable ? propsRenderEmptyTable() : null),
      () => <StyledTable />,
    )
  }

  const renderHeaderLine = content => {
    return chain(
      element => !isNull(element) && !isUndefined(element),
      () => (propsRenderHeaderLine ? propsRenderHeaderLine(content) : null),
      () => <StyledTableHeaderLine>{content}</StyledTableHeaderLine>,
    )
  }

  const renderHeaderCell = col => {
    return (
      <Fragment key={col.name}>
        {chain(
          element => !isNull(element) && !isUndefined(element),
          () => (propsRenderHeaderCell ? propsRenderHeaderCell(col) : null),
          () =>
            col.renderHeaderCell && isFunction(col.renderHeaderCell)
              ? col.renderHeaderCell(col)
              : null,
          () => (
            <StyledTableHeaderCell>{renderText(col.label)}</StyledTableHeaderCell>
          ),
        )}
      </Fragment>
    )
  }

  const renderLine = (element, content, id, odd) => {
    return (
      <Fragment key={id}>
        {chain(
          // We assume a valid result as soon as we got a non null element
          element => !isNull(element) && !isUndefined(element),
          () =>
            element && isFunction(element.render) ? element.render(element, content, odd) : null,
          () => (propsRenderLine ? propsRenderLine(element, content, odd) : null),
          () => {
            const isHoverable =
              'isLineHoverable' in element ? element.isLineHoverable : isLineHoverable
            const handleLineClick = 'onLineClick' in element ? element.onLineClick : onLineClick

            return (
              <StyledTableLine onClick={handleLineClick} isHoverable={isHoverable} odd={odd}>
                {content}
              </StyledTableLine>
            )
          },
        )}
      </Fragment>
    )
  }

  const renderDetailsLine = (element, id, odd) => {
    const colCount = size(cols)
    const isDetailsHoverable =
      'isDetailsLineHoverable' in element ? element.isDetailsLineHoverable : isDetailsLineHoverable

    const component = chain(
      // We assume a valid result as soon as we got a non null element
      element => !isNull(element) && !isUndefined(element),
      () =>
        element && isFunction(element.renderDetails) ? element.renderDetails(element, odd) : null,
      () => (propsRenderDetailsLine ? propsRenderDetailsLine(element, odd) : null),
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

  const renderCell = (col, element, index) => {
    return (
      <Fragment key={`${index}-${col.name}`}>
        {chain(
          element => !isNull(element) && !isUndefined(element),
          () => (element && isFunction(element.render) ? element.render(col, element) : null),
          () => (col && isFunction(col.renderCell) ? col.renderCell(col, element) : null),
          () => (propsRenderCell ? propsRenderCell(col, element) : null),
          () => (
            <StyledTableCell>{renderText(element[col.name])}</StyledTableCell>
          ),
        )}
      </Fragment>
    )
  }

  if (size(elements) === 0) {
    return renderEmptyTable()
  }
  return renderTable(
    <React.Fragment>
      <thead>
        {renderHeaderLine(
          <React.Fragment>{map(cols, col => renderHeaderCell(col))}</React.Fragment>,
        )}
      </thead>

      <tbody>
        {map(elements, (element, index) => (
          <React.Fragment>
            {renderLine(
              element,
              <React.Fragment>{map(cols, col => renderCell(col, element, index))}</React.Fragment>,
              index,
              index % 2,
            )}
            {renderDetailsLine(element, index, index % 2)}
          </React.Fragment>
        ))}
      </tbody>
    </React.Fragment>,
  )
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
