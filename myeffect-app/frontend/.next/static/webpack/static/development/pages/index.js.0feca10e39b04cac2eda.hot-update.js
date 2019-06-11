webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/userprofile/userchallenges/challengescards.js":
/*!******************************************************************!*\
  !*** ./components/userprofile/userchallenges/challengescards.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return challengescards; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _challengescard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./challengescard */ "./components/userprofile/userchallenges/challengescard.js");
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/userprofile/userchallenges/challengescards.js";

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





var Outerbox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "challengescards__Outerbox",
  componentId: "sc-41hfav-0"
})(["display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto;grid-gap:25px 65px;"]);

var challengescards =
/*#__PURE__*/
function (_Component) {
  _inherits(challengescards, _Component);

  function challengescards() {
    _classCallCheck(this, challengescards);

    return _possibleConstructorReturn(this, _getPrototypeOf(challengescards).apply(this, arguments));
  }

  _createClass(challengescards, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outerbox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, this.props.challenges.map(function (challenge) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_challengescard__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
          key: challenge.id
        }, challenge, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }));
      }));
    }
  }]);

  return challengescards;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(challengescards, "defaultProps", {
  challenges: [{
    id: uuid_v4__WEBPACK_IMPORTED_MODULE_2___default()(),
    points: '1400',
    name: 'Let Youth be Youth',
    host: 'Miley Cyrus',
    desc: 'Refer a friend, let\' build a community of Leaders!',
    icon: '../../../static/images/profile/challenges/icon/ClimateAction.svg'
  }, {
    id: uuid_v4__WEBPACK_IMPORTED_MODULE_2___default()(),
    points: '1047',
    name: 'MyEffect Challenge',
    host: 'Kelly Lovell',
    desc: 'Promote and tech code!',
    icon: '../../../static/images/profile/challenges/icon/LifeonLand.svg'
  }, {
    id: uuid_v4__WEBPACK_IMPORTED_MODULE_2___default()(),
    points: '897',
    name: 'Code Movement',
    host: 'Karlie Kloss',
    desc: 'Coordinate with an inner city arts project with your friends. Safe creative spaces',
    icon: '../../../static/images/profile/challenges/icon/LifeonLand.svg'
  }, {
    id: uuid_v4__WEBPACK_IMPORTED_MODULE_2___default()(),
    points: '397',
    name: 'Code Movement2',
    host: 'Tom Tiddles',
    desc: 'Organize groups and collect as many canned and dry items to help support people affected by Huricane Tim!',
    icon: '../../../static/images/profile/challenges/icon/ClimateAction.svg'
  }]
});



/***/ })

})
//# sourceMappingURL=index.js.0feca10e39b04cac2eda.hot-update.js.map