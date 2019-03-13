import { css, keyframes } from 'styled-components'
import { defaultTheme as theme } from '../../themes'

const circleGrowKeyframes = keyframes`
  0% {
    opacity: ${theme.opacities.o10};
    transform: scale3d(0.1, 0.1, 1);
  }
  100% {
    opacity: ${theme.opacities.o0};
    transform: scale3d(8, 8, 1);
  }
`

const circleGrow = css`
  &:after {
    animation: ${circleGrowKeyframes} ${theme.animations.duration.d4}
      ${theme.animations.type.easeInOut};
    background-color: rgba(0, 0, 0, ${theme.opacities.o2});
    border-radius: ${theme.borders.radius.brCircle};
    height: ${theme.spaces.s11};
    opacity: ${theme.opacities.o0};
    width: ${theme.spaces.s11};
  }
`

export { circleGrow }
