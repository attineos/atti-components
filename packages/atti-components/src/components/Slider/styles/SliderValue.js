import styled from "styled-components";
import Label from "../../Typographies/Label";

const SliderValue = styled(Label)`
  position: absolute;
  ${({theme: {components: {slider: {sliderValue: {
    animationDuration,
    animationType,
    backgroundColor,
    bottom,
    color,
    height,
    width}}}}}) => `
    animation: sliderValueAnimation ${animationDuration} ${animationType};
    background-color: ${backgroundColor};
    bottom: ${bottom};
    color: ${color};
    height: ${height};
    line-height: ${height};
    width: ${width};
  `}
  border-radius: 100%;
  text-align: center;
  box-shadow: 0px 2px 2px 1px rgba(0,0,0,0.55);
  
  @keyframes sliderValueAnimation{
    0% {
      opacity: 0;
      transform: scale(0);
      box-shadow: none;
    }
    100% {
      opacity: 1;
      transform: scale(1.00);
    }
  }
`

export default SliderValue