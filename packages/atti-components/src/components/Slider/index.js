import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import styled, {useTheme} from 'styled-components';
import {map, max, min, minBy} from 'lodash';
import SmallText from "../Typographies/SmallText";
import SliderRail from "./styles/SliderRail";
import SliderIndicator from "./styles/SliderIndicator";
import SliderValue from "./styles/SliderValue";
import SliderStep from "./styles/SliderStep";

const Slider = ({isStepRestricted, isValueDisplayed, onValueChange, step, range, steps}) => {
  const {components: {slider: {sliderRail}}} = useTheme()
  const [isPressed, setIsPressed] = useState(false)
  const [indicatorPos, setIndicatorPos] = useState(0)
  const [xMousePosition, setXMousePosition] = useState(0)

  const pxSliderSize = sliderRail.sizes.width.slice(0, -2)
  // Add event regarding the indicator motion, remove it when Slider is unmounted
  useEffect(() => {
    if(window && isPressed){
      window.addEventListener('mousemove', moveIndicatorEvent)
      window.addEventListener('mouseup', onMouseUp)

      return () => {
        window.removeEventListener('mousemove', moveIndicatorEvent)
        window.removeEventListener('mouseup', onMouseUp)
      }
    }
  }, [isPressed])

  useEffect(() => {
    // Use onValue changed handler passed as a prop
    onValueChange && onValueChange(getSliderValueInPercent())
  }, [indicatorPos])

  const onMouseUp = () => setIsPressed(false)

  const onMouseDown = e => {
    setIsPressed(true)
    // Use the current mouse position on click,
    // minus the current slider position so it does not start from 0
    setXMousePosition(e.clientX - indicatorPos)
  }
  // Calculate how much the mouse has moved on X axis relatively to the slider width
  const calculateIndicatorPos = (currentXMousePosition) => {
    const newPosition = max([min([currentXMousePosition - xMousePosition, pxSliderSize]), 0])
    return newPosition
  }
  // List of ignored step that will not be displayed, but still be functional
  const ignoredSteps = [0, 100]
  const renderSteps = () => map(steps, step =>
      // Avoid display of 0 and 100 steps
    !ignoredSteps.includes(step.position) && <SliderStep key={step.position} leftPosition={step.position}>
      <SmallText>{step.title}</SmallText>
    </SliderStep>
  )

  const roundNumberToStep = (num, step = 1) => {
    const inv = 1 / step;
    return Math.round(num * inv) / inv
  }
  // Use the range provided in props to adapt the value returned
  const getSliderValueInPercent = () => range[0] + roundNumberToStep((indicatorPos / pxSliderSize) * (range[1] - range[0]), step)

  const moveIndicatorEvent = e => {
    if (!isPressed) return
    let newIndicatorPos = calculateIndicatorPos(e.clientX)
    // If values are restricted to steps, find the closest one
    if (steps && isStepRestricted) {
      // Calculate the position from the closest step
      // to the indicator value if it was not restricted
      newIndicatorPos = minBy(steps, (s) => {
        const mousePos = newIndicatorPos * 100 / pxSliderSize
        return Math.abs(mousePos - s.position)
      }).position * pxSliderSize / 100
    }
    setIndicatorPos(newIndicatorPos)
  }

  return <SliderRail>
      <SliderIndicator
        onMouseDown={onMouseDown}
        leftPosition={indicatorPos}
        moving={isPressed}
      >
      {/* Round the value displayed to 1*/}
      {isValueDisplayed && <SliderValue>{Math.round(getSliderValueInPercent())}</SliderValue>}
      </SliderIndicator>
      {steps && renderSteps()}
  </SliderRail>
}

Slider.defaultProps = {
  isStepRestricted: false,
  range: [0, 100],
  step: 1,
}

Slider.propTypes = {
  isStepRestricted: PropTypes.boolean,
  onValueChange: PropTypes.func,
  // The value step used to round the output value
  step: PropTypes.number,
  // Range of possible values
  range: PropTypes.array,
  // Steps infos displayed below the slider
  steps: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    position: PropTypes.number,
  })),
}

/** @component */
export default styled(Slider)``