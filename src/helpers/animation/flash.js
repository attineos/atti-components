import { css, keyframes } from 'styled-components'
import { defaultTheme as theme } from '../../themes'

const flashKeyframes = keyframes`
  0% {
    opacity: ${theme.opacities.o10};
  }
  100% {
    opacity: ${theme.opacities.o0};
  }
`

const flash = css`
  &:after {
    animation: ${flashKeyframes} ${theme.animations.duration.d4} ${theme.animations.type.easeInOut};
    background-color: rgba(255, 255, 255, ${theme.opacities.o2});
    height: ${theme.spaces.full};
    width: ${theme.spaces.full};
  }
`

export { flash }
