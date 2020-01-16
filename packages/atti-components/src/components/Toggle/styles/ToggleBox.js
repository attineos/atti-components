import styled from 'styled-components'

const ToggleBox = styled.span`
  position: absolute;
  width: ${({ theme }) => theme.components.toggle.sizes.widthEllipse};
  height: ${({ theme }) => theme.components.toggle.sizes.height};
  background: ${({ theme }) => theme.components.toggle.colors.backgroundEllipse};
  border-radius: ${({ theme }) => theme.components.toggle.sizes.borderRadius};
  cursor: pointer;
`

export default ToggleBox
