'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n  text-decoration: none;\n\n  &:hover {\n    text-decoration: underline;\n  }\n'], ['\n  color: ', ';\n  text-decoration: none;\n\n  &:hover {\n    text-decoration: underline;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LinkStyle = _styledComponents2.default.a(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.components.link.colors.text;
});

exports.default = LinkStyle;