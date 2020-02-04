import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Step from './styles/StyledStep'
import StyledLabel from './styles/StyledLabel'
import { StepperProvider, useStepperDispatch, useStepper } from './hooks'

/**
 * A basic stepper
 */

const Stepper = ({ children }) => {
  return <StepperProvider>{children}</StepperProvider>
}

Stepper.propTypes = {
  /**
   * The content of the stepper.
   * It can receive : Stepper.Step, Stepper.Label, Stepper.useStepList, Stepper.useStepDispatch
   */
  children: PropTypes.any.isRequired,
}

Stepper.Step = Step
Stepper.Label = StyledLabel
Stepper.useStepList = useStepper
Stepper.useStepDispatch = useStepperDispatch

/** @component */
export default styled(Stepper)``
