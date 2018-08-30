import PropTypes from 'prop-types'

class SnapshotComponent {
  constructor(type, name, folder, props, children) {
    this.type = type
    this.folder = type === 'index' ? name : folder
    this.name = name
    this.props = props
    this.children = children
  }

  setType = type => (this.type = type)

  setFolder = folder => (this.folder = folder)

  setName = name => (this.name = name)

  setProps = props => (this.props = props)

  setChildren = children => (this.children = children)

  getType = () => this.type

  getFolder = () => this.folder

  getName = () => this.name

  getProps = () => this.props

  getChildren = () => this.children

  /*
   *  Get path to Component.
   */
  getPath = () => {
    switch (this.type) {
      case 'index':
        return '..'
        break
      default:
        return `../${this.type}/${this.name}`
        break
    }
  }

  /*
   * Get the content of the snapshot-test.
   */
  toString = () =>
    `/* This file was generated automatically, please do not write in it. */
import React from 'react';
import Link from '${this.getPath()}';
import Wrapper from '../../../styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('Link renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <${this.name} ${this.props}>${this.children}</${this.name}>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    `
}

SnapshotComponent.propTypes = {
  type: PropTypes.oneOf(['index', 'components', 'styles']),
  name: PropTypes.string,
  props: PropTypes.string,
  children: PropTypes.string,
}

export default SnapshotComponent
