import React, { useState, useEffect } from 'react'
import { noop, map } from 'lodash'
import { isDate, getDate, setDate, getMonth, setMonth, getYear, setYear } from 'date-fns'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import getDaysToDisplay from './helpers/getDaysToDisplay'
import arrangeDaysIntoWeeks from './helpers/arrangeDaysIntoWeeks'
import chainedRender from '../../helpers/generators/chainedRender'

import renderDefaultContainer from './helpers/renderContainer'
import renderDefaultDay from './helpers/renderDay'
import renderDefaultWeek from './helpers/renderWeek'

import StyledCalendarContainer from './styles/StyledCalendarContainer'
import StyledDay from './styles/StyledDay'
import StyledWeek from './styles/StyledWeek'

const InputCalendar = ({
  className,

  defaultValue,
  value,
  onChange,
  cursorValue,

  yearRange,
  locale,

  renderContainer,
  renderDay,
  renderWeek,
}) => {
  const [stateValue, setStateValue] = useState(defaultValue)
  const [stateCursor, setStateCursor] = useState(cursorValue || value || defaultValue)

  // Store current value in state
  useEffect(() => {
    if (isDate(value)) {
      setStateValue(value)
    }
  }, [value])

  // Store current cursor in state
  useEffect(() => {
    if (isDate(cursorValue)) {
      setStateCursor(cursorValue)
    }
  }, [cursorValue])

  const handleOnChange = day => {
    let newDate = setYear(stateValue, getYear(day))
    newDate = setMonth(newDate, getMonth(day))
    newDate = setDate(newDate, getDate(day))

    setStateValue(newDate)
    setStateCursor(newDate)
    onChange(newDate)
  }

  const handleCursorChange = value => {
    setStateCursor(value)
  }

  const days = getDaysToDisplay(stateCursor)
  const daysPerWeek = arrangeDaysIntoWeeks(days)

  return chainedRender(renderDefaultContainer, renderContainer, {
    className,
    cursorValue: stateCursor,
    handleCursorChange,
    value: stateValue,
    handleOnChange,
    yearRange,
    locale,
    children: (
      <React.Fragment>
        {map(daysPerWeek, week =>
          chainedRender(renderDefaultWeek, renderWeek, {
            className,
            cursorValue: stateCursor,
            handleCursorChange,
            value: stateValue,
            handleOnChange,
            week,
            children: (
              <React.Fragment>
                {map(week, day =>
                  chainedRender(renderDefaultDay, renderDay, {
                    className,
                    cursorValue: stateCursor,
                    handleCursorChange,
                    value: stateValue,
                    handleOnChange,
                    week,
                    day,
                  }),
                )}
              </React.Fragment>
            ),
          }),
        )}
      </React.Fragment>
    ),
  })
}

InputCalendar.defaultProps = {
  className: '',
  defaultValue: new Date(),
  value: null,
  cursorValue: null,
  onChange: noop,
  renderContainer: null,
  renderDay: null,
  renderWeek: null,

  locale: null,
}

InputCalendar.propTypes = {
  /**
   * The classes of the select.
   */
  className: PropTypes.string,
  /**
   * The defaultValue of the select.
   */
  defaultValue: PropTypes.instanceOf(Date),
  /**
   * The value of the select.
   */
  value: PropTypes.instanceOf(Date),
  /**
   * The value selected of the select.
   */
  cursorValue: PropTypes.instanceOf(Date),
  /**
   * The function called when the value changes.
   */
  onChange: PropTypes.func,

  yearRange: PropTypes.arrayOf(PropTypes.number),

  renderContainer: PropTypes.func,
  /**
   * The function to override the rendering of the Day.
   */
  renderDay: PropTypes.func,
  /**
   * The function to override the rendering of the Week.
   */
  renderWeek: PropTypes.func,

  locale: PropTypes.any,
}

InputCalendar.StyledCalendarContainer = StyledCalendarContainer
InputCalendar.StyledDay = StyledDay
InputCalendar.StyledWeek = StyledWeek

/** @component */
export default styled(React.memo(InputCalendar))``
