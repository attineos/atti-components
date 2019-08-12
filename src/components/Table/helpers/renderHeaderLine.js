import React from 'react'
import { isNil } from 'lodash'

import chain from 'helpers/generators/chain'
import { StyledTableHeaderLine } from '../styles'

const renderHeaderLine = (content, { renderHeaderLine }) => {
  return chain(
    element => !isNil(element),
    () => (renderHeaderLine ? renderHeaderLine(content) : null),
    () => <StyledTableHeaderLine>{content}</StyledTableHeaderLine>,
  )
}

export default renderHeaderLine
