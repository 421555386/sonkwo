"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _nav = _interopRequireDefault(require("../../components/nav.vue"));

var _store = _interopRequireDefault(require("../../components/store.vue"));

var _details = _interopRequireDefault(require("../../components/details.vue"));

var _headlines = _interopRequireDefault(require("../../components/headlines.vue"));

var _community = _interopRequireDefault(require("../../components/community.vue"));

var _Cart = _interopRequireDefault(require("../../components/Cart.vue"));

var _mine = _interopRequireDefault(require("../../components/mine.vue"));

var _search = _interopRequireDefault(require("../../components/search.vue"));

var _login = _interopRequireDefault(require("../../components/login.vue"));

var _register = _interopRequireDefault(require("../../components/register.vue"));

var _message = _interopRequireDefault(require("../../components/message.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = new _vueRouter["default"]({
  routes: [{
    path: '/',
    component: _nav["default"],
    children: [{
      path: '/store',
      component: _store["default"]
    }, {
      path: '/headlines',
      component: _headlines["default"]
    }, {
      path: '/community',
      component: _community["default"]
    }, {
      path: '/Cart',
      component: _Cart["default"]
    }, {
      path: '/mine',
      component: _mine["default"]
    }],
    redirect: '/store'
  }, {
    path: '/details/:name',
    name: 'details',
    component: _details["default"]
  }, {
    path: '/search',
    component: _search["default"]
  }, {
    path: '/login',
    component: _login["default"]
  }, {
    path: '/register',
    component: _register["default"]
  }, {
    path: '/message',
    component: _message["default"]
  }, {
    path: '/*',
    redirect: '/'
  }]
});

exports["default"] = _default;
var originalPush = _vueRouter["default"].prototype.push;

_vueRouter["default"].prototype.push = function push(location) {
  return originalPush.call(this, location)["catch"](function (err) {
    return err;
  });
};