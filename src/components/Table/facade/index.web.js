/* eslint react/prop-types: 0 */
import React, { Fragment } from 'react'
import { isNull, map, isFunction, isUndefined, size, isString } from 'lodash'
import chain from 'helpers/generators/chain'
import Facade from './Facade'
import {
  StyledTable,
  StyledTableHeaderLine,
  StyledTableLine,
  StyledTableHeaderCell,
  StyledTableCell,
} from '../styles'

import { Text } from '../../Typographies'

class TableFacade extends Facade {
  renderTable(children) {
    const { className, renderTable } = this.props

    return chain(
      element => !isNull(element) && !isUndefined(element),
      () => (renderTable && isFunction(renderTable) ? renderTable(children) : null),
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
      () => (renderEmptyTable && isFunction(renderEmptyTable) ? renderEmptyTable() : null),
      () => <StyledTable />,
    )
  }

  renderHeaderLine(children) {
    const { renderHeaderLine } = this.props

    return chain(
      element => !isNull(element) && !isUndefined(element),
      () => (renderHeaderLine && isFunction(renderHeaderLine) ? renderHeaderLine(children) : null),
      () => <StyledTableHeaderLine>{children}</StyledTableHeaderLine>,
    )
  }

  renderHeaderCell(col) {
    const { renderHeaderCell } = this.props

    return (
      <Fragment key={col.name}>
        {chain(
          element => !isNull(element) && !isUndefined(element),
          () => (renderHeaderCell && isFunction(renderHeaderCell) ? renderHeaderCell(col) : null),
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

  renderLine(element, children, id) {
    const { renderLine } = this.props

    return (
      <Fragment key={id}>
        {chain(
          // We assume a valid result as soon as we got a non null element
          element => !isNull(element) && !isUndefined(element),
          () => (element && isFunction(element.render) ? element.render(element, children) : null),
          () => (renderLine && isFunction(renderLine) ? renderLine(element, children) : null),
          () => (
            <StyledTableLine>{children}</StyledTableLine>
          ),
        )}
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
          () => (renderCell && isFunction(renderCell) ? renderCell(col, element) : null),
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
          {map(elements, (element, index) =>
            this.renderLine(
              element,
              <React.Fragment>
                {map(cols, col => this.renderCell(col, element, index))}
              </React.Fragment>,
              index,
            ),
          )}
        </tbody>
      </React.Fragment>,
    )
  }
}

export default TableFacade
