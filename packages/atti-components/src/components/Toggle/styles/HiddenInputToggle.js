import styled from 'styled-components'

const HiddenInputToggle = styled.input`
  position: absolute;
  top: 0;
  left: 0px;
  opacity: 0;

  margin: 0;
  z-index: 2;

  width: ${({ variant, theme }) => theme.components.toggle.sizes[variant].widthRectangle};
  height: ${({ variant, theme }) => theme.components.toggle.sizes[variant].heightRectangle};

  cursor: pointer;
`

export default HiddenInputToggle
