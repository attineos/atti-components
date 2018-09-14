import React from 'react'
import PropTypes from 'prop-types'

const themeColors = {
  standard: { primary: '#bdd5ea', secondary: '#577399' },
  orangeBlue: { primary: '#f29400', secondary: '#0083f2' },
  green: { primary: '#bffff1', secondary: '#379634' },
  purpleBlue: { primary: '#b68cb8', secondary: '#0a81d1' },
}

const styleWidth = { width: '100%' }
const styleCenter = { textAlign: 'center' }

const arrayOptionsValues = [
  { value: 'standard', description: 'Theme by default' },
  { value: 'orangeBlue', description: 'Theme orange-blue' },
  { value: 'green', description: 'Theme green' },
  { value: 'purpleBlue', description: 'Theme purple-blue' },
]

/**
 * This class is used to modify the theme of the style guide thanks to a select button.
 */
class ChangeThemeStyleGuide extends React.Component {
  static propTypes = {
    /**
     * The function to modify the theme.
     */
    modifyTheme: PropTypes.func.isRequired,
  }

  onChangeTheme = e => {
    const newTheme = e.target.value
    this.props.modifyTheme(themeColors[newTheme])
  }

  render() {
    return (
      <div>
        <p style={styleCenter}>Change the theme of the style guide</p>
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

export default ChangeThemeStyleGuide
