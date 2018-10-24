/* This file was generated automatically, please do not write in it. */
import React from 'react';
import StyledPicturedAvatar from '../styles/StyledPicturedAvatar';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('StyledPicturedAvatar renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledPicturedAvatar ></StyledPicturedAvatar>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    