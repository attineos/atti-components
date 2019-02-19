import React from 'react'
import PropTypes from 'prop-types'
import { map, get } from 'lodash'

import Select from '../components/Select'

import themes from './config/themes'
import Cookies from './helpers/Cookies'

class ThemeSelector extends React.Component {
  static propTypes = {
    onThemeChange: PropTypes.func.isRequired,
  }

  render() {
    const { onThemeChange } = this.props

    return (
      <Select
        id="themeChange"
        options={map(themes, (theme, index) => ({
          id: index,
          name: index,
        }))}
        defaultValue={Cookies.hasItem('selectedTheme') ? Cookies.getItem('selectedTheme') : null}
        onChange={e => {
          Cookies.setItem('selectedTheme', e.target.value)
          onThemeChange(get(themes, e.target.value, null))
        }}
      />
    )
  }
}

export default ThemeSelector
