/* This file was generated automatically, please do not write in it. */
import React from 'react'
import ItemsHolder from '../styles/ItemsHolder'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('ItemsHolder renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <ItemsHolder></ItemsHolder>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
