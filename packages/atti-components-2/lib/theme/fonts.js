"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Base fonts.
 */
var fontFamilyPrimary = 'Roboto';
var fontFamilySecondary = 'Inconsolata, Monaco, consolas, "courrier new"';
var fonts = {
  global: {
    fontFamilyPrimary: fontFamilyPrimary,
    fontFamilySecondary: fontFamilySecondary
  },
  fontSize: {
    xs: '10px',
    s: '12px',
    m: '14px',
    l: '18px',
    xl: '24px',
    xxl: '30px'
  },
  fontWeight: (0, _lodash.reduce)((0, _lodash.range)(0, 10), function (acc, cur) {
    return _objectSpread({}, acc, _defineProperty({}, "fw".concat(cur), "".concat(100 + cur * 100)));
  }, {}),
  fontFamily: fontFamilyPrimary,
  lineHeight: (0, _lodash.reduce)((0, _lodash.range)(0, 20), function (acc, cur) {
    return _objectSpread({}, acc, _defineProperty({}, "lh".concat(cur), "".concat(10 + cur * 2)));
  }, {})
};
var _default = fonts;
exports.default = _default;