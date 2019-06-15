// @noSnapshot
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { positionType } from './types'
import { Bubble, ChildrenContainer, Container } from './styles'
import Message from './exposedStyles/Message'

class Tooltip extends PureComponent {
  state = {
    showTooltip: false,
  }

  onShowTooltip = () => this.setState({ showTooltip: true })

  onHideTooltip = () => this.setState({ showTooltip: false })

  render() {
    const { children, message, position } = this.props
    const { showTooltip } = this.state

    return (
      <Container onMouseLeave={this.onHideTooltip}>
        <Bubble position={position} showTooltip={showTooltip}>
          <Message>{message}</Message>
        </Bubble>
        <ChildrenContainer onMouseOver={this.onShowTooltip} onFocus={this.onShowTooltip}>
          {children}
        </ChildrenContainer>
      </Container>
    )
  }
}

Tooltip.defaultProps = {
  position: 'top',
}

Tooltip.propTypes = {
  /* The children on which the tooltip will be displayed over. */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  /* The message to display in the tooltip. */
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  /* The position of the tooltip around the children. */
  position: positionType,
}

/*
 * You can have access to this styled-component to use it as a CSS selector,
 * in case you want to change the inner display of the tooltip's message.
 */
Tooltip.Message = Message

/** @component */
export default styled(Tooltip)``
