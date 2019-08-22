/* This file was generated automatically, please do not write in it. */
import React from 'react'
import OptionPanel from '..'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('OptionPanel renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <OptionPanel className="Atticomponents">true</OptionPanel>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
