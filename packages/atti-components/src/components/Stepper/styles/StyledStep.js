import React, { useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { size } from 'lodash'

import { useStepperDispatch, useStepper } from '../hooks'

const StyledStep = styled.div`
  position: relative;
  display: inline-block;

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
`

const Step = ({ id, children }) => {
  const { register, activate, desactivate } = useStepperDispatch()
  const stepList = useStepper()

  useEffect(() => {
    register(id)
  }, [])

  const onClickElem = () => {
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
  }

  const isActive = () => {
    return stepList[id]
  }

  return (
    <StyledStep isActivated={isActive()} onClick={onClickElem}>
      {children}
    </StyledStep>
  )
}
Step.defaultProps = {
  children: null,
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
}

export default Step
