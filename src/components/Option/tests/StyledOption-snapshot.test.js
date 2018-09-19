/* This file was generated automatically, please do not write in it. */
import React from 'react';
import StyledOption from '../styles/StyledOption';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('StyledOption renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledOption ></StyledOption>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    