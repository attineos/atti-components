import { css, keyframes } from 'styled-components'
import { defaultTheme as theme } from '../../themes'

const shineKeyframes = keyframes`
  0% {
    opacity: ${theme.opacities.o10};
    transform: translateX(-20%) translateY(50%) rotate(-45deg);
  }
  100% {
    opacity: ${theme.opacities.o0};
    transform: translateX(400%) translateY(-20%) rotate(-45deg);
  }
`

const shine = css`
  &:after {
    animation: ${shineKeyframes} ${theme.animations.duration.d4} ${theme.animations.type.easeInOut};
    background-color: rgba(255, 255, 255, ${theme.opacities.o2});
    bottom: 0;
    height: 500%;
    left: 0;
    opacity: ${theme.opacities.o0};
    transform: translateX(-20%) translateY(50%) rotate(-45deg);
    width: 30%;
  }
`

export { shine }
