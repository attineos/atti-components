import React, { PureComponent } from 'react'
import { head } from 'lodash'
import PropTypes from 'prop-types'

import { StyledContainer, StyledFilePicker, StyledInput } from './styles'

class InputFile extends PureComponent {
  _input = {}

  state = {
    file: null,
  }

  onChangeFile = () => {
    const { onChange } = this.props
    const file = head(this._input.files) || {}
    this.setState({ file: file }, () => {
      onChange && onChange(file)
    })
  }

  onDrop = e => {
    e.preventDefault()
    const item = head(e.dataTransfer.items) || {}
    item.kind === 'file' && this.setState({ file: item.getAsFile() || {} })
  }

  setRef = ref => (this._input = ref)

  browseFile = () => this._input && this._input.click()

  allowDrop = e => e.preventDefault()

  render() {
    const { placeholder, name, variance } = this.props

    const { file } = this.state

    return (
      <StyledContainer>
        <StyledInput name={name} type="file" ref={this.setRef} onChange={this.onChangeFile} />
        <StyledFilePicker
          onClick={this.browseFile}
          onDragOver={this.allowDrop}
          onDrop={this.onDrop}
          variance={variance}
        >
          {file ? file.name : placeholder}
        </StyledFilePicker>
      </StyledContainer>
    )
  }
}

InputFile.defaultProps = {
  name: '',
  placeholder: '',
  variance: 'normal',
}

InputFile.propTypes = {
  /**
   * The name of the input file.
   */
  name: PropTypes.string,
  /**
   * The placeholder of the input file.
   */
  placeholder: PropTypes.string,
  /**
   * The function to be called when a file is selected.
   * @param: the html file object.
   */
  onChange: PropTypes.func.isRequired,

  /**
   * The type of variation to display
   * ![Native](src/images/native.png "")
   * ![Web](src/images/web.png "")
   */
  variance: PropTypes.oneOf(['primary', 'secondary', 'normal']),
}

export default InputFile
