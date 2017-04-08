'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Errors = require('./Errors');

var _Errors2 = _interopRequireDefault(_Errors);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextInput = function (_React$Component) {
    _inherits(TextInput, _React$Component);

    function TextInput() {
        _classCallCheck(this, TextInput);

        return _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).apply(this, arguments));
    }

    _createClass(TextInput, [{
        key: 'value',
        value: function value() {
            return this.field.value;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                possibleErrors = _props.possibleErrors,
                errors = _props.errors,
                label = _props.label,
                placeholder = _props.placeholder,
                type = _props.type;

            var localErrors = errors && errors.length > 0 && possibleErrors && possibleErrors.length > 0 ? errors.filter(function (error) {
                return possibleErrors.indexOf(error) >= 0;
            }) : [];
            var hasError = localErrors.length > 0;
            type = type ? type : 'text';
            placeholder = placeholder ? placeholder : label;
            return _react2.default.createElement("div", { className: (0, _classnames2.default)('form-group', { 'has-error': hasError }) }, _react2.default.createElement("label", null, label), _react2.default.createElement("input", { type: type, className: "form-control", placeholder: placeholder, ref: function ref(f) {
                    _this2.field = f;
                } }), _react2.default.createElement(_Errors2.default, { errors: localErrors }));
        }
    }]);

    return TextInput;
}(_react2.default.Component);

exports.default = TextInput;
//# sourceMappingURL=TextInput.js.map