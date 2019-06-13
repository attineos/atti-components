/* This file was generated automatically, please do not write in it. */
import React from 'react';
import StyledBadge from '../styles/StyledBadge';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('StyledBadge renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledBadge ></StyledBadge>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    