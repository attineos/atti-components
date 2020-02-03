import styled from 'styled-components'
import React, { useEffect } from 'react'
import { size } from 'lodash'

import { useStepperDispatch, useStepper } from '../hooks'

const StyledStep = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
  width: ${({ theme }) => theme.components.stepper.sizes.ellipse};
  height: ${({ theme }) => theme.components.stepper.sizes.ellipse};

  border-radius: ${({ theme }) => theme.components.stepper.sizes.borderRadius};
  cursor: pointer;

  :not(:last-child) {
    margin-right: 100px;
  }

  :not(:last-child):after {
    position: absolute;
    content: '';
    right: -154%;
    top: 0%;
    width: 152%;
    margin-top: 50%;
    border-bottom: 1px solid grey;
    border-radius: ${({ theme }) => theme.components.stepper.sizes.borderRadius};
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
  }
  console.log(list)

  return <StyledStep onClick={onClickElem}>{children}</StyledStep>
}

export default Step
