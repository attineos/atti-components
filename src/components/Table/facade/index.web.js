/* eslint react/prop-types: 0 */
import React from 'react'
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

import Text from '../../Text'

class TableFacade extends Facade {
  renderTable(children) {
    const { renderTable } = this.props

    return chain(
      element => !isNull(element) && !isUndefined(element),
      () => (renderTable && isFunction(renderTable) ? renderTable(children) : null),
      () => <StyledTable>{children}</StyledTable>,
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

    return chain(
      element => !isNull(element) && !isUndefined(element),
      () => (renderHeaderCell && isFunction(renderHeaderCell) ? renderHeaderCell(col) : null),
      () =>
        col.renderHeaderCell && isFunction(col.renderHeaderCell) ? col.renderHeaderCell(col) : null,
      () => <StyledTableHeaderCell>{this.renderText(col.label)}</StyledTableHeaderCell>,
    )
  }

  renderLine(element, children) {
    const { renderLine } = this.props

    return chain(
      // We assume a valid result as soon as we got a non null element
      element => !isNull(element) && !isUndefined(element),
      () => (element && isFunction(element.render) ? element.render(element, children) : null),
      () => (renderLine && isFunction(renderLine) ? renderLine(element, children) : null),
      () => <StyledTableLine>{children}</StyledTableLine>,
    )
  }

  renderCell(col, element) {
    const { renderCell } = this.props

    return chain(
      element => !isNull(element) && !isUndefined(element),
      () => (element && isFunction(element.render) ? element.render(col, element) : null),
      () => (col && isFunction(col.renderCell) ? col.renderCell(col, element) : null),
      () => (renderCell && isFunction(renderCell) ? renderCell(col, element) : null),
      () => <StyledTableCell>{this.renderText(element[col.name])}</StyledTableCell>,
    )
  }

  render() {
    const { cols, elements } = this.props

    if (size(elements) === 0) {
      return this.renderEmptyTable()
    }
    return this.renderTable(
      <React.Fragment>
        {this.renderHeaderLine(
          <React.Fragment>{map(cols, col => this.renderHeaderCell(col))}</React.Fragment>,
        )}

        {map(elements, element =>
          this.renderLine(
            element,
            <React.Fragment>{map(cols, col => this.renderCell(col, element))}</React.Fragment>,
          ),
        )}
      </React.Fragment>,
    )
  }
}

export default TableFacade
