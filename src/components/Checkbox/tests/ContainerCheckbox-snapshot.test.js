/* This file was generated automatically, please do not write in it. */
import React from 'react';
import ContainerCheckbox from '../styles/ContainerCheckbox';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('ContainerCheckbox renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <ContainerCheckbox ></ContainerCheckbox>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    