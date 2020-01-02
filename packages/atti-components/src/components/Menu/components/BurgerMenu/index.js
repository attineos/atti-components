import React from 'react'
import PropTypes from 'prop-types'

import { Holder, Line } from './styles'

const BurgerMenu = ({ opened, updateOpened }) => (
  <Holder onClick={updateOpened} opened={opened}>
    <Line />
    <Line />
    <Line />
    <Line />
  </Holder>
)

BurgerMenu.propTypes = {
  opened: PropTypes.bool,
  updateOpened: PropTypes.func,
}

BurgerMenu.defaultProps = {
  opened: false,
  updateOpened: null,
}

export default BurgerMenu
