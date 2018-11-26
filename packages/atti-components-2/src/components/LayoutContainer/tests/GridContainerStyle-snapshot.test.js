/* This file was generated automatically, please do not write in it. */
import React from 'react';
import GridContainerStyle from '../styles/GridContainerStyle';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('GridContainerStyle renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <GridContainerStyle ></GridContainerStyle>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    