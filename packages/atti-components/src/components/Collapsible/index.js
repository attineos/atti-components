import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import CollapsibleContainer from './styles/CollapsibleContainer'

const Collapsible = ({ children, open, ...rest }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const containerElem = containerRef.current
    open
      ? (containerElem.style.maxHeight = `${containerElem.scrollHeight}px`)
      : (containerElem.style.maxHeight = null)
  }, [open])

  return (
    <CollapsibleContainer {...rest} ref={containerRef}>
      {children}
    </CollapsibleContainer>
  )
}

Collapsible.defaultProps = {
  open: false,
}

Collapsible.propTypes = {
  /**
   * Content of the collapsible element.
   */
  children: PropTypes.node.isRequired,
  /**
   * Is the collapsible element open or not.
   */
  open: PropTypes.bool,
}

export default Collapsible
