import styled from "styled-components";
import SmallText from "../../Typographies/SmallText";
import PropTypes from "prop-types";

const SliderStep = styled.span`
  ${({leftPosition, theme: {components: {slider: {sliderStep}}}}) => `
    background-color: ${sliderStep.colors.backgroundColor};
    height: ${sliderStep.sizes.height};
    left: ${leftPosition + '%'};
    width: ${sliderStep.sizes.width};
    z-index: ${sliderStep.elevations.zIndex};
  
    ${SmallText} {
      display: flex;
      justify-content: center;
      margin-top: ${sliderStep.title.margins.marginTop};
    }
  `}
  position: absolute;
`

SliderStep.propTypes = {
  leftPosition: PropTypes.number,
}

export default SliderStep