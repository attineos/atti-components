import React from 'react'
import PropTypes from 'prop-types'
import StyledWeek from '../styles/StyledWeek'

const renderWeek = ({ children }) => <StyledWeek>{children}</StyledWeek>

renderWeek.propTypes = {
  children: PropTypes.node.isRequired,
}

export default renderWeek
