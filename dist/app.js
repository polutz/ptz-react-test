'use strict';

var _templateObject = _taggedTemplateLiteral(['\n            query MainQuery{\n                store {\n                    ', '\n                }\n            }\n        '], ['\n            query MainQuery{\n                store {\n                    ', '\n                }\n            }\n        ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRelay = require('react-relay');

var _reactRelay2 = _interopRequireDefault(_reactRelay);

var _UserReport = require('./users/components/UserReport');

var _UserReport2 = _interopRequireDefault(_UserReport);

var _graphqlServerUrl = require('./graphqlServerUrl');

var _graphqlServerUrl2 = _interopRequireDefault(_graphqlServerUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('Hello app.tsx');
_reactRelay2.default.injectNetworkLayer(new _reactRelay2.default.DefaultNetworkLayer(_graphqlServerUrl2.default));

var HomeRoute = function (_Relay$Route) {
    _inherits(HomeRoute, _Relay$Route);

    function HomeRoute() {
        _classCallCheck(this, HomeRoute);

        return _possibleConstructorReturn(this, (HomeRoute.__proto__ || Object.getPrototypeOf(HomeRoute)).apply(this, arguments));
    }

    return HomeRoute;
}(_reactRelay2.default.Route);

HomeRoute.routeName = 'Home';
HomeRoute.queries = {
    store: function store(Component) {
        return _reactRelay2.default.QL(_templateObject, Component.getFragment('store'));
    }
};
_reactDom2.default.render(_react2.default.createElement(_reactRelay2.default.RootContainer, { Component: _UserReport2.default, route: new HomeRoute() }), document.getElementById('app'));
//# sourceMappingURL=app.js.map