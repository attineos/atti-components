import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Cell, Grid, Header2, Header4, Text } from "atti-components"

import { Logo } from "./styles"

const Introduction = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "atti-components-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Logo fluid={data.placeholderImage.childImageSharp.fluid} />
      <Grid>
        <Cell cols={[[1, 7], [1, 7], [3, 11]]}>
          <Header2 as="h1" textAlign="center">
            atti-components
          </Header2>
          <Header4 as="h2" textAlign="center">
            Create interfaces with fully customizable React components
          </Header4>
          <Text textAlign="center">
            This library of accessible components is entirely based on
            styled-component which makes it fully customizable just by setting
            the theme. That way you can focus on the interfaces and design team
            can focus on the style guide.
          </Text>
        </Cell>
      </Grid>
    </>
  )
}

export default Introduction
