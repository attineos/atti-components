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
    const { placeholder, name } = this.props

    const { file } = this.state

    return (
      <StyledContainer>
        <StyledInput name={name} type="file" innerRef={this.setRef} onChange={this.onChangeFile} />
        <StyledFilePicker
          onClick={this.browseFile}
          onDragOver={this.allowDrop}
          onDrop={this.onDrop}
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
}

export default InputFile
