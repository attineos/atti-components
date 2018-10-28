import React from 'react'
import PropTypes from 'prop-types'

import StyledOption from './styles/StyledOption'

/**
 * A div which contains a text and which can be selected.
 *
 */
class Option extends React.Component {
  static defaultProps = {
    children: '',
    id: undefined,
    selected: false,
  }

  static propTypes = {
    /**
     * The content of the option.
     */
    children: PropTypes.any,
    /**
     * The id of the option.
     */
    id: PropTypes.string,
    /**
     * Whether the field is selected. False by default.
     */
    selected: PropTypes.bool,
  }

  state = {
    selected: this.props.selected || false,
  }

  toggleSelected = () => {
    this.setState(prev => ({
      selected: !prev.selected,
    }))
  }

  render() {
    const { children, id } = this.props
    const { selected } = this.state
    return (
      <StyledOption id={id} onClick={this.toggleSelected} selected={selected}>
        {children}
      </StyledOption>
    )
  }
}

export default Option
