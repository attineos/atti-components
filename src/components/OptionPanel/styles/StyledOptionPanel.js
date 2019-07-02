import styled, { css } from 'styled-components'
import StyledOption from '../../Option/styles/StyledOption'

const borders = css`
  & > ${StyledOption} + ${StyledOption} {
    border-top: 0;
  }
`

const spaces = css`
  padding: ${({ theme }) => theme.components.optionPanel.spaces.padding};
`

const StyledOptionPanel = styled.div`
  ${borders};
  ${spaces};
`

export default StyledOptionPanel