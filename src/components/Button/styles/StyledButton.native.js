import styled from 'styled-components'
// eslint-disable-next-line
import Button from 'react-native'

const StyledButton = styled.Button.attrs({
  color: props => props.theme.components.button.colors.background,
})``

export default StyledButton
