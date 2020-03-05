import styled from "styled-components";

const SliderRail = styled.div`
  ${({theme: {components: {slider: {sliderRail}}}}) => `
    background-color: ${sliderRail.colors.backgroundColor};
    border-radius: ${sliderRail.borders.radius};
    height: ${sliderRail.sizes.height};
    width: ${sliderRail.sizes.width};
  `}
  position: relative;
  display: flex;
  align-items: center;
`

export default SliderRail