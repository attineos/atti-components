/* This file was generated automatically, please do not write in it. */
import React from 'react'
import Breadcrumb from '..'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

it('should render Breadcrumb correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Breadcrumb separator="Atticomponents">
          <Breadcrumb.Element url="anUrl">
            anElement
          </Breadcrumb.Element>
        </Breadcrumb>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
