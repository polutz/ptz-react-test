'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n        fragment on Store{\n            id,\n            userConnection(first: $limit){\n                edges{\n                    node{\n                        id,\n                        ', ',\n                        errors\n                    }\n                }\n            }\n        }\n       '], ['\n        fragment on Store{\n            id,\n            userConnection(first: $limit){\n                edges{\n                    node{\n                        id,\n                        ', ',\n                        errors\n                    }\n                }\n            }\n        }\n       ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRelay = require('react-relay');

var _reactRelay2 = _interopRequireDefault(_reactRelay);

var _ptzUserDomain = require('ptz-user-domain');

var _SaveUserMutation = require('../mutations/SaveUserMutation');

var _SaveUserMutation2 = _interopRequireDefault(_SaveUserMutation);

var _User = require('./User');

var _User2 = _interopRequireDefault(_User);

var _CreateUserForm = require('./CreateUserForm');

var _CreateUserForm2 = _interopRequireDefault(_CreateUserForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserReport = function (_React$Component) {
    _inherits(UserReport, _React$Component);

    function UserReport() {
        _classCallCheck(this, UserReport);

        var _this = _possibleConstructorReturn(this, (UserReport.__proto__ || Object.getPrototypeOf(UserReport)).apply(this, arguments));

        _this.setLimit = function (e) {
            var newLimit = Number(e.target.value);
            _this.props.relay.setVariables({ limit: newLimit });
            console.log('newLimit', newLimit);
            console.log('relay', _this.props.relay);
        };
        _this.createUser = function (userArgs, cb) {
            var user = new _ptzUserDomain.User(userArgs);
            console.log('user', user);
            if (user.isValid()) _reactRelay2.default.Store.commitUpdate(new _SaveUserMutation2.default({
                user: user,
                store: _this.props.store
            }), _this.createUserCallBacks(cb));else cb(user);
        };
        return _this;
    }

    _createClass(UserReport, [{
        key: 'createUserCallBacks',
        value: function createUserCallBacks(cb) {
            return {
                onFailure: function onFailure(transaction) {
                    console.log('onFailure response', transaction);
                    cb(transaction);
                },
                onSuccess: function onSuccess(response) {
                    console.log('onSuccess response', response);
                    console.log('user response', response.saveUser.userEdge.node);
                    cb(response.saveUser.userEdge.node);
                }
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var content = this.props.store.userConnection.edges.map(function (edge) {
                return _react2.default.createElement(_User2.default, { key: edge.node.id, user: edge.node });
            });
            return _react2.default.createElement("section", null, _react2.default.createElement("h1", null, "Users"), _react2.default.createElement(_CreateUserForm2.default, { createUser: this.createUser }), _react2.default.createElement("label", { htmlFor: 'pagination-limit' }, "Showing"), _react2.default.createElement("select", { id: 'pagination-limit', onChange: this.setLimit, defaultValue: this.props.relay.variables.limit }, _react2.default.createElement("option", { value: "10" }, "10"), _react2.default.createElement("option", { value: "20" }, "20")), _react2.default.createElement("ul", null, content));
        }
    }]);

    return UserReport;
}(_react2.default.Component);

exports.default = _reactRelay2.default.createContainer(UserReport, {
    initialVariables: {
        limit: 20
    },
    fragments: {
        store: function store() {
            return _reactRelay2.default.QL(_templateObject, _User2.default.getFragment('user'));
        }
    }
});
//# sourceMappingURL=UserReport.js.map