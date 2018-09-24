/* This file was generated automatically, please do not write in it. */
import React from 'react';
import Breadcrumb from '..';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('Breadcrumb renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Breadcrumb elements={[{name: 'anElement', url: 'anUrl'}]}separator="Atticomponents" ></Breadcrumb>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    