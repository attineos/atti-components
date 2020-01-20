import styled from 'styled-components'

const HiddenInputToggle = styled.input`
  position: absolute;
  top: 0;
  left: 0px;
  opacity: 0;

  margin: 0;
  z-index: 2;

  width: ${({ sized, theme }) => theme.components.toggle.sizes[sized].widthRectangle};
  height: ${({ sized, theme }) => theme.components.toggle.sizes[sized].heightRectangle};

  cursor: pointer;
`

export default HiddenInputToggle
