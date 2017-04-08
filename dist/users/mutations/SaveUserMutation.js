'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n            mutation {saveUser}\n        '], ['\n            mutation {saveUser}\n        ']),
    _templateObject2 = _taggedTemplateLiteral(['\n            fragment on SaveUserPayload{\n                userEdge,\n                store { userConnection }\n            }\n        '], ['\n            fragment on SaveUserPayload{\n                userEdge,\n                store { userConnection }\n            }\n        ']);

var _reactRelay = require('react-relay');

var _reactRelay2 = _interopRequireDefault(_reactRelay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SaveUserMutation = function (_Relay$Mutation) {
    _inherits(SaveUserMutation, _Relay$Mutation);

    function SaveUserMutation() {
        _classCallCheck(this, SaveUserMutation);

        return _possibleConstructorReturn(this, (SaveUserMutation.__proto__ || Object.getPrototypeOf(SaveUserMutation)).apply(this, arguments));
    }

    _createClass(SaveUserMutation, [{
        key: 'getMutation',
        value: function getMutation() {
            console.log('SaveUserMutation getMutation');
            return _reactRelay2.default.QL(_templateObject);
        }
    }, {
        key: 'getVariables',
        value: function getVariables() {
            return this.props.user;
        }
    }, {
        key: 'getFatQuery',
        value: function getFatQuery() {
            return _reactRelay2.default.QL(_templateObject2);
        }
    }, {
        key: 'getConfigs',
        value: function getConfigs() {
            return [{
                type: 'RANGE_ADD',
                parentName: 'store',
                parentID: this.props.store.id,
                connectionName: 'userConnection',
                edgeName: 'userEdge',
                rangeBehaviors: {
                    '': 'append'
                }
            }];
        }
    }]);

    return SaveUserMutation;
}(_reactRelay2.default.Mutation);

exports.default = SaveUserMutation;
//# sourceMappingURL=SaveUserMutation.js.map