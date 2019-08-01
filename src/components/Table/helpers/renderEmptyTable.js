import React from 'react'
import { isNull, isUndefined } from 'lodash'

import chain from 'helpers/generators/chain'
import { StyledTable } from '../styles'

const renderEmptyTable = ({ renderEmptyTable }) => {
  return chain(
    element => !isNull(element) && !isUndefined(element),
    () => (renderEmptyTable ? renderEmptyTable() : null),
    () => <StyledTable />,
  )
}

export default renderEmptyTable
