import React, { useEffect } from "react"
import { BigText, Grid, Header4, Text } from "atti-components"

import { Block, CodeBlock } from "./styles"
import Prism from "prismjs"

const InstallationUsage = () => {
  useEffect(() => {
    Prism.highlightAll()
  })

  const codeInstall = `npm install --save atti-components
// Or
yarn add atti-components`

  const codeUnstableInstall = `npm install --save atti-components@next
// Or
yarn add atti-components@next`

  const codeUsage = `import {
  Button, ThemeProvider, defaultTheme
} from 'atti-components'

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <Button>Download</Button>
  </ThemeProvider>
)`
  return (
    <Grid>
      <Block cols={[[1, 7], [1, 7], [1, 7]]}>
        <Header4 as="h2">Installation</Header4>
        <BigText as="h3">Normal installation</BigText>
        <Text>
          To use this library, simply add it as a dependency to your yarn or npm
          project by running the command:
        </Text>
        <CodeBlock>
          <code className="language-shell">{codeInstall}</code>
        </CodeBlock>
        <BigText as="h3">Unstable installation</BigText>
        <Text>
          Sometimes, we will provide a release candidate version to enable
          everyone to test upcoming features. To use it, simply run:
        </Text>
        <CodeBlock>
          <code className="language-shell">{codeUnstableInstall}</code>
        </CodeBlock>
      </Block>
      <Block cols={[[1, 7], [1, 7], [7, 13]]}>
        <Header4 as="h2">Usage</Header4>
        <Text>
          Then add the ThemeProvider, a default theme and your components:
        </Text>
        <CodeBlock>
          <code className="language-jsx">{codeUsage}</code>
        </CodeBlock>
      </Block>
    </Grid>
  )
}

export default InstallationUsage
