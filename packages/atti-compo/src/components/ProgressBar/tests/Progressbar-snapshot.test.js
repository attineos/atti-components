/* This file was generated automatically, please do not write in it. */
import React from 'react';
import ProgressBar from '..';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('ProgressBar renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <ProgressBar className="Atticomponents" end={42} fillingOrientation={null} fillingSpeed={42} percentageLabel={true} showLabel={true} start={42} step={42} ></ProgressBar>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    