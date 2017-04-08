"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Errors = function Errors(_ref) {
    var errors = _ref.errors;

    var errorsList = errors ? errors.map(function (error) {
        return _react2.default.createElement("li", { key: error }, error);
    }) : [];
    return _react2.default.createElement("ul", { className: "errors" }, errorsList);
};
Errors.propTypes = {
    errors: _react2.default.PropTypes.array
};
exports.default = Errors;
//# sourceMappingURL=Errors.js.map