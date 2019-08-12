import React, { Fragment } from 'react'
import { isNil, isFunction, size } from 'lodash'

import chain from 'helpers/generators/chain'
import { StyledTableLine, StyledTableCell } from '../styles'

const renderDetailsLine = (
  cols,
  element,
  id,
  odd,
  { isDetailsLineHoverable, renderDetailsLine },
) => {
  const colCount = size(cols)
  const isDetailsHoverable =
    'isDetailsLineHoverable' in element ? element.isDetailsLineHoverable : isDetailsLineHoverable

  const component = chain(
    // We assume a valid result as soon as we got a non null element
    element => !isNil(element),
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

export default renderDetailsLine
