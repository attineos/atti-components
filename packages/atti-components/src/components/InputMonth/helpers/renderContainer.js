import React from 'react'
import StyledMonthContainer from '../styles/StyledMonthContainer'

const renderContainer = (className, children) => (
  <StyledMonthContainer className={className}>{children}</StyledMonthContainer>
)

export default renderContainer
