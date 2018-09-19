/* This file was generated automatically, please do not write in it. */
import React from 'react';
import Progressbar from '..';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('Progressbar renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Progressbar end={42} fillingOrientation="Atticomponents" fillingSpeed={42} percentageLabel={true} showLabel={true} start={42} step={42} ></Progressbar>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    