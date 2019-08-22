/* This file was generated automatically, please do not write in it. */
import React from 'react'
import Message from '../exposedStyles/Message'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('Message renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Message></Message>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
