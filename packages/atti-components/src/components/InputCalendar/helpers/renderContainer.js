import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'
import InputMonth from '../../InputMonth'
import StyledCalendarContainer from '../styles/StyledCalendarContainer'

const renderContainer = ({ className, cursorValue, handleCursorChange, children }) => (
  <StyledCalendarContainer className={className}>
    <InputMonth value={cursorValue} onChange={handleCursorChange} withNextPrevButtons />
    {children}
  </StyledCalendarContainer>
)

renderContainer.defaultProps = {
  className: '',
  cursorValue: '',
  handleCursorChange: noop,
}

renderContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  cursorValue: PropTypes.string,
  handleCursorChange: PropTypes.func,
}

export default renderContainer
