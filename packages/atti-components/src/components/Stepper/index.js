import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Step from './styles/StyledStep'
import StyledLabel from './styles/StyledLabel'
import { StepperProvider, useStepperDispatch, useStepper } from './hooks'

/**
 * A basic stepper
 */
const Stepper = ({ children, onClick, stepList }) => {
  return (
    <StepperProvider onClick={onClick} stepperList={stepList}>
      {children}
    </StepperProvider>
  )
}

Stepper.defaultProps = {
  onClick: null,
  stepList: {},
}

Stepper.propTypes = {
  /**
   * The content of the stepper.
   * It can receive : Stepper.Step, Stepper.Label, Stepper.useStepList, Stepper.useStepDispatch
   */
  children: PropTypes.any.isRequired,
  /**
   *  retrieves the current step
   */
  onClick: PropTypes.any,
  /*
   * list that allows the user to choose the starting step
   */
  stepList: PropTypes.object,
}

Stepper.Step = Step
Stepper.Label = StyledLabel
Stepper.useStepList = useStepper
Stepper.useStepDispatch = useStepperDispatch

/** @component */
export default styled(Stepper)``
