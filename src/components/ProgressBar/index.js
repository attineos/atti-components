import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import StyledProgressBar from './styles/StyledProgressBar'
import { Text } from '../Typographies'

/**
 * A basic progress bar, which shows filling percentage.
 *
 */
class ProgressBar extends PureComponent {
  roundToStep = (value, step) => Math.round(value / step) * step

  render() {
    const {
      className,
      end,
      fillingOrientation,
      fillingSpeed,
      percentageLabel,
      showLabel,
      start,
      step,
      value,
    } = this.props

    const normalizedValue = Math.min(Math.max(parseFloat(value), start), end)
    const percent = this.roundToStep((normalizedValue * 100) / (end - start), step)
    const stepLabel = percentageLabel
      ? `${percent}%`
      : `${this.roundToStep(value, step) - start}/${end - start}`

    return (
      <StyledProgressBar
        className={className}
        end={end}
        fillingOrientation={fillingOrientation}
        fillingSpeed={fillingSpeed}
        percent={percent}
        start={start}
      >
        {showLabel ? <Text>{stepLabel}</Text> : null}
      </StyledProgressBar>
    )
  }
}

ProgressBar.defaultProps = {
  className: '',
  end: 100,
  fillingOrientation: 'left',
  fillingSpeed: 100,
  percentageLabel: true,
  showLabel: true,
  start: 0,
  step: 1,
  value: 0,
}

ProgressBar.propTypes = {
  /**
   * End of the progressbar.
   */
  className: PropTypes.string,

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
   * Define if the percentage label should be used.
   */
  percentageLabel: PropTypes.bool,

  /**
   * Define if the label should be visible.
   */
  showLabel: PropTypes.bool,

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
