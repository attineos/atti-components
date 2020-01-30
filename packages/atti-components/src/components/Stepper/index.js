import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import StyledEllipse from './styles/StyledEllipse'
import Step from './styles/StyledStep'
import StyledLabel from './styles/StyledLabel'
import { StepperProvider } from './hooks'

/**
 * A basic stepper
 */

const Stepper = ({ variant, children, value }) => {
  return <StepperProvider>{children}</StepperProvider>
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
   * The value of the stepper.
   */
  value: PropTypes.string,

  /**
   * The id of the step.
   */
  children: PropTypes.any.isRequired,
}

Stepper.Step = Step
Stepper.Label = StyledLabel
Stepper.Element = StyledEllipse

/** @component */
export default styled(Stepper)``
