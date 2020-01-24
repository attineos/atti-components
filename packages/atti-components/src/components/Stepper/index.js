import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Text, Header3 } from '../Typographies'

import StyledEllipse from './styles/StyledEllipse'
import StyledBar from './styles/StyledBar'

/**
 * A basic stepper
 */

const Stepper = ({ lbl, step }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <StyledEllipse>
          <Header3>{step}</Header3>
          <Text>{lbl}</Text>
        </StyledEllipse>
        <StyledBar style={{ marginLeft: '70px' }} />
      </div>
    </div>
  )
}

Stepper.defaultProps = {
  step: 1,
  lbl: null,
}

Stepper.propTypes = {
  lbl: PropTypes.string,
  step: PropTypes.number,
}

/** @component */
export default styled(Stepper)``
