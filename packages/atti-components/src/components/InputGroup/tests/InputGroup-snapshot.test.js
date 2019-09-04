/* This file was generated automatically, please do not write in it. */
import React from 'react'
import InputGroup from '..'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('InputGroup renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <InputGroup className="Atticomponents" vertical={true}>
          Atticomponents
        </InputGroup>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
