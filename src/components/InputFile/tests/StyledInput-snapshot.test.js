/* This file was generated automatically, please do not write in it. */
import React from 'react';
import StyledInput from '../styles/StyledInput';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('StyledInput renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledInput ></StyledInput>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    