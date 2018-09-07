/* This file was generated automatically, please do not write in it. */
import React from 'react';
import StyledMenu from '../styles/StyledMenu';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('StyledMenu renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledMenu ></StyledMenu>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    