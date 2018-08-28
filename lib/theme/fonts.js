'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash');

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
    return _extends({}, acc, _defineProperty({}, 'fw' + cur, '' + (100 + cur * 100)));
  }, {}),
  fontFamily: fontFamilyPrimary,
  lineHeight: (0, _lodash.reduce)((0, _lodash.range)(0, 20), function (acc, cur) {
    return _extends({}, acc, _defineProperty({}, 'lh' + cur, '' + (10 + cur * 2)));
  }, {})
};

exports.default = fonts;