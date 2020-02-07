import React, { useContext, useReducer, useState } from 'react'
import PropTypes from 'prop-types'

const StepperContext = React.createContext()
const StepperDispatchContext = React.createContext()
const StepperOnChange = React.createContext()
const StepperAdapt = React.createContext()
const StepperActiveIdContext = React.createContext()

function stepReducer(state, { type, id }) {
  switch (type) {
    case 'REGISTER':
    case 'DESACTIVATE':
      return { ...state, [id]: false }
    case 'ACTIVATE':
      return { ...state, [id]: true }
  }
}
function useStepper() {
  const context = useContext(StepperContext)
  return context
}

function useStepperDispatch() {
  const dispatch = useContext(StepperDispatchContext)

  const register = id => dispatch({ type: 'REGISTER', id })
  const activate = id => dispatch({ type: 'ACTIVATE', id })
  const desactivate = id => dispatch({ type: 'DESACTIVATE', id })

  return {
    register,
    activate,
    desactivate,
  }
}

function useOnChange() {
  const context = useContext(StepperOnChange)
  return context
}

function useStepperAdapt() {
  const context = useContext(StepperAdapt)
  return context
}

function useActiveId() {
  const context = useContext(StepperActiveIdContext)
  return context
}

const StepperProvider = ({ children, onClick, stepperList }) => {
  const [stepList, dispatch] = useReducer(stepReducer, stepperList)
  const [activeId, setActiveId] = useState(null)
  const [nbStep, setNbStep] = useState(0)

  return (
    <StepperActiveIdContext.Provider value={[activeId, setActiveId]}>
      <StepperAdapt.Provider value={[nbStep, setNbStep]}>
        <StepperContext.Provider value={stepList}>
          <StepperOnChange.Provider value={onClick}>
            <StepperDispatchContext.Provider value={dispatch}>
              {children}
            </StepperDispatchContext.Provider>
          </StepperOnChange.Provider>
        </StepperContext.Provider>
      </StepperAdapt.Provider>
    </StepperActiveIdContext.Provider>
  )
}
StepperProvider.defaultProps = {
  children: null,
  onClick: null,
  stepperList: {},
}

StepperProvider.propTypes = {
  /**
   * Content of the StepProvider.
   */
  children: PropTypes.any,
  /**
   * retrieves the current step.
   */
  onClick: PropTypes.any,
  /*
   * list that allows the user to choose the starting step
   */
  stepperList: PropTypes.object,
}

export {
  StepperProvider,
  useActiveId,
  useStepperDispatch,
  useStepper,
  useOnChange,
  useStepperAdapt,
}
