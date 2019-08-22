/* This file was generated automatically, please do not write in it. */
import React from 'react'
import Loader from '..'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('Loader renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Loader className="Atticomponents" color="Atticomponents" variance={null}></Loader>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
