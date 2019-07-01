/* This file was generated automatically, please do not write in it. */
import React from 'react';
import StyledTableCell from '../styles/StyledTableCell';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('StyledTableCell renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledTableCell ></StyledTableCell>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    