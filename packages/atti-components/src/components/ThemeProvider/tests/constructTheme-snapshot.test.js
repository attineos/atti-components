/* This file was generated automatically, please do not write in it. */
import React from 'react'
import constructTheme from '../helpers/constructTheme'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('constructTheme renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <constructTheme></constructTheme>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
