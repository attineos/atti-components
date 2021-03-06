import styled, { css, keyframes } from 'styled-components'

// Return the real size taken by the loader
const size = css`
  ${({ theme }) => `
  width: ${theme.components.loader.size};
  height: ${theme.components.loader.size};
  `};
`

// Part of the animation
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

// Return the animation
const animation = css`
  ${rotate360} ${({ theme }) => `
    ${theme.components.loader.animations.speed}
    ${theme.components.loader.animations.type}
    infinite;
  `};
`

// Return the color
const borders = css`
  ${({ color, theme }) => `
  border:
    ${theme.components.loader.borders.thickness}
    solid
    ${theme.components.loader.colors.backgroundColor};
  border-top: ${theme.components.loader.borders.thickness} solid;
  border-top-color: ${
    theme.colors[color]
      ? theme.colors[color]
      : color || theme.components.loader.colors.colorIndicator
  };
  border-radius: ${theme.components.loader.borders.radius};
 `};
`

const StyledLoader = styled.div`
  animation: ${animation};
  ${borders};
  ${size};
`

export default StyledLoader
