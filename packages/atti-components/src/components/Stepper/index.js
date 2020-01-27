import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import StyledEllipse from './styles/StyledEllipse'
// import StyledBar from './styles/StyledBar'
import StyledStep from './styles/StyledStep'
import StyledLabel from './styles/StyledLabel'
import StyledStepperProvider from './styles/StyledStepperProvider'

const StepperContext = React.createContext()

/**
 * A basic stepper
 */

const Stepper = ({ step, variant, onChange, id, children }) => {
  return (
    <StyledStepperProvider>
      <StepperContext.Provider variant={variant} step={step} onChange={onChange} id={id}>
        {children}
      </StepperContext.Provider>
    </StyledStepperProvider>
  )
}

Stepper.defaultProps = {
  step: 1,
  value: null,
}

Stepper.propTypes = {
  step: PropTypes.number,
  variant: PropTypes.oneOf(['number', 'checks', 'normal']),
  /**
   * Gets called when the value of the stepper changes.
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */
  onChange: PropTypes.func,
  value: PropTypes.string,
}

// mise en place des attributs utilisable ou non
Stepper.Step = StyledStep
Stepper.Label = StyledLabel
Stepper.Element = StyledEllipse

/** @component */
export default styled(Stepper)``
