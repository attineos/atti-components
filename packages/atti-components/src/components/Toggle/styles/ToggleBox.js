import styled from 'styled-components'

import getSpacesAsCss from 'helpers/generators/getSpacesAsCSS'

const ToggleBox = styled.span`
  position: absolute;

  margin: ${({ sized, theme }) => getSpacesAsCss(theme.components.toggle.sizes[sized].spaces)};

  width: ${({ sized, theme }) => theme.components.toggle.sizes[sized].widthEllipse};
  height: ${({ sized, theme }) => theme.components.toggle.sizes[sized].heightEllipse};

  background: ${({ variant, theme }) => theme.components.toggle.colors[variant].backgroundEllipse};
  border-radius: ${({ sized, theme }) => theme.components.toggle.sizes[sized].borderRadius};
  left: 0px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
`

export default ToggleBox
