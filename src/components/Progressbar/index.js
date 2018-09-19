import React from 'react'
import PropTypes from 'prop-types'
import StyledProgressbar from './styles/StyledProgressbar'
import Text from '../Text'

/**
 * A basic progress bar, that show filling percentage.
 *
 * @version 0.1
 * @author Pierre Lachèvre
 */
const Progressbar = ({
  start,
  end,
  step,
  showLabel,
  percentageLabel,
  fillingSpeed,
  fillingOrientation,
}) => {
  const percent = step / (end - start)

  const stepLabel = percentageLabel
    ? `${((step - start) * (end - start)) / 100}%`
    : `${step - start}/${end - start}`

  return (
    <StyledProgressbar
      end={end}
      fillingOrientation={fillingOrientation}
      fillingSpeed={fillingSpeed}
      percent={percent}
      start={start}
    >
      {showLabel ? <Text className="Text">{stepLabel}</Text> : null}
    </StyledProgressbar>
  )
}

Progressbar.defaultProps = {
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
   * End of the progressbar (percent).
   */
  end: PropTypes.number,

  /**
   * Tells how the progressbar will be filled.
   */
  fillingOrientation: PropTypes.string,

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
   * Beginning of the progressbar (percent).
   */
  start: PropTypes.number,

  /**
   * Incremental step (percent).
   */
  step: PropTypes.number,
}

export default Progressbar
