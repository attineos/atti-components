import styled, { css } from 'styled-components'
import Text from '../../Text'

const borders = css`
  border: ${({ theme }) => theme.components.select.select.borders.width} solid
    ${({ theme }) => theme.components.select.select.colors.border};
  border-radius: ${({ theme }) => theme.components.select.select.borders.radius};
`

const colors = css`
  color: ${({ theme }) => theme.components.select.select.colors.text};
  background-image:
    /* Left part of the arrow */ linear-gradient(
      45deg,
      transparent 50%,
      ${({ theme }) => theme.components.select.select.colors.arrow} 50%
    ),
    /* Right part of the arrow */
      linear-gradient(
        135deg,
        ${({ theme }) => theme.components.select.select.colors.arrow} 20%,
        transparent 50%
      ),
    /* Separator */
      linear-gradient(
        to right,
        ${({ theme }) => theme.components.select.select.colors.separator},
        ${({ theme }) => theme.components.select.select.colors.separator}
      );
  background-position:
    /* Left part of the arrow
      horizontal position = half of 75% of right padding + 1/4 of arrow width
      vertical position = 50% */ calc(
        100% -
          calc(75 * ${({ theme }) => theme.components.select.select.spaces.paddingRight} / 100 / 2) +
          calc(${({ theme }) => theme.components.select.select.sizes.arrowWidth} / 4)
      )
      50%,
    /* Right part of the arrow
      horizontal position = half of 75% of right padding + 3/4 of arrow width
      vertical position = 50% */
      calc(
        100% -
          calc(75 * ${({ theme }) => theme.components.select.select.spaces.paddingRight} / 100 / 2) +
          calc(3 * ${({ theme }) => theme.components.select.select.sizes.arrowWidth} / 4)
      )
      50%,
    /* Separator
      horizontal position = size of select - 75% of right padding
      vertical position = vertical padding */
      calc(
        100% - calc(75 * ${({ theme }) => theme.components.select.select.spaces.paddingRight} / 100)
      )
      ${({ theme }) => theme.components.select.select.spaces.paddingHeight};

  background-size: ${({ theme }) => theme.components.select.select.sizes.arrowHeight}
      calc(${({ theme }) => theme.components.select.select.sizes.arrowWidth} / 2),
    ${({ theme }) => theme.components.select.select.sizes.arrowHeight}
      calc(${({ theme }) => theme.components.select.select.sizes.arrowWidth} / 2),
    /* Separator
      height = select height - 2 * select vertical padding */
      ${({ theme }) => theme.components.select.select.sizes.separatorWidth}
      calc(100% - calc(2 * ${({ theme }) => theme.components.select.select.spaces.paddingHeight}));

  background-size: ${({ multiple }) => (multiple ? '0' : '')};
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.components.select.select.colors.background};
`

const sizes = css`
  min-height: ${({ theme }) => theme.components.select.select.sizes.minHeight};
`

const StyledSelect = styled(Text.withComponent('select'))`
  ${borders};
  ${colors};
  ${sizes};

  padding: ${({ theme }) => theme.components.select.select.spaces.paddingHeight}
    ${({ theme }) => theme.components.select.select.spaces.paddingRight}
    ${({ theme }) => theme.components.select.select.spaces.paddingHeight}
    ${({ theme }) => theme.components.select.select.spaces.paddingLeft};
  position: relative;

  // Remove default OS appearance
  appearance: none;
  &::-ms-expand {
    display: none;
  }

  &:focus {
    border-color: ${({ theme }) => theme.components.select.select.colors.borderFocus};
    box-shadow: 0px 0px 2px 0px
      ${({ theme }) => theme.components.select.select.colors.boxShadowFocus};
  }
`

export default StyledSelect
