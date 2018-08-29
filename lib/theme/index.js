"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _colors = _interopRequireDefault(require("./colors"));

var _fonts = _interopRequireDefault(require("./fonts"));

var _componentsFactory = _interopRequireDefault(require("./componentsFactory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  colors: _colors.default,
  componentsFactory: _componentsFactory.default,
  fonts: _fonts.default
};
exports.default = _default;