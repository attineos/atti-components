To use the components, you should provide your application a theme. Based on styled-components' usage, you should wrap your components in a `ThemeProvider` component.

In atti-components, we provide you a custom `ThemeProvider` and a basic theme that you can override.

So the root of your application should look like something like this:

```php
import { defaultTheme, Button, ThemeProvider } from 'atti-components'

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <Button>Click me</Button>
  </ThemeProvider>
)
```

Note: The defaultTheme is a complete theme provided by us.

### Customization recommandations

You have two way for theming :

- Create a full theme which should be as complete as our defaultTheme

You can copy our defaultTheme to make a start, [see here.](#theme)

```php
import { Button, ThemeProvider } from 'atti-components'
import { myFullTheme } from './myFullTheme'

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <Button>Click me</Button>
  </ThemeProvider>
)
```

- Override defaultTheme with your custom theme

For one key to be overriden, object structure should match the one of our defaultTheme.

```php
import { Button, ThemeProvider } from 'atti-components'

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
)
```
