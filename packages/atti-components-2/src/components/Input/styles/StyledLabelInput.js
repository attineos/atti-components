import styled, { css } from 'styled-components'
import Label from '../../Label'

const spaces = css`
  margin-bottom: ${({ theme }) => theme.components.input.label.spaces.marginBottom};
`

const StyledLabelInput = styled(Label)`
  ${spaces};
  display: block;
`

export default StyledLabelInput
