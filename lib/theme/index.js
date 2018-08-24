'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _fonts = require('./fonts');

var _fonts2 = _interopRequireDefault(_fonts);

var _componentsFactory = require('./componentsFactory');

var _componentsFactory2 = _interopRequireDefault(_componentsFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  colors: _colors2.default,
  componentsFactory: _componentsFactory2.default,
  fonts: _fonts2.default
};