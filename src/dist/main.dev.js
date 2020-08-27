"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

require("./assets/css/cssreset.css");

require("./assets/css/commond.css");

require("./assets/font/iconfont.css");

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _router = _interopRequireDefault(require("./assets/js/router.js"));

var _mintUi = _interopRequireDefault(require("mint-ui"));

require("mint-ui/lib/style.css");

var _vuex = _interopRequireDefault(require("vuex"));

var _data = _interopRequireDefault(require("./assets/js/data.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

_vue["default"].use(_mintUi["default"]);

// 配置每一个实例对象都可以使用vuex语法
_vue["default"].use(_vuex["default"]);

new _vue["default"]({
  el: '#app',
  render: function render(h) {
    return h(_App["default"]);
  },
  router: _router["default"],
  store: _data["default"]
});