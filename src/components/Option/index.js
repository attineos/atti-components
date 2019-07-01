import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import StyledOption from './styles/StyledOption'

/**
 * A div which contains a text and which can be selected.
 *
 */
const Option = ({ children, className, id, selected: propsSelected }) => {
  const [selected, setSelected] = useState(propsSelected)

  return (
    <StyledOption
      className={className}
      id={id}
      onClick={() => setSelected(!selected)}
      selected={selected}
    >
      {children}
    </StyledOption>
  )
}

Option.defaultProps = {
  children: '',
  className: '',
  id: null,
  selected: false,
}

Option.propTypes = {
  /**
   * The content of the Option.
   */
  children: PropTypes.any,
  /**
   * The classes of the Option.
   */
  className: PropTypes.string,
  /**
   * The id of the Option.
   */
  id: PropTypes.string,
  /**
   * Whether the field is selected. False by default.
   */
  selected: PropTypes.bool,
}

/** @component */
export default styled(Option)``
