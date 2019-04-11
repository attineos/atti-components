/* This file was generated automatically, please do not write in it. */
import React from 'react';
import StyledButtonGroup from '../styles/StyledButtonGroup';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('StyledButtonGroup renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledButtonGroup ></StyledButtonGroup>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    