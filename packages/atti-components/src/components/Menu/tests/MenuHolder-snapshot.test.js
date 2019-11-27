/* This file was generated automatically, please do not write in it. */
import React from 'react'
import MenuHolder from '../styles/MenuHolder'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('MenuHolder renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <MenuHolder></MenuHolder>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
