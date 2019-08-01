import React, { useState } from 'react'
import {
  getSeconds,
  setSeconds,
  getMinutes,
  setMinutes,
  getHours,
  setHours,
  isEqual,
  isDate,
} from 'date-fns'
import { noop, isNull, isUndefined, isFunction } from 'lodash'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import chain from 'helpers/generators/chain'
import Label from '../Typographies/Label'
import Input from '../Input'

import StyledTimeContainer from './styles/StyledTimeContainer'

/**
 * A select field.
 *
 */
const InputTime = ({
  className,

  hoursLabel,
  minutesLabel,
  secondsLabel,
  datePartRender,

  defaultValue,
  value,
  onChange,
}) => {
  const [stateValue, setStateValue] = useState(defaultValue)

  // Sync with value if in controlled state
  if (isDate(value) && !isEqual(stateValue, value)) {
    setStateValue(value)
  }

  const handleOnChange = (value, mutator) => {
    const newDate = mutator(stateValue, value)
    setStateValue(newDate)
    onChange(newDate)
  }

  const defaultComponentRender = (mode, label, value, handleOnChange) => {
    return (
      <div>
        <Label>{label}</Label>
        <Input
          type="number"
          min="0"
          max={mode === 'hours' ? '24' : '60'}
          value={value}
          onChange={e => handleOnChange(e.target.value)}
        />
      </div>
    )
  }

  const chainedComponentRender = (...params) => {
    return chain(
      element => !isNull(element) && !isUndefined(element),
      () => datePartRender && isFunction(datePartRender) && datePartRender(...params),
      () => defaultComponentRender(...params),
    )
  }

  return (
    <StyledTimeContainer className={className}>
      {chainedComponentRender('hours', hoursLabel, getHours(stateValue), value =>
        handleOnChange(value, setHours),
      )}

      {chainedComponentRender('minutes', minutesLabel, getMinutes(stateValue), value =>
        handleOnChange(value, setMinutes),
      )}

      {chainedComponentRender('seconds', secondsLabel, getSeconds(stateValue), value =>
        handleOnChange(value, setSeconds),
      )}
    </StyledTimeContainer>
  )
}

InputTime.defaultProps = {
  className: '',
  hoursLabel: 'Hours',
  minutesLabel: 'Minutes',
  secondsLabel: 'Seconds',
  defaultValue: new Date(),
  value: null,
  onChange: noop,
  datePartRender: null,
}

InputTime.propTypes = {
  /**
   * The classes of the select.
   */
  className: PropTypes.string,

  hoursLabel: PropTypes.string,
  minutesLabel: PropTypes.string,
  secondsLabel: PropTypes.string,

  datePartRender: PropTypes.func,

  defaultValue: PropTypes.instanceOf(Date),
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
}

/** @component */
export default styled(React.memo(InputTime))``
