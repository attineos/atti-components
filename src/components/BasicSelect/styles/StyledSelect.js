import styled, { css } from 'styled-components'
import getSpacesAsCss from 'helpers/generators/getSpacesAsCSS'
import Text from '../../Text'

const borders = css`
  border: ${({ theme }) => theme.components.select.basicSelect.borders.width} solid
    ${({ theme }) => theme.components.select.basicSelect.colors.border};
  border-radius: ${({ theme }) => theme.components.select.basicSelect.borders.radius};
`

const colors = css`
  color: ${({ theme }) => theme.components.select.basicSelect.colors.text};
  background-image:
    /* Left part of the arrow */ linear-gradient(
      45deg,
      transparent 50%,
      ${({ theme }) => theme.components.select.basicSelect.colors.arrow} 50%
    ),
    /* Right part of the arrow */
      linear-gradient(
        135deg,
        ${({ theme }) => theme.components.select.basicSelect.colors.arrow} 20%,
        transparent 50%
      ),
    /* Separator */
      linear-gradient(
        to right,
        ${({ theme }) => theme.components.select.basicSelect.colors.separator},
        ${({ theme }) => theme.components.select.basicSelect.colors.separator}
      );
  background-position:
    /* Left part of the arrow
      horizontal position = half of 75% of right padding + 1/4 of arrow width
      vertical position = 50% */ calc(
        100% -
          calc(
            75 * ${({ theme }) => theme.components.select.basicSelect.spaces.paddingRight} / 100 / 2
          ) + calc(${({ theme }) => theme.components.select.basicSelect.sizes.arrowWidth} / 4)
      )
      50%,
    /* Right part of the arrow
      horizontal position = half of 75% of right padding + 3/4 of arrow width
      vertical position = 50% */
      calc(
        100% -
          calc(
            75 * ${({ theme }) => theme.components.select.basicSelect.spaces.paddingRight} / 100 / 2
          ) + calc(3 * ${({ theme }) => theme.components.select.basicSelect.sizes.arrowWidth} / 4)
      )
      50%,
    /* Separator
      horizontal position = size of select - 75% of right padding
      vertical position = vertical padding */
      calc(
        100% -
          calc(75 * ${({ theme }) => theme.components.select.basicSelect.spaces.paddingRight} / 100)
      )
      ${({ theme }) => theme.components.select.basicSelect.spaces.paddingTop};

  background-size: ${({ theme }) => theme.components.select.basicSelect.sizes.arrowHeight}
      calc(${({ theme }) => theme.components.select.basicSelect.sizes.arrowWidth} / 2),
    ${({ theme }) => theme.components.select.basicSelect.sizes.arrowHeight}
      calc(${({ theme }) => theme.components.select.basicSelect.sizes.arrowWidth} / 2),
    /* Separator
      height = select height - 2 * select vertical padding */
      ${({ theme }) => theme.components.select.basicSelect.sizes.separatorWidth}
      calc(
        100% - calc(2 * ${({ theme }) => theme.components.select.basicSelect.spaces.paddingBottom})
      );

  background-size: ${({ multiple }) => (multiple ? '0' : '')};
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.components.select.basicSelect.colors.background};
`

const sizes = css`
  min-height: ${({ theme }) => theme.components.select.basicSelect.sizes.minHeight};

  height: ${({ theme }) => theme.components.select.basicSelect.sizes.height};
  width: ${({ theme }) => theme.components.select.basicSelect.sizes.width};
`

const StyledSelect = styled(Text.withComponent('select'))`
  ${borders};
  ${colors};
  ${sizes};

  position: relative;
  padding: ${({ theme }) => getSpacesAsCss(theme.components.select.basicSelect.spaces, 'padding')};

  // Remove default OS appearance
  appearance: none;
  &::-ms-expand {
    display: none;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.components.select.basicSelect.colors.borderFocus};
    box-shadow: ${({ theme }) => theme.components.select.basicSelect.boxShadows.boxShadowFocus};
  }
`

export default StyledSelect
