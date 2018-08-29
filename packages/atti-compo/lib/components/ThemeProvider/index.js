"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ThemeProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ThemeProvider, _React$Component);

  function ThemeProvider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ThemeProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ThemeProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      /**
       * The theme which will be given to our children.
       * Only calculated once, on the construction of the component.
       */
      theme: _this.constructTheme()
      /**
       * Construct the theme by merging the theme and the otherTheme props and applying all the functions on the
       * constant part of the theme.
       */

    });

    return _this;
  }

  _createClass(ThemeProvider, [{
    key: "constructTheme",
    value: function constructTheme() {
      var _this$props = this.props,
          otherTheme = _this$props.otherTheme,
          theme = _this$props.theme; // Separate a theme into two groups : the functions and the constants part.

      var partition = function partition(theme) {
        return (0, _lodash.reduce)((0, _lodash.keys)(theme), function (acc, key) {
          var value = theme[key];
          acc[(0, _lodash.isFunction)(value) ? 'functions' : 'constants'][key] = value;
          return acc;
        }, {
          constants: {},
          functions: {}
        });
      }; // Apply the functions one after another with the constants as parameter.
      // Insert into the accumulator a value with the function key without the 'Factory' block.


      var applyFunctions = function applyFunctions(constants, functions) {
        return (0, _lodash.reduce)((0, _lodash.keys)(functions), function (acc, key) {
          acc[(0, _lodash.replace)(key, 'Factory', '')] = functions[key](constants);
          return acc;
        }, {});
      }; // Separate the theme and the otherTheme.


      var separatedTheme = partition(theme);
      var separatedOtherTheme = partition(otherTheme); // Merge the constants and the functions together.

      var _merge = (0, _lodash.merge)({}, separatedTheme, separatedOtherTheme),
          constants = _merge.constants,
          functions = _merge.functions; // Create the theme to give to our children.


      return (0, _lodash.merge)({}, // Keep the functions in case we need them in another ThemeProvider lower in the ReactDOM tree.
      functions, // Keep the constants part of the theme.
      separatedTheme.constants, // Eventually override it with the new result of the functions.
      applyFunctions(constants, functions), // Apply the overrides of otherTheme.
      separatedOtherTheme.constants);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          propTheme = _this$props2.theme;
      var theme = this.state.theme;
      return _react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme || propTheme
      }, children);
    }
  }]);

  return ThemeProvider;
}(_react.default.Component);

_defineProperty(ThemeProvider, "propTypes", {
  /**
   * The child node
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Overload a part of the theme. Will be merged to the actual theme.
   * The overload can be constants, or functions taking the constant part of the theme as parameter.
   */
  otherTheme: _propTypes.default.object,

  /**
   * The theme overloading. If not given, the theme will be taken from the context.
   * The overload can be constants, or functions taking the constant part of the theme as parameter.
   */
  theme: _propTypes.default.object
});

_defineProperty(ThemeProvider, "defaultProps", {
  otherTheme: {},
  theme: {}
});

var _default = (0, _styledComponents.withTheme)(ThemeProvider);

exports.default = _default;