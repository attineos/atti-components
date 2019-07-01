/* This file was generated automatically, please do not write in it. */
import React from 'react';
import StyledTableHeaderCell from '../styles/StyledTableHeaderCell';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('StyledTableHeaderCell renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledTableHeaderCell ></StyledTableHeaderCell>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    