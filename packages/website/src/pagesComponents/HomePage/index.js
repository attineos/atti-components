import React from "react"

import SEO from "../../components/seo"
import { HomePageContainer } from "./styles"
import InstallationUsage from "./InstallationUsage"
import Introduction from "./Introduction"

const HomePage = () => (
  <>
    <SEO title="Home" />
    <HomePageContainer>
      <Introduction />
      <InstallationUsage />
    </HomePageContainer>
  </>
)

export default HomePage
