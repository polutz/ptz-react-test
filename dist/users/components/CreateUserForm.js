'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ptzUserDomain = require('ptz-user-domain');

var _Errors = require('../../core/components/Errors');

var _Errors2 = _interopRequireDefault(_Errors);

var _TextInput = require('../../core/components/TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateUserForm = function (_React$Component) {
    _inherits(CreateUserForm, _React$Component);

    function CreateUserForm() {
        _classCallCheck(this, CreateUserForm);

        var _this = _possibleConstructorReturn(this, (CreateUserForm.__proto__ || Object.getPrototypeOf(CreateUserForm)).apply(this, arguments));

        _this.createUserCallBack = function (user) {
            console.log('createUserCallBack', user);
            _this.setState({ user: user });
        };
        _this.handleSubmit = function (e) {
            e.preventDefault();
            console.log('createUserSubmit e', e);
            var userArgs = {
                displayName: _this.refs.displayName['value'](),
                email: _this.refs.email['value'](),
                password: _this.refs.password['value'](),
                userName: _this.refs.userName['value']()
            };
            console.log('userArgs', userArgs);
            _this.props.createUser(userArgs, _this.createUserCallBack);
        };
        return _this;
    }

    _createClass(CreateUserForm, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var errors = this.state && this.state.user ? this.state.user.errors : [];
            return _react2.default.createElement("section", null, _react2.default.createElement("form", { onSubmit: this.handleSubmit }, _react2.default.createElement("fieldset", null, _react2.default.createElement("legend", null, "Create User"), _react2.default.createElement(_TextInput2.default, { label: "Display Name", ref: function ref(f) {
                    return _this2.refs.displayName = f;
                }, possibleErrors: _ptzUserDomain.User.displayNameErrors, errors: errors }), _react2.default.createElement(_TextInput2.default, { label: "User Name", ref: function ref(f) {
                    return _this2.refs.userName = f;
                }, possibleErrors: _ptzUserDomain.User.userNameErrors, errors: errors }), _react2.default.createElement(_TextInput2.default, { label: "E-mail", ref: function ref(f) {
                    return _this2.refs.email = f;
                }, possibleErrors: _ptzUserDomain.User.emailErrors, errors: errors }), _react2.default.createElement(_TextInput2.default, { label: "Password", type: "password", ref: function ref(f) {
                    return _this2.refs.password = f;
                }, possibleErrors: _ptzUserDomain.User.passwordErrors, errors: errors }), _react2.default.createElement("button", { type: "submit" }, "Create User"), _react2.default.createElement(_Errors2.default, { errors: errors }))));
        }
    }]);

    return CreateUserForm;
}(_react2.default.Component);

exports.default = CreateUserForm;

CreateUserForm.propTypes = {
    createUser: _react2.default.PropTypes.func
};
//# sourceMappingURL=CreateUserForm.js.map