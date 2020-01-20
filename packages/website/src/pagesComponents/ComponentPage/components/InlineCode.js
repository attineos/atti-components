import React from "react"

export default ({ children, language, ...props }) => (
  <code className={`language-${language}`} {...props}>
    {children}
  </code>
)
