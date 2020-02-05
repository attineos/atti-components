import React, { useContext, useReducer } from 'react'
import PropTypes from 'prop-types'

const StepperContext = React.createContext()
const StepperDispatchContext = React.createContext()
const StepperOnChange = React.createContext()

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

const StepperProvider = ({ children, onClick }) => {
  const [stepList, dispatch] = useReducer(stepReducer, {})

  return (
    <StepperContext.Provider value={stepList}>
      <StepperOnChange.Provider value={onClick}>
        <StepperDispatchContext.Provider value={dispatch}>
          {children}
        </StepperDispatchContext.Provider>
      </StepperOnChange.Provider>
    </StepperContext.Provider>
  )
}
StepperProvider.defaultProps = {
  children: null,
  onClick: null,
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
}

export { StepperProvider, useStepperDispatch, useStepper, useOnChange }
