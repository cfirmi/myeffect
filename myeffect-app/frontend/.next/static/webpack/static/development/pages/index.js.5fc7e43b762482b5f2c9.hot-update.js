webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/userprofile/userinfo/infotiles.js":
/*!******************************************************!*\
  !*** ./components/userprofile/userinfo/infotiles.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return infotiles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _infotile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./infotile */ "./components/userprofile/userinfo/infotile.js");
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/userprofile/userinfo/infotiles.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var infotiles =
/*#__PURE__*/
function (_Component) {
  _inherits(infotiles, _Component);

  function infotiles(props) {
    _classCallCheck(this, infotiles);

    return _possibleConstructorReturn(this, _getPrototypeOf(infotiles).call(this, props));
  }

  _createClass(infotiles, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outerbox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: '100px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), this.props.tiles.map(function (tile) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_infotile__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
          key: tile.id
        }, tile, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }));
      }));
    }
  }]);

  return infotiles;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(infotiles, "defaultProps", {
  tiles: [{
    id: uuid_v4__WEBPACK_IMPORTED_MODULE_2___default()(),
    name: "Volunteer Hours",
    hours: "112",
    icon: "../../static/images/profile/info/tiles/icon-clock.svg"
  }, {
    id: uuid_v4__WEBPACK_IMPORTED_MODULE_2___default()(),
    name: "Dollars Raised",
    hours: "112",
    icon: "../../static/images/profile/info/tiles/icon-clock.svg"
  }, {
    id: uuid_v4__WEBPACK_IMPORTED_MODULE_2___default()(),
    name: "Items Recycled",
    hours: "112",
    icon: "../../static/images/profile/info/tiles/icon-clock.svg"
  }, {
    id: uuid_v4__WEBPACK_IMPORTED_MODULE_2___default()(),
    name: "People Helped",
    hours: "112",
    icon: "../../static/images/profile/info/tiles/icon-clock.svg"
  }, {
    id: uuid_v4__WEBPACK_IMPORTED_MODULE_2___default()(),
    name: "Skills Developed",
    hours: "112",
    icon: "../../static/images/profile/info/tiles/icon-clock.svg"
  }, {
    id: uuid_v4__WEBPACK_IMPORTED_MODULE_2___default()(),
    name: "Lives Saved",
    hours: "112",
    icon: "../../static/images/profile/info/tiles/icon-clock.svg"
  }, {
    id: uuid_v4__WEBPACK_IMPORTED_MODULE_2___default()(),
    name: "Healthy Actions",
    hours: "112",
    icon: "../../static/images/profile/info/tiles/icon-clock.svg"
  }]
});


var Outerbox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "infotiles__Outerbox",
  componentId: "sc-1kxr7ju-0"
})(["grid-column:1 /-1;grid-row:1;width:110%;height:100%;display:grid;grid-template:column;grid-gap:10px;justify-content:center;overflow-y:hidden;scrollbar-width:none;"]);

/***/ })

})
//# sourceMappingURL=index.js.5fc7e43b762482b5f2c9.hot-update.js.map