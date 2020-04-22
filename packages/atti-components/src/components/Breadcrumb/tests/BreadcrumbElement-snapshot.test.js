/* This file was generated automatically, please do not write in it. */
import React from 'react'
import BreadcrumbElement from '../components/BreadcrumbElement'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

it('should render BreadcrumbElement correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <BreadcrumbElement url='anUrl'>I'm a BreadcrumbElement</BreadcrumbElement>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
