/* This file was generated automatically, please do not write in it. */
import React from 'react';
import Item from '../styles/Item';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('Item renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Item ></Item>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    