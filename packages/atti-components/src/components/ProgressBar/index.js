import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import StyledProgressBar from './styles/StyledProgressBar'
import { Text } from '../Typographies'

/**
 * A basic progress bar, which shows filling percentage.
 *
 */
const ProgressBar = ({
  fillingOrientation,
  fillingSpeed,
  start,
  end,
  step,
  value,
  label,
  leftLabel,
  rightLabel,
  ...rest
}) => {
  const roundToStep = (value, step) => Math.round(value / step) * step

  const normalizedValue = Math.min(Math.max(parseFloat(value), start), end)
  const percent = roundToStep((normalizedValue * 100) / (end - start), step)

  const stepLabel = !!label ? label : `${roundToStep(value, step) - start}/${end - start}%`

  return (
    <StyledProgressBar
      end={end}
      fillingOrientation={fillingOrientation}
      fillingSpeed={fillingSpeed}
      percent={percent}
      start={start}
      {...rest}
    >
      <Text>{leftLabel}</Text>
      <Text>{stepLabel}</Text>
      <Text>{rightLabel}</Text>
    </StyledProgressBar>
  )
}

ProgressBar.defaultProps = {
  end: 100,
  fillingOrientation: 'left',
  fillingSpeed: 100,
  start: 0,
  step: 1,
  value: 0,
  leftLabel: '',
  rightLabel: '',
  label: null,
}

ProgressBar.propTypes = {
  /**
   * End of the progressbar.
   */
  end: PropTypes.number,

  /**
   * Tells how the progressbar will be filled (left, center or right).
   */
  fillingOrientation: PropTypes.oneOf(['left', 'center', 'right']),

  /**
   * Define the filling speed of the progressbar.
   */
  fillingSpeed: PropTypes.number,

  /**
   * Define the label text.
   */
  label: PropTypes.string,

  /**
   * Define the left label text.
   */
  leftLabel: PropTypes.string,

  /**
   * Define the right label.
   */
  rightLabel: PropTypes.string,

  /**
   * Beginning of the progressbar.
   */
  start: PropTypes.number,

  /**
   * Incremental step.
   */
  step: PropTypes.number,

  /**
   * Progressbar value.
   */
  value: PropTypes.number,
}

/** @component */
export default styled(ProgressBar)``
