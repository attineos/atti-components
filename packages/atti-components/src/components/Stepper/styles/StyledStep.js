import React, { useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { size, isEmpty } from 'lodash'

import StyledRound from './StyledRound'
import { useStepperDispatch, useStepper, useOnChange } from '../hooks'

const StyledStep = styled.li`
  cursor: pointer;
  font-family: ${({ theme }) => theme.components.stepper.fonts.fontFamily};
  color: ${({ theme }) => theme.components.stepper.colors.midText};

  :not(:last-child) {
    margin-right:  ${({ theme }) => theme.components.stepper.sizes.alignBar};
  }

  hr {
    position: absolute;
    width: ${({ theme }) => theme.components.stepper.sizes.alignBar};
    top: ${({ theme }) => theme.components.stepper.sizes.topBar};
    left: ${({ theme }) => theme.components.stepper.sizes.leftBar};
    margin: 0;
    border: 0.5px solid grey;
    background:  ${({ theme }) => theme.components.stepper.colors.bar};
  }

  :last-child hr {
    display: none;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {

    }
  }
`

const Step = ({ id, children, value }) => {
  const { register, activate, desactivate } = useStepperDispatch()
  const stepList = useStepper()
  const onClick = useOnChange()

  useEffect(() => {
    if (isEmpty(stepList)) {
      register(id)
    }
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
    onClick && onClick(currentStep)
  }

  const isActive = () => {
    return stepList[id]
  }

  return (
    <StyledStep onClick={onClickStep}>
      <StyledRound isActivated={isActive()}>
        {value}
        <hr />
      </StyledRound>
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
