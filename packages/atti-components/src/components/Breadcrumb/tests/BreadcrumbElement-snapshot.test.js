/* This file was generated automatically, please do not write in it. */
import React from 'react'
import BreadcrumbElement from '../components/BreadcrumbElement'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('BreadcrumbElement renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <BreadcrumbElement element={{ name: 'anElement', url: 'anUrl' }}></BreadcrumbElement>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
