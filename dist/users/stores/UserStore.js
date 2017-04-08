'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AppDispatcher = require('../../AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _userConstants = require('../userConstants');

var _events = require('events');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _users = [];
console.log("UserStore");

var UserStore = function (_EventEmitter) {
    _inherits(UserStore, _EventEmitter);

    function UserStore() {
        _classCallCheck(this, UserStore);

        var _this = _possibleConstructorReturn(this, (UserStore.__proto__ || Object.getPrototypeOf(UserStore)).call(this));

        console.log("UserStore register");
        _AppDispatcher2.default.register(function (action) {
            console.log('UserStore action received');
            switch (action.actionType) {
                case _userConstants.ActionTypes.RECEIVE_USERS:
                    console.log('3. In Users Store');
                    _users = action.users;
                    _this.emit('change');
                    break;
                default:
                    break;
            }
        });
        return _this;
    }

    _createClass(UserStore, [{
        key: 'getAll',
        value: function getAll() {
            return _users;
        }
    }]);

    return UserStore;
}(_events.EventEmitter);

exports.default = new UserStore();
//# sourceMappingURL=UserStore.js.map