/* global document */
import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  StyledInputPopdownContainer,
  StyledInputPopdown,
  StyledInputPopdownEnhancerContainer,
} from './styles.js'

/**
 * Enhance any input with a dropdown on focus
 */
const InputPopdown = ({ className, children, enhancer }) => {
  const componentRef = useRef()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = e => {
      if (isOpen) {
        if (!componentRef.current.contains(e.target)) {
          setIsOpen(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    <StyledInputPopdownContainer
      className={className}
      onFocus={() => setIsOpen(true)}
      ref={componentRef}
    >
      {children}
      <StyledInputPopdown isOpen={isOpen}>
        <StyledInputPopdownEnhancerContainer>{enhancer()}</StyledInputPopdownEnhancerContainer>
      </StyledInputPopdown>
    </StyledInputPopdownContainer>
  )
}

InputPopdown.defaultProps = {
  className: '',
}

InputPopdown.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  enhancer: PropTypes.func.isRequired,
}

/** @component */
export default styled(InputPopdown)``