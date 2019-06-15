import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { BubbleBottom, BubbleLeft, BubbleRight, BubbleTop } from '.'
import { positionType } from '../types'

const positionBubbleStyle = ({ position = 'top' }) => {
  switch (position) {
    case 'bottom':
      return BubbleBottom
    case 'left':
      return BubbleLeft
    case 'right':
      return BubbleRight
    case 'top':
      return BubbleTop
    default:
      return BubbleTop
  }
}

const getTextPosition = ({ position = 'top' }) => {
  switch (position) {
    case 'bottom':
    case 'top':
      return 'center'
    case 'left':
      return 'right'
    case 'right':
      return 'left'
    default:
      return 'center'
  }
}

const baseBubbleStyle = ({ theme, zIndex = '10' }) => {
  const { spaces = {} } = theme.components.tooltip

  return css`
    max-width: ${spaces.maxWidth};
    min-width: ${spaces.minWidth};
    position: absolute;
    text-align: ${getTextPosition};
    z-index: ${zIndex};
    &::after {
      content: '';
      position: absolute;
    }
  `
}

const animationStyle = ({ showTooltip, theme }) => {
  const { animations = {} } = theme.components.tooltip
  const { opacityEnd, opacityStart, speed } = animations

  return css`
    opacity: ${showTooltip ? opacityEnd : opacityStart};
    transition: opacity ${speed};
  `
}

const Bubble = styled('div')`
  ${animationStyle}
  ${baseBubbleStyle}
  ${positionBubbleStyle}
`

Bubble.defaultProps = {
  position: 'top',
  showTooltip: false,
  zIndex: '10',
}

Bubble.propTypes = {
  /* The position of the tooltip's bubble around the children. */
  position: positionType,
  /* Show the tooltip ? */
  showTooltip: PropTypes.bool,
  /* z-index of the tooltip. Defaults to 10. */
  zIndex: PropTypes.string,
}

export default Bubble
