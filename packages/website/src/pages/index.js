import React from "react"
import { Link } from "gatsby"

import { defaultTheme, ThemeProvider, Button } from "atti-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      <ThemeProvider theme={defaultTheme}>
        <Button>Coucou</Button>
      </ThemeProvider>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
