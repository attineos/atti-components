import { css } from 'styled-components'

export function handleSize(size) {
  let textSizeRatio = 1
  const sizes = {
    small: function() {
      textSizeRatio = 2
      return textSizeRatio
    },
    medium: function() {
      textSizeRatio = 1
      return textSizeRatio
    },
    large: function() {
      textSizeRatio = 0.5
      return textSizeRatio
    },
  }
  textSizeRatio = sizes[size]
  return textSizeRatio
}

const avatarSize = ({ props }) => {
  // defines avatar component size
  const textSizeRatio = handleSize(props.size)
  const avatarSize = css`
    font-size: calc(${({ theme }) => theme.components.avatar.fonts.fontSize} / ${textSizeRatio});
    width: calc(${({ theme }) => theme.components.avatar.sizes.size} / ${textSizeRatio});
    height: calc(${({ theme }) => theme.components.avatar.sizes.size} / ${textSizeRatio});
    line-height: calc(${({ theme }) => theme.components.avatar.sizes.size} / ${textSizeRatio});
  `
  return avatarSize
}

export default avatarSize
