import React from "react"
import { Container, defaultTheme, Text, ThemeProvider } from "atti-components"

import { Navbar } from "./components"
import { Content, Footer, MainContainer, PageLayout } from "./styles"

const Layout = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <PageLayout>
      <Navbar />
      <Content>
        <MainContainer>{children}</MainContainer>
        <Footer>
          <Container>
            <Text>Made with ❤ with Gatsby - Hosted on Netlify</Text>
            <br />
            <Text>© {new Date().getFullYear()} - MIT licensed</Text>
          </Container>
        </Footer>
      </Content>
    </PageLayout>
  </ThemeProvider>
)

export default Layout
