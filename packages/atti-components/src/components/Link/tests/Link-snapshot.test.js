/* This file was generated automatically, please do not write in it. */
import React from 'react'
import Link from '..'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('Link renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Link
          className="Atticomponents"
          href="Atticomponents"
          target="Atticomponents"
          onClick={mock}
        >
          Atticomponents
        </Link>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
