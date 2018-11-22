/* This file was generated automatically, please do not write in it. */
import React from 'react';
import GridCellStyle from '../styles/GridCellStyle';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('GridCellStyle renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <GridCellStyle ></GridCellStyle>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    