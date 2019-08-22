/* This file was generated automatically, please do not write in it. */
import React from 'react'
import Option from '..'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('Option renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Option className="Atticomponents" id="Atticomponents" selected={true}>
          Atticomponents
        </Option>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
