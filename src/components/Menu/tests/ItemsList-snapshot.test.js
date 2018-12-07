/* This file was generated automatically, please do not write in it. */
import React from 'react';
import ItemsList from '../styles/ItemsList';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('ItemsList renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <ItemsList ></ItemsList>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    