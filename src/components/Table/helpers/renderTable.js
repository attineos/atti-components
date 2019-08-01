import React from 'react'
import chain from 'helpers/generators/chain'
import { isNull, isUndefined } from 'lodash'
import { StyledTable } from '../styles'

const renderTable = (content, { className, renderTable }) => {
  return chain(
    element => !isNull(element) && !isUndefined(element),
    () => (renderTable ? renderTable(content) : null),
    () => <StyledTable className={className}>{content}</StyledTable>,
  )
}

export default renderTable
