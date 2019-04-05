import React from 'react'
import PropTypes from 'prop-types'
import { map, get } from 'lodash'

import Select from '../components/Select'
import { Label } from '../components/Typography'

import themes from './config/themes'
import Cookies from './helpers/Cookies'

import SectionContainer from './styles/SectionContainer'

class ThemeSelector extends React.Component {
  static propTypes = {
    onThemeChange: PropTypes.func.isRequired,
  }

  render() {
    const { onThemeChange } = this.props

    return (
      <SectionContainer>
        <Label htmlFor="themeChange">Theme: </Label>
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
      </SectionContainer>
    )
  }
}

export default ThemeSelector
