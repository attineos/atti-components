import React from 'react'

import ThemeProvider from '../src/components/ThemeProvider'
import { defaultTheme } from '../src/themes'

export default ({ children }) => <ThemeProvider otherTheme={defaultTheme}>{children}</ThemeProvider>
