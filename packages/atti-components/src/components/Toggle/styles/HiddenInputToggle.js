import styled from 'styled-components'

const HiddenInputToggle = styled.input`
  position: absolute;
  top: 0;
  left: 0px;
  opacity: 0;

  margin: 0;
  z-index: 2;

  width: ${({ theme }) => theme.components.toggle.sizes.widthRectangle};
  height: ${({ theme }) => theme.components.toggle.sizes.height};

  cursor: pointer;
`

export default HiddenInputToggle
