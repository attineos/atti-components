import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import StyledOption from './styles/StyledOption'

/**
 * A div which contains a text and which can be selected.
 *
 */
class Option extends React.PureComponent {
  state = {
    selected: this.props.selected,
  }

  toggleSelected = () => {
    this.setState(prev => ({
      selected: !prev.selected,
    }))
  }

  render() {
    const { children, className, id } = this.props
    const { selected } = this.state
    return (
      <StyledOption className={className} id={id} onClick={this.toggleSelected} selected={selected}>
        {children}
      </StyledOption>
    )
  }
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
