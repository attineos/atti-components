import styled from 'styled-components'

import getSpacesAsCss from 'helpers/generators/getSpacesAsCSS'

const ToggleBox = styled.span`
  position: absolute;

  margin: ${({ variant, theme }) => getSpacesAsCss(theme.components.toggle.sizes[variant].spaces)};

  width: ${({ variant, theme }) => theme.components.toggle.sizes[variant].widthEllipse};
  height: ${({ variant, theme }) => theme.components.toggle.sizes[variant].heightEllipse};

  background: ${({ color, theme }) => theme.components.toggle.colors[color].backgroundEllipse};
  border-radius: ${({ variant, theme }) => theme.components.toggle.sizes[variant].borderRadius};
  left: 0px;
`

export default ToggleBox
