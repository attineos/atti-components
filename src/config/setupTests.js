import 'raf/polyfill'
import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ThemeProvider from '../components/ThemeProvider'
import theme from '../theme'

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() })

// Shallow styled-components
const shallowWithTheme = tree => {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext()
  return shallow(tree, { context })
}

// Make Enzyme functions available in all test files without importing
global.shallow = shallow
global.render = render
global.mount = mount
global.shallowWithTheme = shallowWithTheme
