/* This file was generated automatically, please do not write in it. */
import React from 'react';
import StyledAvatar from '../styles/StyledAvatar';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('StyledAvatar renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledAvatar ></StyledAvatar>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    