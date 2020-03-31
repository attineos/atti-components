/* This file was generated automatically, please do not write in it. */
import React from 'react'
import Table from '..'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('Table renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Table
          className="Atticomponents"
          cols={true}
          name="Atticomponents"
          label="Atticomponents"
          elements={true}
          isDetailsLineHoverable={true}
          isLineHoverable={true}
          onLineClick={mock}
          renderCell={mock}
          renderDetailsLine={mock}
          renderEmptyTable={mock}
          renderHeaderCell={mock}
          renderHeaderLine={mock}
          renderLine={mock}
          renderTable={mock}
        ></Table>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
