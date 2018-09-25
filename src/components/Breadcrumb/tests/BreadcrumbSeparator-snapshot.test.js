/* This file was generated automatically, please do not write in it. */
import React from 'react';
import BreadcrumbSeparator from '../styles/BreadcrumbSeparator';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('BreadcrumbSeparator renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <BreadcrumbSeparator ></BreadcrumbSeparator>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    