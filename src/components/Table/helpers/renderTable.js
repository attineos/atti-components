import React from 'react'
import chain from 'helpers/generators/chain'
import { isNil } from 'lodash'
import { StyledTable } from '../styles'

const renderTable = (content, { className, renderTable }) => {
  return chain(
    element => !isNil(element),
    () => (renderTable ? renderTable(content) : null),
    () => <StyledTable className={className}>{content}</StyledTable>,
  )
}

export default renderTable
