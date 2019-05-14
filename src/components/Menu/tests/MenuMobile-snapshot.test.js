/* This file was generated automatically, please do not write in it. */
import React from 'react';
import MenuMobile from '../components/MenuMobile';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('MenuMobile renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <MenuMobile className="Atticomponents" elements={true} renderElement={mock} selectedElement="Atticomponents" ></MenuMobile>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    