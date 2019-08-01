import React from 'react'
import { isNull, isUndefined } from 'lodash'

import chain from 'helpers/generators/chain'
import { StyledTableHeaderLine } from '../styles'

const renderHeaderLine = (content, { renderHeaderLine }) => {
  return chain(
    element => !isNull(element) && !isUndefined(element),
    () => (renderHeaderLine ? renderHeaderLine(content) : null),
    () => <StyledTableHeaderLine>{content}</StyledTableHeaderLine>,
  )
}

export default renderHeaderLine
