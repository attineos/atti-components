/* This file was generated automatically, please do not write in it. */
import React from 'react';
import StyledFilePicker from '../styles/StyledFilePicker';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('StyledFilePicker renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledFilePicker ></StyledFilePicker>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    