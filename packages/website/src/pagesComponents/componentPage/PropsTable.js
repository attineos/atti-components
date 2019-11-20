import React from "react"
import { Table } from "atti-components"
import { forEach, get } from "lodash"

const PropsTable = ({ data }) => {
  const elements = []

  forEach(data, prop => {
    elements.push({
      required: prop.required && "x",
      name: prop.name,
      type: prop.type.name,
      value: get(prop.defaultValue, "value", "null"),
      description: prop.description.text,
    })
  })

  return (
    <Table
      cols={[
        { name: "required", label: "Required" },
        { name: "name", label: "Name" },
        { name: "type", label: "Type" },
        { name: "value", label: "Default value" },
        { name: "description", label: "Description" },
      ]}
      elements={elements}
    />
  )
}

export default PropsTable
