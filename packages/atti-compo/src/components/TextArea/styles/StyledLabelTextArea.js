import styled from 'styled-components'
import Label from '../../Label'

const StyledLabelTextArea = styled(Label)`
  margin-bottom: ${({ theme }) => theme.components.textarea.label.spaces.marginBottom};
  display: block;
`

export default StyledLabelTextArea
