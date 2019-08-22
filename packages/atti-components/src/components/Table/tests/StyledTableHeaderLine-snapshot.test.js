/* This file was generated automatically, please do not write in it. */
import React from 'react'
import StyledTableHeaderLine from '../styles/StyledTableHeaderLine'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('StyledTableHeaderLine renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledTableHeaderLine></StyledTableHeaderLine>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
