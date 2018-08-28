'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _theme = require('../components/Link/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (constants) {
  return {
    link: (0, _theme2.default)(constants)
  };
};