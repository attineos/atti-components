/* This file was generated automatically, please do not write in it. */
import React from 'react';
import Grid from '..';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('Grid renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Grid ></Grid>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    