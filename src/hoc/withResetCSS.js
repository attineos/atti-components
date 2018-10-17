import React, { Component } from 'react'

const withResetCSS = WrappedComponent => {
  class ResetCSSComponent extends Component {
    render() {
      return <WrappedComponent {...this.props} className="atti-r-css" />
    }
  }

  ResetCSSComponent.displayName = `withResetCSS(${getDisplayName(WrappedComponent)})`

  return ResetCSSComponent
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export default withResetCSS
