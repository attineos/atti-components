import styled from "styled-components";
import Label from "../../Typographies/Label";
import PropTypes from "prop-types";
import SliderStep from "./SliderStep";

const SliderIndicator = styled.span`
  ${({leftPosition, moving, theme: {components: {slider: {sliderIndicator}}}}) => `
    background-color: ${sliderIndicator.colors.backgroundColor};
    border-radius: ${sliderIndicator.borders.radius};
    height: ${sliderIndicator.sizes.height};
    width: ${sliderIndicator.sizes.width};
    left: ${`calc(${leftPosition}px - ${sliderIndicator.sizes.width.slice(0, -2) / 2}px)`};
    transition: box-shadow ${sliderIndicator.animation.animationDuration} ${sliderIndicator.animation.animationType};
    z-index: ${sliderIndicator.elevations.zIndex};
    
    ${Label}{
      display: ${moving ? 'block' : 'none'};
      // Calculate the label position by using theme sliderIndicator width minus the 'px' last 2 characters
      right: ${`calc(${sliderIndicator.sizes.width.slice(0, -2) / 2}px - ${sliderIndicator.valueLabel.width.slice(0, -2) / 2}px)`};
    }      
    
    ${moving ? `box-shadow: ${sliderIndicator.shadows.hover};` :
      `&:hover{
        box-shadow: ${sliderIndicator.shadows.moving};
      }`
    }
  `}
  cursor: pointer;
  position: relative;
  user-select: none;
`

SliderStep.propTypes = {
  leftPosition: PropTypes.number,
  moving: PropTypes.boolean,
}

export default SliderIndicator