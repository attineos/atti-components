import React, { Fragment } from 'react'
import { isNull, isUndefined, isFunction } from 'lodash'

import chain from 'helpers/generators/chain'
import renderText from './renderText'
import { StyledTableCell } from '../styles'

const renderCell = (col, element, { renderCell }) => {
  return (
    <Fragment key={`cell-${col.name}`}>
      {chain(
        element => !isNull(element) && !isUndefined(element),
        () => (element && isFunction(element.render) ? element.render(col, element) : null),
        () => (col && isFunction(col.renderCell) ? col.renderCell(col, element) : null),
        () => (renderCell ? renderCell(col, element) : null),
        () => (
          <StyledTableCell>{renderText(element[col.name])}</StyledTableCell>
        ),
      )}
    </Fragment>
  )
}

export default renderCell
