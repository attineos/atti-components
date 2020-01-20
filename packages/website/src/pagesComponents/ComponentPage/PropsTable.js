import React from "react"
import { Table, Text } from "atti-components"
import { forEach, get } from "lodash"

import { Header2 } from "@components/global"

const PropsTable = ({ data }) => {
  const elements = []

  forEach(data, prop => {
    elements.push({
      required: prop.required,
      name: prop.name,
      type: prop.type.name,
      value: get(prop.defaultValue, "value", "null"),
      description: prop.description.text,
    })
  })

  return (
    <>
      <Header2>Props</Header2>
      <Table
        cols={[
          {
            name: "name",
            label: "Name",
            renderCell: (col, element) => (
              <Table.StyledTableCell>
                <Text>
                  {element[col.name]} <br /> {element.required && "required"}
                </Text>
              </Table.StyledTableCell>
            ),
          },
          { name: "type", label: "Type" },
          { name: "value", label: "Default value" },
          { name: "description", label: "Description" },
        ]}
        elements={elements}
      />
    </>
  )
}

export default PropsTable
