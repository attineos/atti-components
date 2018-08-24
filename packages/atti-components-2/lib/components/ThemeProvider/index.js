'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThemeProvider = function (_React$Component) {
  _inherits(ThemeProvider, _React$Component);

  function ThemeProvider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ThemeProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ThemeProvider.__proto__ || Object.getPrototypeOf(ThemeProvider)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      /**
       * The theme which will be given to our children.
       * Only calculated once, on the construction of the component.
       */
      theme: _this.constructTheme()

      /**
       * Construct the theme by merging the theme and the otherTheme props and applying all the functions on the
       * constant part of the theme.
       */
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ThemeProvider, [{
    key: 'constructTheme',
    value: function constructTheme() {
      var _props = this.props,
          otherTheme = _props.otherTheme,
          theme = _props.theme;

      // Separate a theme into two groups : the functions and the constants part.

      var partition = function partition(theme) {
        return (0, _lodash.reduce)((0, _lodash.keys)(theme), function (acc, key) {
          var value = theme[key];
          acc[(0, _lodash.isFunction)(value) ? 'functions' : 'constants'][key] = value;
          return acc;
        }, { constants: {}, functions: {} });
      };

      // Apply the functions one after another with the constants as parameter.
      // Insert into the accumulator a value with the function key without the 'Factory' block.
      var applyFunctions = function applyFunctions(constants, functions) {
        return (0, _lodash.reduce)((0, _lodash.keys)(functions), function (acc, key) {
          acc[(0, _lodash.replace)(key, 'Factory', '')] = functions[key](constants);
          return acc;
        }, {});
      };

      // Separate the theme and the otherTheme.
      var separatedTheme = partition(theme);
      var separatedOtherTheme = partition(otherTheme);
      // Merge the constants and the functions together.

      var _merge = (0, _lodash.merge)({}, separatedTheme, separatedOtherTheme),
          constants = _merge.constants,
          functions = _merge.functions;

      // Create the theme to give to our children.


      return (0, _lodash.merge)({},
      // Keep the functions in case we need them in another ThemeProvider lower in the ReactDOM tree.
      functions,
      // Keep the constants part of the theme.
      separatedTheme.constants,
      // Eventually override it with the new result of the functions.
      applyFunctions(constants, functions),
      // Apply the overrides of otherTheme.
      separatedOtherTheme.constants);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          propTheme = _props2.theme;
      var theme = this.state.theme;


      return _react2.default.createElement(
        _styledComponents.ThemeProvider,
        { theme: theme || propTheme },
        children
      );
    }
  }]);

  return ThemeProvider;
}(_react2.default.Component);

ThemeProvider.propTypes = {
  /**
   * Overload a part of the theme. Will be merged to the actual theme.
   * The overload can be constants, or functions taking the constant part of the theme as parameter.
   */
  otherTheme: _propTypes2.default.object,
  /**
   * The theme overloading. If not given, the theme will be taken from the context.
   * The overload can be constants, or functions taking the constant part of the theme as parameter.
   */
  theme: _propTypes2.default.object
};
ThemeProvider.defaultProps = {
  otherTheme: {},
  theme: {}
};
exports.default = (0, _styledComponents.withTheme)(ThemeProvider);