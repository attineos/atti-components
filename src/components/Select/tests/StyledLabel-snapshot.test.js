/* This file was generated automatically, please do not write in it. */
import React from 'react';
import StyledLabel from '../styles/StyledLabel';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('StyledLabel renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledLabel ></StyledLabel>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    