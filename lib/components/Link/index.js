'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LinkStyle = require('./styles/LinkStyle');

var _LinkStyle2 = _interopRequireDefault(_LinkStyle);

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
  return _react2.default.createElement(
    _LinkStyle2.default,
    { href: href, onClick: onClick },
    'This is a link'
  );
};

Link.defaultProps = {
  onClick: null
};

Link.propTypes = {
  /**
   * The location of the external resource.
   */
  href: _propTypes2.default.string.isRequired,
  /**
   * Gets called when the user clicks on the link.
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */
  onClick: _propTypes2.default.func
};

exports.default = Link;