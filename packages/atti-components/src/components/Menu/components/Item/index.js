import React from 'react'
import PropTypes from 'prop-types'

import { ItemLink, Li } from './styles'

const Item = ({ children, ...rest }) => {
  return (
    <Li>
      <ItemLink {...rest}>{children}</ItemLink>
    </Li>
  )
}

Item.defaultProps = {
  children: null,
}

Item.propTypes = {
  children: PropTypes.any,
}

export default Item
