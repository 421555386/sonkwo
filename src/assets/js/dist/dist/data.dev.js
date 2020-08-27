"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 使用vuex的时候，必须引入vue
_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].data({});

exports["default"] = _default;