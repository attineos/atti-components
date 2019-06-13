/* This file was generated automatically, please do not write in it. */
import React from 'react';
import Cell from '..';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('Cell renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Cell className="Atticomponents" cols={new Array()} ><div/></Cell>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    