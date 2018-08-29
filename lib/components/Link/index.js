"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LinkStyle = _interopRequireDefault(require("./styles/LinkStyle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A link, nothing special for the moment.
 *
 * @version 0.2
 * @author Victor Gosse
 * @author Thomas Capet
 */
var Link = function Link(_ref) {
  var href = _ref.href,
      onClick = _ref.onClick;
  return _react.default.createElement(_LinkStyle.default, {
    href: href,
    onClick: onClick
  }, "This is a link");
};

Link.defaultProps = {
  onClick: null
};
Link.propTypes = {
  /**
   * The location of the external resource.
   */
  href: _propTypes.default.string.isRequired,

  /**
   * Gets called when the user clicks on the link.
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */
  onClick: _propTypes.default.func
};
var _default = Link;
exports.default = _default;