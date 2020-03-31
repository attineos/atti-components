/* This file was generated automatically, please do not write in it. */
import React from 'react'
import MenuMobile from '../styles/MenuMobile'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('MenuMobile renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <MenuMobile></MenuMobile>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
