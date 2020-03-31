/* This file was generated automatically, please do not write in it. */
import React from 'react'
import StyledTableLine from '../styles/StyledTableLine'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('StyledTableLine renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledTableLine></StyledTableLine>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
