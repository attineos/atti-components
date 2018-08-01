'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LinkStyle = require('./styles/LinkStyle');

var _LinkStyle2 = _interopRequireDefault(_LinkStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = function Link() {
  return _react2.default.createElement(
    _LinkStyle2.default,
    { href: 'https://www.test.com' },
    'This is a link'
  );
};
exports.default = Link;