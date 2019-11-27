import React from "react"
import { defaultTheme, ThemeProvider } from "atti-components"

import Navigation from "../Navigation"
import {
  BehindMenu,
  Content,
  Footer,
  MainContainer,
  PageLayout,
} from "./styles"
import { Container, Text } from "atti-components"

const Layout = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <PageLayout>
      <Navigation />
      <BehindMenu />
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
