import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Alert, Button, Label, TextArea } from '../..'

import SectionContainer from '../styles/SectionContainer'

const CustomAlert = styled(Alert)`
  padding: 0px 8px;
`

const CustomButton = styled(Button)`
  margin-top: 8px;
  padding: 4px 12px;
`

class CustomTheme extends PureComponent {
  state = {
    error: false,
    isThemeApplied: false,
    theme: null,
  }

  onChange = e => this.setState({ theme: e })

  onApply = () => {
    const { onThemeChange } = this.props
    const { theme } = this.state
    try {
      onThemeChange && onThemeChange(JSON.parse(theme))
      this.setState({ error: false, isThemeApplied: true })
    } catch (error) {
      this.setState({ error: true, isThemeApplied: false })
    }
  }

  renderAlert() {
    const { error, isThemeApplied } = this.state

    if (error) {
      return <CustomAlert type="error">Invalid JSON</CustomAlert>
    }
    if (isThemeApplied) {
      return <CustomAlert type="success">Theme was applied!</CustomAlert>
    }
    return null
  }

  render() {
    const { theme } = this.state

    return (
      <SectionContainer>
        <Label htmlFor="custom-theme">Custom theme: (JSON)</Label>
        <TextArea
          id="custom-theme"
          name="custom-theme"
          onChange={this.onChange}
          placeholder="Copy-paste your json theme here..."
          rows="9"
          value={theme}
        />
        {this.renderAlert()}
        <CustomButton onClick={this.onApply}>Apply theme</CustomButton>
      </SectionContainer>
    )
  }
}

CustomTheme.propTypes = {
  // On Theme chaneg function.
  onThemeChange: PropTypes.func.isRequired,
}

export default CustomTheme
