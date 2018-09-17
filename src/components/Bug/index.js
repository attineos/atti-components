import React from 'react'
import PropTypes from 'prop-types'
/**
 * A Simple Button.
 *
 * @version 0.1
 * @author Alexandre
 */

const Bug = ({ children }) => <div>{children}</div>

Bug.defaultProps = {}

Bug.propTypes = {
  /**
   * Content of the component. Only text for now.
   */
  children: PropTypes.string.isRequired,
}

export default Bug
