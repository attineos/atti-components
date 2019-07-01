/* This file was generated automatically, please do not write in it. */
import React from 'react';
import StyledHorizontalInputGroup from '../styles/StyledHorizontalInputGroup';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('StyledHorizontalInputGroup renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledHorizontalInputGroup ></StyledHorizontalInputGroup>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    