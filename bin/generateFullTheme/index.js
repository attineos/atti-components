import fs from 'fs'
import constructTheme from '../../src/components/ThemeProvider/helpers/constructTheme'
import defaultTheme from '../../src/themes/defaultTheme'

// Construct the theme
const fullTheme = constructTheme({}, defaultTheme)

fs.writeFile(
  './docs/theme.md',
  '```yaml\n' + JSON.stringify(fullTheme, null, 2).replace(/\"([^(\")"]+)\":/g, '$1:') + '\n```',
  err => {
    if (err) throw err
    console.log('The file has been saved!')
  },
)
