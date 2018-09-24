/* This file was generated automatically, please do not write in it. */
import React from 'react';
import StyledBreadcrumb from '../styles/StyledBreadcrumb';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('StyledBreadcrumb renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledBreadcrumb ></StyledBreadcrumb>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    