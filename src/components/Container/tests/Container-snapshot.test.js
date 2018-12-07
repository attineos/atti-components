/* This file was generated automatically, please do not write in it. */
import React from 'react';
import Container from '..';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('Container renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Container ></Container>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    