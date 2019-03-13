import { css, keyframes } from 'styled-components'
import { defaultTheme as theme } from '../../themes'

/**
 * Diagonal
 */

const slideDiagonalKeyframes = keyframes`
  0% {
    opacity: ${theme.opacities.o10};
    height: 0%;
    transform: rotate(45deg) scale3d(0.1, 0.1, 1);
  }
  100% {
    opacity: ${theme.opacities.o0};
    height: ${theme.spaces.full};
    transform: rotate(45deg) scale3d(8, 8, 1);
  }
`

const slideDiagonal = css`
  animation: ${slideDiagonalKeyframes} ${theme.animations.duration.d4}
    ${theme.animations.type.easeInOut};
  background-color: rgba(0, 0, 0, ${theme.opacities.o2});
  height: 0%;
  width: ${theme.spaces.full};
  transform: rotate(45deg);
`

const slideOpenDiag = css`
  &:after {
    ${slideDiagonal};
  }
`

/**
 * Horizontal
 */

const slideHorizontalKeyframes = keyframes`
  0% {
    opacity: ${theme.opacities.o10};
    width: 0%;
    transform: scale3d(0.1, 0.1, 1);
  }
  100% {
    opacity: ${theme.opacities.o0};
    width: ${theme.spaces.full};
    transform: scale3d(8, 8, 1);
  }
`

const slideHorizontal = css`
  animation: ${slideHorizontalKeyframes} ${theme.animations.duration.d4}
    ${theme.animations.type.easeInOut};
  background-color: rgba(0, 0, 0, ${theme.opacities.o2});
  height: ${theme.spaces.full};
  width: 0%;
`

const slideOpenHorizontal = css`
  &:after {
    ${slideHorizontal};
  }
`

const slideLeft = css`
  &:after {
    ${slideHorizontal};
    left: 0;
  }
`

const slideRight = css`
  &:after {
    ${slideHorizontal};
    right: 0;
  }
`

/**
 * Vertical
 */

const slideVerticalKeyframes = keyframes`
  0% {
    opacity: ${theme.opacities.o10};
    height: 0%;
    transform: scale3d(0.1, 0.1, 1);
  }
  100% {
    opacity: ${theme.opacities.o0};
    height: ${theme.spaces.full};
    transform: scale3d(8, 8, 1);
  }
`

const slideVertical = css`
  animation: ${slideVerticalKeyframes} ${theme.animations.duration.d4}
    ${theme.animations.type.easeInOut};
  background-color: rgba(0, 0, 0, ${theme.opacities.o2});
  height: 0%;
  width: ${theme.spaces.full};
`

const slideOpenVertical = css`
  &:after {
    ${slideVertical};
  }
`

const slideBottom = css`
  align-items: flex-end;
  &:after {
    ${slideVertical};
    bottom: 0;
  }
`
const slideTop = css`
  align-items: flex-end;
  &:after {
    ${slideVertical};
    top: 0;
  }
`

export {
  slideBottom,
  slideLeft,
  slideOpenDiag,
  slideOpenHorizontal,
  slideOpenVertical,
  slideRight,
  slideTop,
}
