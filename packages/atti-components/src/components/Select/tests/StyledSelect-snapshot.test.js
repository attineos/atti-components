/* This file was generated automatically, please do not write in it. */
import React from 'react';
import StyledSelect from '../styles/StyledSelect';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('StyledSelect renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledSelect ></StyledSelect>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    