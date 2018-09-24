/* This file was generated automatically, please do not write in it. */
import React from 'react';
import StyledLabelInput from '../styles/StyledLabelInput';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('StyledLabelInput renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledLabelInput ></StyledLabelInput>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    