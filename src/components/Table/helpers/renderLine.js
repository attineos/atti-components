import React, { Fragment } from 'react'
import { isNull, isUndefined, isFunction } from 'lodash'

import chain from 'helpers/generators/chain'
import { StyledTableLine } from '../styles'

const renderLine = (element, content, id, odd, { isLineHoverable, renderLine, onLineClick }) => {
  return (
    <Fragment key={id}>
      {chain(
        // We assume a valid result as soon as we got a non null element
        element => !isNull(element) && !isUndefined(element),
        () =>
          element && isFunction(element.render) ? element.render(element, content, odd) : null,
        () => (renderLine ? renderLine(element, content, odd) : null),
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

export default renderLine
