import theme from '../../src/theme'
import componentsFactory from '../../src/theme/componentsFactory.web'
import { omit } from 'lodash'
import fs from 'fs'

// Add theme constants
let fullTheme = { ...omit(theme, 'componentsFactory'), ...componentsFactory(theme) }

fs.writeFile(
  './docs/theme.md',
  '```yaml\n' + JSON.stringify(fullTheme, null, 2).replace(/\"([^(\")"]+)\":/g, '$1:') + '\n```',
  err => {
    if (err) throw err
    console.log('The file has been saved!')
  },
)
