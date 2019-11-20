/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { defaultTheme, ThemeProvider } from "atti-components"

import Navigation from "../Navigation"
import { BehindMenu, Content, PageLayout } from "./styles"
import { Container } from "atti-components"

const Layout = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <PageLayout>
      <Navigation />
      <BehindMenu />
      <Content>
        <Container as="main">{children}</Container>
        <Container as="footer">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Container>
      </Content>
    </PageLayout>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
