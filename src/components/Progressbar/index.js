import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import StyledProgressbar from './styles/StyledProgressbar'
import Text from '../Text'

/**
 * A basic progress bar, which shows filling percentage.
 *
 */
const Progressbar = ({
  className,
  end,
  fillingOrientation,
  fillingSpeed,
  percentageLabel,
  showLabel,
  start,
  step,
}) => {
  const percent = parseInt((step / (end - start)) * 100, 10)

  const stepLabel = percentageLabel ? `${percent}%` : `${step - start}/${end - start}`

  return (
    <StyledProgressbar
      className={className}
      end={end}
      fillingOrientation={fillingOrientation}
      fillingSpeed={fillingSpeed}
      percent={percent}
      start={start}
    >
      {showLabel ? <Text>{stepLabel}</Text> : null}
    </StyledProgressbar>
  )
}

Progressbar.defaultProps = {
  className: '',
  end: 100,
  fillingOrientation: 'left',
  fillingSpeed: 100,
  percentageLabel: true,
  showLabel: true,
  start: 0,
  step: 25,
}

Progressbar.propTypes = {
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
}

/** @component */
export default styled(React.memo(Progressbar))``
