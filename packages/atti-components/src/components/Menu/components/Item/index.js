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

Item.propTypes = {
  children: PropTypes.any,
}

Item.defaultProps = {
  children: null,
}

export default Item
