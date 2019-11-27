import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import { HomePageContainer } from "./styles"
import InstallationUsage from "./InstallationUsage"
import Introduction from "./Introduction"

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePageContainer>
      <Introduction />
      <InstallationUsage />
    </HomePageContainer>
  </Layout>
)

export default HomePage
