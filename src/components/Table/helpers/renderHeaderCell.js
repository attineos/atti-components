import React, { Fragment } from 'react'
import { isNull, isUndefined, isFunction } from 'lodash'

import chain from 'helpers/generators/chain'
import { StyledTableHeaderCell } from '../styles'

import renderText from './renderText'

const renderHeaderCell = (col, { renderHeaderCell }) => {
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
          <StyledTableHeaderCell>{renderText(col.label)}</StyledTableHeaderCell>
        ),
      )}
    </Fragment>
  )
}
export default renderHeaderCell
