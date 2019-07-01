/* This file was generated automatically, please do not write in it. */
import React from 'react';
import CloseButton from '../styles/CloseButton';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('CloseButton renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <CloseButton ></CloseButton>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    