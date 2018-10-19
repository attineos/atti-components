/* This file was generated automatically, please do not write in it. */
import React from 'react';
import ItemLink from '../styles/ItemLink';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('ItemLink renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <ItemLink ></ItemLink>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    