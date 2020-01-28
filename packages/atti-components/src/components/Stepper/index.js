import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import StyledEllipse from './styles/StyledEllipse'
import StyledBar from './styles/StyledBar'
import StyledStep from './styles/StyledStep'
import StyledLabel from './styles/StyledLabel'

const StepperContext = React.createContext()

/**
 * A basic stepper
 */

const Stepper = ({ variant, onChange, id, children, value }) => {
  const [step, setStep] = useState()
  const handleStep = () => {
    setStep(id)
    onChange && onChange()
  }
  return (
    <StepperContext.Provider
      variant={variant}
      onChange={handleStep}
      id={id}
      value={value}
      step={step}
    >
      {children}
    </StepperContext.Provider>
  )
}

Stepper.defaultProps = {
  value: null,
  variant: 'normal',
}

Stepper.propTypes = {
  /**
   * The variant of the stepper.
   */
  variant: PropTypes.oneOf(['number', 'checks', 'normal']),

  /**
   * Gets called when the step changes.
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */
  onChange: PropTypes.func,

  /**
   * The value of the stepper.
   */
  value: PropTypes.string,

  /**
   * The id of the step require.
   */
  id: PropTypes.number,
}

Stepper.Step = StyledStep
Stepper.Label = StyledLabel
Stepper.Element = StyledEllipse
Stepper.Bar = StyledBar

/** @component */
export default styled(Stepper)``
