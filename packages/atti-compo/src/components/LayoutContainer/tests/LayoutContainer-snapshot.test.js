/* This file was generated automatically, please do not write in it. */
import React from 'react';
import LayoutContainer from '..';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('LayoutContainer renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <LayoutContainer className="Atticomponents" type="CONTAINER_RAW_TYPE" ><div/></LayoutContainer>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
