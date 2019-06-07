webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/navigation/links.js":
/*!****************************************!*\
  !*** ./components/navigation/links.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/navigation/links.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Outerbox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "links__Outerbox",
  componentId: "nid8fk-0"
})(["background:purple;width:80%;margin-left:50%;transform:translateX(-50%);"]);
var InnerBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "links__InnerBox",
  componentId: "nid8fk-1"
})(["display:flex;"]);
var NavIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "links__NavIcon",
  componentId: "nid8fk-2"
})(["background:red;height:30px;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "links__Title",
  componentId: "nid8fk-3"
})(["background:green;margin-left:20px;width:100%;"]);

var links =
/*#__PURE__*/
function (_Component) {
  _inherits(links, _Component);

  function links(props) {
    var _this;

    _classCallCheck(this, links);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(links).call(this, props));
    _this.state = {
      navItems: [{
        id: uuid_v4__WEBPACK_IMPORTED_MODULE_2___default()(),
        name: "Feed",
        icon: "../../static/images/navigation/icon-feed.svg"
      }, {
        id: uuid_v4__WEBPACK_IMPORTED_MODULE_2___default()(),
        name: "Recognition",
        icon: "../../static/images/navigation/icon-recognition.svg"
      }]
    };
    return _this;
  }

  _createClass(links, [{
    key: "renderNavItems",
    value: function renderNavItems() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, this.state.navItems.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerBox, {
          key: item.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavIcon, {
          src: item.icon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, item.name));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outerbox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, this.renderNavItems());
    }
  }]);

  return links;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (links);

/***/ })

})
//# sourceMappingURL=_app.js.8207519a97d8bc9fb3a7.hot-update.js.map