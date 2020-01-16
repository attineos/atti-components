import styled from 'styled-components'

const ToggleBox = styled.span`
  position: absolute;

  width: ${({ theme }) => theme.components.toggle.sizes.widthEllipse};
  height: ${({ theme }) => theme.components.toggle.sizes.height};

  background: ${({ variant, theme }) => theme.components.toggle.colors[variant].backgroundEllipse};
  border-radius: ${({ theme }) => theme.components.toggle.sizes.borderRadius};
  left: ${({ position, theme }) => theme.components.toggle.sizes[position].initial};
`
/*
fais commencer le curseur à gauche 
left:25px
*/
export default ToggleBox
