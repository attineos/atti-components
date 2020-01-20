import styled from "styled-components"
import Img from "gatsby-image"
import { Image } from "atti-components"

const Logo = styled(Image.withComponent(Img))`
  width: 75px;
  height: 75px;
  margin: auto;
`

export default Logo
