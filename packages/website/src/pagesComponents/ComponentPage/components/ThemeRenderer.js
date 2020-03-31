import React from "react"
import ReactJson from "react-json-view"

import { get } from "lodash"

export default ({ name, theme }) =>
  typeof window !== "undefined" &&
  ReactJson && (
    <ReactJson
      collapsed={1}
      enableClipboard={false}
      name={`theme.${name}`}
      sortKeys
      src={get(theme, name)}
    />
  )
