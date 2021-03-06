import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { isEmpty, forEach } from 'lodash'

import StyledRound from './StyledRound'
import { useActiveId, useStepperDispatch, useStepper, useOnChange, useStepperAdapt } from '../hooks'

function adaptStep(nbStep, size) {
  const reduceStep = 0.85 ** nbStep
  return css`calc(${size} * ${reduceStep})`
}

const StyledStep = styled.li`
  position: relative;
  cursor: pointer;
  font-family: ${({ theme }) => theme.components.stepper.fonts.fontFamily};
  color: ${({ theme }) => theme.components.stepper.colors.midText};

  :not(:last-child) {
    margin-right: ${({ nbStep, theme }) =>
      adaptStep(nbStep, theme.components.stepper.sizes.alignBar)};
  }

  hr {
    position: absolute;
    width: ${({ nbStep, theme }) => adaptStep(nbStep, theme.components.stepper.sizes.alignBar)};
    top: ${({ theme }) => theme.components.stepper.sizes.topBar};
    left: ${({ theme }) => theme.components.stepper.sizes.leftBar};
    margin: 0;
    border: 0.5px solid ${({ theme }) => theme.components.stepper.colors.bar};
    background:  ${({ theme }) => theme.components.stepper.colors.bar};
  }

  :last-child hr {
    display: none;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
      :not(:last-child) {
        margin-right: 0;
        margin-bottom: ${({ theme }) => theme.components.stepper.sizes.alignBarMobile};
      }

      hr {
        width:0;
        height: ${({ theme }) => theme.components.stepper.sizes.alignBarMobile};
        top: ${({ theme }) => theme.components.stepper.sizes.topBarMobile};
        left: ${({ theme }) => theme.components.stepper.sizes.leftBarMobile};
      }
    }
  }
`

const Step = ({ id, children, value }) => {
  const { register, activate, desactivate } = useStepperDispatch()
  const stepList = useStepper()
  const onClick = useOnChange()
  const [nbStep, setNbStep] = useStepperAdapt()
  const [activeId, setActiveId] = useActiveId()

  useEffect(() => {
    if (isEmpty(stepList)) {
      register(id)
    }
    setNbStep(prevNbStep => prevNbStep + 1)
  }, [id, register, setNbStep, stepList])

  const onClickStep = () => {
    const currentStep = id
    if (stepList[currentStep]) {
      forEach(stepList, (_, key) => {
        if (key > currentStep) {
          desactivate(key)
        }
      })
    } else {
      forEach(stepList, (_, key) => {
        if (key <= currentStep) activate(key)
      })
    }
    onClick && onClick(currentStep)
    setActiveId(id)
  }

  const isComplete = () => {
    return stepList[id]
  }

  return (
    <StyledStep
      onClick={onClickStep}
      aria-current={id === activeId ? 'step' : undefined}
      aria-checked={isComplete()}
      nbStep={nbStep}
    >
      <StyledRound isCompleted={isComplete()}>
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
