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
