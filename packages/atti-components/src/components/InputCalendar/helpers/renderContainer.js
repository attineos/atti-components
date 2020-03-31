import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'
import InputMonth from '../../InputMonth'
import StyledCalendarContainer from '../styles/StyledCalendarContainer'

const renderContainer = ({
  className,
  cursorValue,
  yearRange,
  handleCursorChange,
  locale,
  children,
}) => (
  <StyledCalendarContainer className={className}>
    <InputMonth
      value={cursorValue}
      onChange={handleCursorChange}
      withNextPrevButtons
      yearRange={yearRange}
      locale={locale}
    />
    {children}
  </StyledCalendarContainer>
)

renderContainer.defaultProps = {
  className: '',
  cursorValue: '',
  handleCursorChange: noop,
  yearRange: null,
  locale: null,
}

renderContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  cursorValue: PropTypes.string,
  handleCursorChange: PropTypes.func,
  yearRange: PropTypes.arrayOf(PropTypes.number),
  locale: PropTypes.any,
}

export default renderContainer
