import React from 'react'
import InputMonth from '../../InputMonth'
import StyledCalendarContainer from '../styles/StyledCalendarContainer'

const renderContainer = ({
                           className,
                           cursorValue,
                           handleCursorChange,
                           children,
                         }) => (
  <StyledCalendarContainer className={className}>
    <InputMonth value={cursorValue} onChange={handleCursorChange} />
    {children}
  </StyledCalendarContainer>
)

export default renderContainer
