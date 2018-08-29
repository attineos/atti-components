"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _theme = _interopRequireDefault(require("../components/Link/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(constants) {
  return {
    link: (0, _theme.default)(constants)
  };
};

exports.default = _default;