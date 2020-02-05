import React, { useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { size } from 'lodash'

import StyledMidLabel from './StyledMidLabel'
import { useStepperDispatch, useStepper, useOnChange } from '../hooks'

const StyledStep = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;

  width: ${({ theme }) => theme.components.stepper.sizes.element};
  height: ${({ theme }) => theme.components.stepper.sizes.element};

  border-radius: ${({ theme }) => theme.components.stepper.sizes.borderRadius};
  cursor: pointer;
  box-shadow: ${({ isActivated, theme }) =>
    isActivated
      ? theme.components.stepper.boxShadows.shadow1
      : theme.components.stepper.boxShadows.shadow2};

  background-color: ${({ isActivated, theme }) =>
    isActivated ? theme.components.stepper.colors.stepAfter : theme.components.stepper.colors.step};

  :not(:last-child) {
    margin-right: 100px;
  }

  :not(:last-child):after {
    position: absolute;
    content: '';
    right: ${({ theme }) => theme.components.stepper.sizes.rightBar};
    top: ${({ theme }) => theme.components.stepper.sizes.topBar};
    width: ${({ theme }) => theme.components.stepper.sizes.widthBar};
    margin-top: ${({ theme }) => theme.components.stepper.sizes.marginTopBar};
    border-bottom: ${({ theme }) => theme.components.stepper.sizes.borderBottomBar};
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: block;
    margin-top: 50px;
    :not(:last-child):after {
      content: '';
      left: 47%;
      top: 50%;
      width: 0;
      height: 75%;
      border: ${({ theme }) => theme.components.stepper.sizes.borderMobileBar};
    }
  }
`

const Step = ({ id, children, value }) => {
  const { register, activate, desactivate } = useStepperDispatch()
  const stepList = useStepper()
  const onClick = useOnChange()

  useEffect(() => {
    register(id)
  }, [])

  const onClickStep = () => {
    const currentStep = id
    if (stepList[currentStep]) {
      for (let k = currentStep; k <= size(stepList); k++) {
        desactivate(k)
      }
    } else {
      for (let i = 1; i <= currentStep; i++) {
        activate(i)
      }
    }
    isActive()
    onClick && onClick(currentStep)
  }

  const isActive = () => {
    return stepList[id]
  }

  return (
    <StyledStep isActivated={isActive()} onClick={onClickStep}>
      <StyledMidLabel>{value}</StyledMidLabel>
      {children}
    </StyledStep>
  )
}
Step.defaultProps = {
  children: null,
  value: null,
}

Step.propTypes = {
  /**
   * The id of the step.
   * It allows to identify each step to know if it activates and apply the modifications
   */
  id: PropTypes.string.isRequired,
  /**
   * The content of the step.
   */
  children: PropTypes.any,
  /**
   * value in the step.
   */
  value: PropTypes.string,
}

export default Step
