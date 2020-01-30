import React, { useContext, useReducer } from 'react'

const StepperContext = React.createContext()

function stepReducer(state, action) {
  switch (action.type) {
    case 'REGISTER':
      return 'false' // mets les id et un bool associé à false dans un obj
    case 'ACTIVE':
      return 'true' // passe le bool de l'id en question à true
  }
}

function useStepperDispatch() {
  const dispatch = useContext(StepperContext)

  const register = id => dispatch({ type: 'REGISTER', id })
  const activate = id => dispatch({ type: 'ACTIVE', id })

  return {
    register,
    activate,
  }
}

const StepperProvider = ({ children }) => {
  const [, dispatch] = useReducer(stepReducer)

  return <StepperContext.Provider value={dispatch}>{children}</StepperContext.Provider>
}

export { StepperProvider, useStepperDispatch }
