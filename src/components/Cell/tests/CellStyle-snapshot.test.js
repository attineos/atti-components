/* This file was generated automatically, please do not write in it. */
import React from 'react';
import CellStyle from '../styles/CellStyle';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('CellStyle renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <CellStyle ></CellStyle>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    