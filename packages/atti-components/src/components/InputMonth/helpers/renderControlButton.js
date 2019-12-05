import React from 'react'
import Button from '../../Button'

const renderControlButton = (currentDate, side, onChange) => (
  <Button onClick={onChange} variance="neutral">
    {side === 'next' ? '>' : side === 'prev' ? '<' : '*'}
  </Button>
)

export default renderControlButton
