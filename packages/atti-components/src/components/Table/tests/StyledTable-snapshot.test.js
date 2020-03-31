/* This file was generated automatically, please do not write in it. */
import React from 'react'
import StyledTable from '../styles/StyledTable'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('StyledTable renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledTable></StyledTable>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
