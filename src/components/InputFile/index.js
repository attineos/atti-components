// @noSnapshot
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { head } from 'lodash'
import PropTypes from 'prop-types'

import { StyledContainer, StyledFilePicker, StyledInput } from './styles'

const InputFile = ({ className, name, onChange, placeholder, variance }) => {
  const input = useRef(null)
  const [file, setFile] = useState(null)

  const onChangeFile = () => {
    const file = head(input.current.files) || {}
    setFile(file)
    onChange && onChange(file)
  }

  const onDrop = e => {
    e.preventDefault()
    const item = head(e.dataTransfer.items) || {}
    item.kind === 'file' && setFile(item.getAsFile() || {})
  }

  const browseFile = () => input && input.current.click()

  const allowDrop = e => e.preventDefault()

  return (
    <StyledContainer className={className}>
      <StyledInput name={name} type="file" ref={input} onChange={onChangeFile} />
      <StyledFilePicker
        onClick={browseFile}
        onDragOver={allowDrop}
        onDrop={onDrop}
        variance={variance}
      >
        {file ? file.name : placeholder}
      </StyledFilePicker>
    </StyledContainer>
  )
}

InputFile.defaultProps = {
  className: '',
  name: '',
  placeholder: '',
  variance: 'normal',
}

InputFile.propTypes = {
  /**
   *
   */
  className: PropTypes.string,
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
   */
  variance: PropTypes.oneOf(['primary', 'secondary', 'normal']),
}

/** @component */
export default styled(InputFile)``
