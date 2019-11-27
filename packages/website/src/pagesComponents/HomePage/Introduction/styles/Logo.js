import styled from "styled-components"
import Img from "gatsby-image"
import { Image } from "atti-components"

const Logo = styled(Image.withComponent(Img))`
  width: 75px;
  height: 75px;
  margin: auto;
  margin-bottom: ${({ theme }) => theme.spaces.s2};
`

export default Logo
