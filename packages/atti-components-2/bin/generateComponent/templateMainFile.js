export default componentName => `import React from 'react'
import PropTypes from 'prop-types'

class ${componentName} extends React {
  static defaultProps = {
    // To fill.
  }

  static propTypes = {
    // To fill.
  }

  state = {
    // To fill.
   }

  render() {
    return <div />
  }
}

export default ${componentName}
`
