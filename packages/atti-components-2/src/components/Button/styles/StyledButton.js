import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import Text from '../../Text'

const border = css`
  border: ${({ theme }) =>
    `${theme.components.button.border.borderWidth} solid ${theme.components.button.colors.border}`}
  border-radius: ${({ theme }) => theme.components.button.border.borderRadius};
`

const colors = css`
  background-color: ${({ theme }) => theme.components.button.colors.background};
  color: ${({ theme }) => theme.components.button.colors.text};

  &:hover {
    opacity: ${({ theme }) => theme.components.button.opacities.hover};
  }
`

const spaces = css`
  padding: ${({ theme }) => theme.components.button.spaces.padding};
`

const StyledButton = styled(Text.withComponent('button'))`
  ${border};
  ${colors};
  ${spaces};
  cursor: pointer;
  box-sizing: border-box;
  user-select: none;
`

StyledButton.propTypes = {
  /**
   * Content of the component. Only text for now.
   */
  children: PropTypes.string.isRequired,
}

export default StyledButton