import styled from 'styled-components'
import React, { useEffect } from 'react'
import { useStepperDispatch } from '../hooks'

const StyledStep = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
  width: ${({ theme }) => theme.components.stepper.sizes.ellipse};
  height: ${({ theme }) => theme.components.stepper.sizes.ellipse};

  :not(:last-child) {
    margin-right: 100px;
  }

  :not(:last-child):after {
    position: absolute;
    content: '';
    right: -200%;
    top: 0%;
    width: 200%;
    height: 50%;
    border-bottom: 2px solid grey;
  }
`

const Step = ({ id, children }) => {
  const { register, activate } = useStepperDispatch()

  useEffect(() => {
    console.log(register(id))
  }, [])
  console.log('fois')

  const onClickElem = () => {
    console.log(id)
    activate(id)
    console.log('activer')
  }

  return <StyledStep onClick={onClickElem}>{children}</StyledStep>
}

export default Step
