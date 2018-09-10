/* This file was generated automatically, please do not write in it. */
import React from 'react';
import StyledButton from '../styles/StyledButton';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('StyledButton renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledButton >Atticomponents</StyledButton>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    