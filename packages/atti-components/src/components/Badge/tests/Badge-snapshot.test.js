/* This file was generated automatically, please do not write in it. */
import React from 'react'
import Badge from '..'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('Badge renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Badge className="Atticomponents" exponent={true} variant={null}>
          <div />
        </Badge>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
