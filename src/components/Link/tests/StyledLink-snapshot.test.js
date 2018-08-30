/* This file was generated automatically, please do not write in it. */
import React from 'react';
import StyledLink from '../styles/StyledLink';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('StyledLink renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledLink ></StyledLink>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    