/* This file was generated automatically, please do not write in it. */
import React from 'react'
import ButtonGroup from '..'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('ButtonGroup renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <ButtonGroup className="Atticomponents">Atticomponents</ButtonGroup>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
