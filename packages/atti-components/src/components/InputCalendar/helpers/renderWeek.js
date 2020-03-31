import React from 'react'
import PropTypes from 'prop-types'
import StyledWeek from '../styles/StyledWeek'

const renderWeek = ({ children, week }) => <StyledWeek key={week[0]}>{children}</StyledWeek>

renderWeek.propTypes = {
  children: PropTypes.node.isRequired,
  week: PropTypes.array.isRequired,
}

export default renderWeek
