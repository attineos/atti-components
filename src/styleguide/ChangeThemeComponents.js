import React from 'react'
import DynamicTheme from './DynamicTheme'

const themeColors = {
  standard: { primary: '#f29400', secondary: '#0083f2' },
  grey: { primary: '#bdd5ea', secondary: '#577399' },
  green: { primary: '#bffff1', secondary: '#379634' },
  purpleBlue: { primary: '#b68cb8', secondary: '#0a81d1' },
}

const styleWidth = { width: '100%' }
const styleCenter = { textAlign: 'center' }

const arrayOptionsValues = [
  { value: 'standard', description: 'Theme by default' },
  { value: 'grey', description: 'Theme grey' },
  { value: 'green', description: 'Theme green' },
  { value: 'purpleBlue', description: 'Theme purple-blue' },
]

/**
 * This class is used to modify the theme of the style guide thanks to a select button.
 */
class ChangeThemeComponents extends React.Component {
  onChangeTheme = e => {
    const newTheme = e.target.value
    DynamicTheme.setColors('primary', themeColors[newTheme]['primary'])
    DynamicTheme.setColors('secondary', themeColors[newTheme]['secondary'])
  }

  render() {
    return (
      <div>
        <p style={styleCenter}>Change the theme of the components</p>
        <select onChange={this.onChangeTheme} style={styleWidth}>
          {arrayOptionsValues.map(elt => (
            <option value={elt['value']} key={elt['value']}>
              {elt['description']}
            </option>
          ))}
        </select>
      </div>
    )
  }
}

export default ChangeThemeComponents
