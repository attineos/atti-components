import React from "react"
import styled from "styled-components"
import { Text } from "atti-components"

const Footer = styled("footer")`
  background-color: ${({ theme }) => theme.colors.neutral};
  margin-top: auto;
  padding: ${({ theme }) => `${theme.spaces.s2} 0`};

  ${Text} {
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
  }
`

export default Footer
