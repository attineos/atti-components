import React, { useEffect } from "react"
import { Link } from "atti-components"
import Prism from "prismjs"

import { Header1, Header2, Pre, Text } from "@components/global"
import SEO from "@components/seo"

const GetStartedPage = () => {
  useEffect(() => {
    Prism.highlightAll()
  })

  const installDeps = `npm install react react-dom styled-components`

  return (
    <>
      <SEO title="Get started" />
      <Header1>Get started</Header1>
      <Text>
        Atti-components is a library of fully customizable React components
        based on styled-components.
      </Text>

      <Header2>Installaton</Header2>
      <Text>
        Atti-components rely on the usage of{" "}
        <code className="language-shell">react</code>,{" "}
        <code className="language-shell">react-dom</code> and{" "}
        <code className="language-shell">styled-components</code> :
      </Text>
      <Pre>
        <code className="language-shell">{installDeps}</code>
      </Pre>
      <Text>
        Then atti-components is available as a{" "}
        <Link
          href="https://www.npmjs.com/package/atti-components"
          target="_blank"
        >
          package on npm
        </Link>{" "}
        :
      </Text>
      <Pre>
        <code className="language-shell">npm install atti-components</code>
      </Pre>

      <Header2>Usage</Header2>
      <Text>
        To use the components, you should provide your application a theme.
        Based on styled-components' usage, you should wrap your components in a
        ThemeProvider component.
      </Text>
      <Text>
        In atti-components, we provide you a custom ThemeProvider and a basic
        theme that you can override.
      </Text>
      <Text>
        So the root of your application should look like something like this:
      </Text>
      <Pre>
        <code className="language-jsx">{`import { defaultTheme, Button, ThemeProvider } from 'atti-components'

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <Button>Click me</Button>
  </ThemeProvider>
)`}</code>
      </Pre>

      <Header2>Theme</Header2>
      <Text>
        As stated before, atti-components comes with some themes that you can
        use on your application : defaultTheme, attineosTheme and
        greenyBlueTheme.
      </Text>
      <Text>
        All those themes can be easily overriden. You can simply change the
        value of our theme or give a second theme to the ThemeProvider with just
        the values that you want to override :
      </Text>
      <Pre>
        <code className="language-jsx">{`import { Button, ThemeProvider, defaultTheme } from 'atti-components'

const customTheme = {
  components: {
    button: {
      colors: {
        primary: {
          background: "#FAFAFA",
          text: "blue"
        },
      }
    }
  }
}

const App = () => (
  <ThemeProvider theme={defaultTheme} otherTheme={customTheme}>
    <Button>Click me</Button> // This button will have #FAFAFA background and blue text
  </ThemeProvider>
)`}</code>
      </Pre>

      <Header2>Fonts</Header2>
      <Text>
        In the <code className="language-javascript">defaultTheme</code>, the
        font used is Roboto. As we don't want to include it for you to avoid any
        conflicts, you should include it by yourself. For example you can add
        the following in one of your CSS files:
      </Text>
      <Pre>
        <code className="language-javascript">{`@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');`}</code>
      </Pre>

      <Text>
        If you don't want to use Roboto as your default font, you can simply
        override the{" "}
        <code className="language-javascript">
          theme.fonts.fontFamily.primary
        </code>{" "}
        to any other value and include the corresponding font by yourself.
      </Text>
      <Text>
        Please note that there is also a{" "}
        <code className="language-javascript">
          theme.fonts.fontFamily.secondary
        </code>{" "}
        property but this one is not used so far. That said, it doesn't prevent
        you from overriding its value and using it.
      </Text>
    </>
  )
}

export default GetStartedPage
