webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/userprofile/userprofile.js":
/*!***********************************************!*\
  !*** ./components/userprofile/userprofile.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return profile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _userheader_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userheader/header */ "./components/userprofile/userheader/header.js");
/* harmony import */ var _userinfo_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userinfo/info */ "./components/userprofile/userinfo/info.js");
/* harmony import */ var _userabout_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userabout/about */ "./components/userprofile/userabout/about.js");
/* harmony import */ var _usermemories_memories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usermemories/memories */ "./components/userprofile/usermemories/memories.js");
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/userprofile/userprofile.js";

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
  displayName: "userprofile__Outerbox",
  componentId: "pfeev8-0"
})(["display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;grid-template-rows:75px 75px 100px 300px 200px;width:100%;max-width:800px;text-align:center;"]);

var profile =
/*#__PURE__*/
function (_Component) {
  _inherits(profile, _Component);

  function profile(props) {
    var _this;

    _classCallCheck(this, profile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(profile).call(this, props));
    _this.state = {
      user: {
        firstName: 'Christian',
        lastName: 'Firmi',
        birthday: '1995-03-25',
        age: '24',
        profileImage: "../../static/images/profile/header/me.jpg",
        bannerImage: "../../static/images/profile/header/me.jpg"
      }
    };
    return _this;
  }

  _createClass(profile, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outerbox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_userheader_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
        user: this.state.user,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_userinfo_info__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_userabout_about__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_usermemories_memories__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }));
    }
  }]);

  return profile;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.755803beb1f52e6004d9.hot-update.js.map