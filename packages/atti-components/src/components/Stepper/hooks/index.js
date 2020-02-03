import React, { useContext, useReducer } from 'react'
import PropTypes from 'prop-types'

const StepperContext = React.createContext()
const StepperDispatchContext = React.createContext()

function stepReducer(state, { type, id }) {
  switch (type) {
    case 'REGISTER':
      return { ...state, [id]: false }
    case 'ACTIVATE':
      return { ...state, [id]: true }
    case 'DESACTIVATE':
      return { ...state, [id]: false }
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

const StepperProvider = ({ children }) => {
  const [list, dispatch] = useReducer(stepReducer, {}) // ici pour obtenir un state

  return (
    <StepperContext.Provider value={list}>
      <StepperDispatchContext.Provider value={dispatch}>{children}</StepperDispatchContext.Provider>
    </StepperContext.Provider>
  )
}
StepperProvider.defaultProps = {
  children: null,
}

StepperProvider.propTypes = {
  children: PropTypes.any,
}

export { StepperProvider, useStepperDispatch, useStepper }
