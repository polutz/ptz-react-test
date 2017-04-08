'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AppDispatcher = require('../../AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _userConstants = require('../userConstants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ServerActions = {
    receiveUsers: function receiveUsers(users) {
        console.log('2. In User Server Actions');
        _AppDispatcher2.default.dispatch({
            actionType: _userConstants.ActionTypes.RECEIVE_USERS,
            users: users
        });
    }
};
exports.default = ServerActions;
//# sourceMappingURL=userServerActions.js.map