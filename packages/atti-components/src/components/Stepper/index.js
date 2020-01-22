import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
// import { Text } from '../Typographies'

import StyledEllipse from './styles/StyledEllipse'
import StyledBar from './styles/StyledBar'

/**
 * A basic stepper
 */

const Stepper = () =>
  // def des propriétés
  {
    // mise en place des compos

    // Trouver une autre solution pour éviter les margins
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <StyledEllipse />
          <StyledBar />
          <StyledEllipse style={{ marginLeft: '200px' }} />
          <StyledBar style={{ marginLeft: '245px' }} />
          <StyledEllipse style={{ marginLeft: '400px' }} />
        </div>
      </div>
    )
  }
// valeur par default
Stepper.defaultProps = {}

// initilisation des propsType
Stepper.propTypes = {}

/** @component */
export default styled(Stepper)``
