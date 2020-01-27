import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import StyledEllipse from './styles/StyledEllipse'
// import StyledBar from './styles/StyledBar'
import StyledStep from './styles/StyledStep'
import StyledLabel from './styles/StyledLabel'
import StyledStepperProvider from './styles/StyledStepperProvider'

/**
 * A basic stepper
 */
// ICI DOIT RETURN UNIQUEMENT LE CONTEXTE AVEC AU MILIEU CHILDREN !!!

const Stepper = ({ step, variant, onChange, id }) => {
  return (
    <StyledStepperProvider variant={variant} step={step} onChange={onChange}>
      <StyledStep id={id} />
      <StyledEllipse />
      <StyledLabel />
    </StyledStepperProvider>
  )
}

Stepper.defaultProps = {
  step: 1,
  value: null,
}

Stepper.propTypes = {
  step: PropTypes.number,
  variant: PropTypes.oneOf(['number', 'checks', 'normal']),
  /**
   * Gets called when the value of the stepper changes.
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */
  onChange: PropTypes.func,
  value: PropTypes.string,
}

/** @component */
export default styled(Stepper)``
