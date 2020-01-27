import styled from 'styled-components'
import StyledEllipse from './StyledEllipse'

const StyledLabel = styled.p`
  position: relative;
  font-size: 18px;
  font-family: roboto;
  text-align: center;
  color: yellow;
  
  :after{
    content="✔";
  }

`

export default StyledLabel
