import React from 'react'
import { isNil } from 'lodash'

import chain from 'helpers/generators/chain'
import { StyledTable } from '../styles'

const renderEmptyTable = ({ renderEmptyTable }) => {
  return chain(
    element => !isNil(element),
    () => (renderEmptyTable ? renderEmptyTable() : null),
    () => <StyledTable />,
  )
}

export default renderEmptyTable
