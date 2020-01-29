import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import StyledEllipse from './styles/StyledEllipse'
import StyledBar from './styles/StyledBar'
import StyledStep from './styles/StyledStep'
import StyledLabel from './styles/StyledLabel'

const StepperContext = React.createContext()
/**
 * A basic stepper
 */

const Stepper = ({ variant, id, children, value }) => {
  return (
    <StepperContext.Provider variant={variant} id={id} value={value}>
      {children}
    </StepperContext.Provider>
  )
}

Stepper.defaultProps = {
  value: null,
  variant: 'normal',
  id: null,
}

Stepper.propTypes = {
  /**
   * The variant of the stepper.
   */
  variant: PropTypes.oneOf(['number', 'checks', 'normal']),

  /**
   * The value of the stepper.
   */
  value: PropTypes.string,

  /**
   * The id of the step require.
   */
  id: PropTypes.number,
  children: PropTypes.object.isRequired,
}

Stepper.Step = StyledStep
Stepper.Label = StyledLabel
Stepper.Element = StyledEllipse
Stepper.Bar = StyledBar

/** @component */
export default styled(Stepper)``
