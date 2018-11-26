/* This file was generated automatically, please do not write in it. */
import React from 'react';
import RawContainerStyle from '../styles/RawContainerStyle';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('RawContainerStyle renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <RawContainerStyle ></RawContainerStyle>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    