'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n            fragment on User {\n                displayName,\n                email,\n                imgUrl,\n                userName,\n                id\n            }\n        '], ['\n            fragment on User {\n                displayName,\n                email,\n                imgUrl,\n                userName,\n                id\n            }\n        ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRelay = require('react-relay');

var _reactRelay2 = _interopRequireDefault(_reactRelay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_React$Component) {
    _inherits(User, _React$Component);

    function User() {
        _classCallCheck(this, User);

        return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
    }

    _createClass(User, [{
        key: 'render',
        value: function render() {
            var user = this.props.user;

            return _react2.default.createElement("li", null, user.id, " ", _react2.default.createElement("br", null), user.email, " ", _react2.default.createElement("br", null), user.displayName, " ", _react2.default.createElement("br", null), user.imgUrl, " ", _react2.default.createElement("br", null), user.userName, " ", _react2.default.createElement("br", null));
        }
    }]);

    return User;
}(_react2.default.Component);

exports.default = _reactRelay2.default.createContainer(User, {
    fragments: {
        user: function user() {
            return _reactRelay2.default.QL(_templateObject);
        }
    }
});
//# sourceMappingURL=User.js.map