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
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);

  background-color: ${({ isActivated, theme }) =>
    isActivated ? theme.components.stepper.colors.stepAfter : theme.components.stepper.colors.step};

  :not(:last-child) {
    margin-right: 100px;
  }

  :not(:last-child):after {
    position: absolute;
    content: '';
    right: -200%;
    top: 0%;
    width: 200%;
    margin-top: 50%;
    border-bottom: 3px solid grey;
  }
`

const Step = ({ id, children }) => {
  const { register, activate, desactivate } = useStepperDispatch()
  const list = useStepper()

  useEffect(() => {
    register(id)
  }, [])

  const onClickElem = () => {
    const currentStep = id
    if (list[currentStep]) {
      for (let k = currentStep; k <= size(list); k++) {
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
    return list[id]
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
  id: PropTypes.string.isRequired,
  children: PropTypes.any,
}

export default Step
