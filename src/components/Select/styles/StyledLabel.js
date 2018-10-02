import styled, { css } from 'styled-components'
import Label from '../../Label'

const spaces = css`
  margin-bottom: ${({ theme }) => theme.components.select.label.spaces.marginBottom};
`

const StyledLabel = styled(Label)`
  ${spaces};
  display: block;
`

export default StyledLabel
