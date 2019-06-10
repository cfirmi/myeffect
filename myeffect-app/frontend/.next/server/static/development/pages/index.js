module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/buttons/subjective/sharebutton.js":
/*!******************************************************!*\
  !*** ./components/buttons/subjective/sharebutton.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sharebutton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
<<<<<<< HEAD
var _jsxFileName = "/Users/christian/Desktop/myeffect/myeffect-app/frontend/components/buttons/subjective/sharebutton.js";
=======
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/buttons/subjective/sharebutton.js";
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "sharebutton__Button",
  componentId: "sc-26ymi6-0"
})(["background:", ";width:90px;height:34px;border-radius:7px;font-size:15px;font-weight:200;grid-row-end:1;margin-top:50px;border:none;color:white;.navigation{background:red;}"], function (props) {
  return props.theme.lightblue;
});

var sharebutton =
/*#__PURE__*/
function (_Component) {
  _inherits(sharebutton, _Component);

  function sharebutton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, sharebutton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(sharebutton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (evt) {
      console.log("hello", evt);
    });

    return _this;
  }

  _createClass(sharebutton, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Share");
    }
  }]);

  return sharebutton;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/styles/Titles.js":
/*!*************************************!*\
  !*** ./components/styles/Titles.js ***!
  \*************************************/
/*! exports provided: Title, About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "Titles__Title",
  componentId: "sc-6eg1al-0"
})(["font-weight:200;color:", ";font-size:28px;text-align:left;line-height:23px;"], function (props) {
  return props.theme.darkGrey;
});
var About = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "Titles__About",
  componentId: "sc-6eg1al-1"
})(["font-weight:200;font-size:17px;text-align:left;line-height:20px;color:", ";margin-top:-20px;"], function (props) {
  return props.theme.darkGrey;
});


/***/ }),

/***/ "./components/userprofile/userabout/about.js":
/*!***************************************************!*\
  !*** ./components/userprofile/userabout/about.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return about; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aboutbanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutbanner */ "./components/userprofile/userabout/aboutbanner.js");
/* harmony import */ var _abouttext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abouttext */ "./components/userprofile/userabout/abouttext.js");
<<<<<<< HEAD
var _jsxFileName = "/Users/christian/Desktop/myeffect/myeffect-app/frontend/components/userprofile/userabout/about.js";
=======
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/userprofile/userabout/about.js";
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Outerbox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "about__Outerbox",
  componentId: "sc-8y4zsq-0"
})(["grid-column:1 / -1;grid-row:5;margin:0 auto;"]);

var about =
/*#__PURE__*/
function (_Component) {
  _inherits(about, _Component);

  function about() {
    _classCallCheck(this, about);

    return _possibleConstructorReturn(this, _getPrototypeOf(about).apply(this, arguments));
  }

  _createClass(about, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outerbox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_aboutbanner__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_abouttext__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }));
    }
  }]);

  return about;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/userprofile/userabout/aboutbanner.js":
/*!*********************************************************!*\
  !*** ./components/userprofile/userabout/aboutbanner.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return aboutbanner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Titles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Titles */ "./components/styles/Titles.js");
<<<<<<< HEAD
var _jsxFileName = "/Users/christian/Desktop/myeffect/myeffect-app/frontend/components/userprofile/userabout/aboutbanner.js";
=======
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/userprofile/userabout/aboutbanner.js";
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Outerbox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "aboutbanner__Outerbox",
  componentId: "arn4jg-0"
})(["display:grid;"]);

var aboutbanner =
/*#__PURE__*/
function (_Component) {
  _inherits(aboutbanner, _Component);

  function aboutbanner() {
    _classCallCheck(this, aboutbanner);

    return _possibleConstructorReturn(this, _getPrototypeOf(aboutbanner).apply(this, arguments));
  }

  _createClass(aboutbanner, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outerbox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Titles__WEBPACK_IMPORTED_MODULE_2__["Title"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "About"));
    }
  }]);

  return aboutbanner;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/userprofile/userabout/abouttext.js":
/*!*******************************************************!*\
  !*** ./components/userprofile/userabout/abouttext.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return abouttext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Titles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Titles */ "./components/styles/Titles.js");
<<<<<<< HEAD
var _jsxFileName = "/Users/christian/Desktop/myeffect/myeffect-app/frontend/components/userprofile/userabout/abouttext.js";
=======
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/userprofile/userabout/abouttext.js";
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Outerbox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "abouttext__Outerbox",
  componentId: "jfietr-0"
})(["display:grid;"]);

var abouttext =
/*#__PURE__*/
function (_Component) {
  _inherits(abouttext, _Component);

  function abouttext() {
    _classCallCheck(this, abouttext);

    return _possibleConstructorReturn(this, _getPrototypeOf(abouttext).apply(this, arguments));
  }

  _createClass(abouttext, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outerbox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Titles__WEBPACK_IMPORTED_MODULE_2__["About"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Lorem nihil fuga aliquam porro, culpa laboriosam consectetur esse corporis quas nobis? Nihil beatae maiores reprehenderit voluptates harum debitis cumque doloremque, doloribus aperiam nostrum molestias dicta? Veritatis, reiciendis accusamus quo ea nesciunt earum voluptas."));
    }
  }]);

  return abouttext;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/userprofile/useractions/actions.js":
/*!*******************************************************!*\
  !*** ./components/userprofile/useractions/actions.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return actions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actionsbanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionsbanner */ "./components/userprofile/useractions/actionsbanner.js");
/* harmony import */ var _actionscards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionscards */ "./components/userprofile/useractions/actionscards.js");
<<<<<<< HEAD
var _jsxFileName = "/Users/christian/Desktop/myeffect/myeffect-app/frontend/components/userprofile/useractions/actions.js";
=======
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/userprofile/useractions/actions.js";
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Outerbox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "actions__Outerbox",
  componentId: "ca1l5l-0"
})(["grid-column:1 / -1;grid-row:7;height:100%;"]);

var actions =
/*#__PURE__*/
function (_Component) {
  _inherits(actions, _Component);

  function actions() {
    _classCallCheck(this, actions);

    return _possibleConstructorReturn(this, _getPrototypeOf(actions).apply(this, arguments));
  }

  _createClass(actions, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outerbox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_actionsbanner__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_actionscards__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }));
    }
  }]);

  return actions;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/userprofile/useractions/actionsbanner.js":
/*!*************************************************************!*\
  !*** ./components/userprofile/useractions/actionsbanner.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return actionsbanner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Titles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Titles */ "./components/styles/Titles.js");
<<<<<<< HEAD
var _jsxFileName = "/Users/christian/Desktop/myeffect/myeffect-app/frontend/components/userprofile/useractions/actionsbanner.js";
=======
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/userprofile/useractions/actionsbanner.js";
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Outerbox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "actionsbanner__Outerbox",
  componentId: "sc-1s3r8fz-0"
})(["display:grid;grid-template-columns:1fr 1fr 1fr 100px;grid-template-rows:50px;margin-bottom:10px;"]);
var SeeMore = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "actionsbanner__SeeMore",
  componentId: "sc-1s3r8fz-1"
})(["color:", ";grid-column:-1;line-height:75px;cursor:pointer;"], function (props) {
  return props.theme.lightblue;
});

var actionsbanner =
/*#__PURE__*/
function (_Component) {
  _inherits(actionsbanner, _Component);

  function actionsbanner() {
    _classCallCheck(this, actionsbanner);

    return _possibleConstructorReturn(this, _getPrototypeOf(actionsbanner).apply(this, arguments));
  }

  _createClass(actionsbanner, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outerbox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Titles__WEBPACK_IMPORTED_MODULE_2__["Title"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Actions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SeeMore, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "See More"));
    }
  }]);

  return actionsbanner;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/userprofile/useractions/actionscard.js":
/*!***********************************************************!*\
  !*** ./components/userprofile/useractions/actionscard.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return actionscard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actionsprogresscircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionsprogresscircle */ "./components/userprofile/useractions/actionsprogresscircle.js");
<<<<<<< HEAD
var _jsxFileName = "/Users/christian/Desktop/myeffect/myeffect-app/frontend/components/userprofile/useractions/actionscard.js";
=======
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/userprofile/useractions/actionscard.js";
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var people = '../../../static/images/profile/actions/card/people.svg';
var Outerbox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "actionscard__Outerbox",
  componentId: "pvh4on-0"
})(["background:#fff;display:grid;grid-template-columns:repeat(7,1fr);grid-template-rows:repeat(5,50px);height:250px;width:100%;color:", ";font-size:17px;"], function (props) {
  return props.theme.black;
});
var InnerBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "actionscard__InnerBox",
  componentId: "pvh4on-1"
})(["background:white;box-shadow:", ";grid-column:1 / -1;grid-row:2 / -1;border-radius:10px;"], function (props) {
  return props.theme.bsblack;
});
var TotalPeople = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "actionscard__TotalPeople",
  componentId: "pvh4on-2"
})(["display:grid;grid-template-rows:20px 20px;grid-column:1 / 3;grid-row:1 / 4;align-self:center;color:", ";.icon{grid-column:1 / -1;grid-row:1;height:30px;margin-left:50%;transform:translateX(-50%);}.numbers{grid-column:1 / -1;grid-row:2;}"], function (props) {
  return props.theme.lightblue;
});
var RewardCoin = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "actionscard__RewardCoin",
  componentId: "pvh4on-3"
})(["grid-column:6 / -1;grid-row:1 / 4;align-self:center;"]);
var EventTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "actionscard__EventTitle",
  componentId: "pvh4on-4"
})(["grid-column:1 / -1;font-weight:200;font-size:19px;grid-row:3 / 5;align-self:center;"]);
var EventDate = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "actionscard__EventDate",
  componentId: "pvh4on-5"
})(["grid-column:1 / 4;grid-row:5 / -1;align-self:end;"]);
var EventAction = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "actionscard__EventAction",
  componentId: "pvh4on-6"
})(["grid-column:5 / -1;grid-row:5 / -1;align-self:end;"]);

var actionscard =
/*#__PURE__*/
function (_Component) {
  _inherits(actionscard, _Component);

  function actionscard() {
    _classCallCheck(this, actionscard);

    return _possibleConstructorReturn(this, _getPrototypeOf(actionscard).apply(this, arguments));
  }

  _createClass(actionscard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          date = _this$props.date,
          activity = _this$props.activity,
          showed = _this$props.showed,
          invited = _this$props.invited,
          progress = _this$props.progress;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outerbox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerBox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TotalPeople, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "icon",
        src: people,
        alt: "MyEffect people",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "numbers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, showed, " / ", invited)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_actionsprogresscircle__WEBPACK_IMPORTED_MODULE_2__["default"], {
        progress: progress,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RewardCoin, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "6"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EventTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EventDate, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EventAction, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, activity));
    }
  }]);

  return actionscard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/userprofile/useractions/actionscards.js":
/*!************************************************************!*\
  !*** ./components/userprofile/useractions/actionscards.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return actionscards; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actionscard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionscard */ "./components/userprofile/useractions/actionscard.js");
<<<<<<< HEAD
var _jsxFileName = "/Users/christian/Desktop/myeffect/myeffect-app/frontend/components/userprofile/useractions/actionscards.js";
=======
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/userprofile/useractions/actionscards.js";
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a

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





var Outerbox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "actionscards__Outerbox",
  componentId: "f4jupm-0"
})(["display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto;grid-gap:25px 65px;"]);

var actionscards =
/*#__PURE__*/
function (_Component) {
  _inherits(actionscards, _Component);

  function actionscards() {
    _classCallCheck(this, actionscards);

    return _possibleConstructorReturn(this, _getPrototypeOf(actionscards).apply(this, arguments));
  }

  _createClass(actionscards, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outerbox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, this.props.cards.map(function (card) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_actionscard__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
          key: card.id
        }, card, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }));
      }));
    }
  }]);

  return actionscards;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(actionscards, "defaultProps", {
  cards: [{
    id: uuid_v4__WEBPACK_IMPORTED_MODULE_2___default()(),
    showed: '27',
    invited: '55',
    name: 'Let Youth Be Youth',
    activity: 'volunteering',
    progress: '100',
    date: 'Sept 17, 2019'
  }, {
    id: uuid_v4__WEBPACK_IMPORTED_MODULE_2___default()(),
    showed: '47',
    invited: '105',
    name: 'Jazz Festival',
    activity: 'volunteering',
    progress: '25',
    date: 'Sept 27, 2019'
  }, {
    id: uuid_v4__WEBPACK_IMPORTED_MODULE_2___default()(),
    showed: '57',
    invited: '77',
    name: 'Volunteer',
    activity: 'volunteer',
    progress: '95',
    date: 'Sept 7, 2019'
  }]
});



/***/ }),

/***/ "./components/userprofile/useractions/actionsprogresscircle.js":
/*!*********************************************************************!*\
  !*** ./components/userprofile/useractions/actionsprogresscircle.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return actionsprogresscircle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-circular-progressbar */ "react-circular-progressbar");
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_2__);
<<<<<<< HEAD
var _jsxFileName = "/Users/christian/Desktop/myeffect/myeffect-app/frontend/components/userprofile/useractions/actionsprogresscircle.js";
=======
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/userprofile/useractions/actionsprogresscircle.js";
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Outerbox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "actionsprogresscircle__Outerbox",
  componentId: "d8nimb-0"
})(["width:95px;grid-column:1 / -1;grid-row:1 / 4;align-self:center;margin-top:-40px;margin-left:50%;transform:translateX(-50%);"]);

var actionsprogresscircle =
/*#__PURE__*/
function (_Component) {
  _inherits(actionsprogresscircle, _Component);

  function actionsprogresscircle() {
    _classCallCheck(this, actionsprogresscircle);

    return _possibleConstructorReturn(this, _getPrototypeOf(actionsprogresscircle).apply(this, arguments));
  }

  _createClass(actionsprogresscircle, [{
    key: "render",
    value: function render() {
      var progress = this.props.progress;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outerbox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_2__["CircularProgressbarWithChildren"], {
        value: progress,
        styles: Object(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_2__["buildStyles"])(_defineProperty({
          backgroundColor: "white",
          pathColor: "#00B8F1",
          trailColor: "transparent",
          rotation: -1 / 4,
          strokeLinecap: "butt"
        }, "trailColor", "#eee")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        style: {
          width: 80,
          marginTop: '-25px'
        },
        src: "https://i.imgur.com/b9NyUGm.png",
        alt: "doge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })));
    }
  }]);

  return actionsprogresscircle;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/userprofile/userchallenges/challenges.js":
/*!*************************************************************!*\
  !*** ./components/userprofile/userchallenges/challenges.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return challenges; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _challengesbanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./challengesbanner */ "./components/userprofile/userchallenges/challengesbanner.js");
/* harmony import */ var _challengescards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./challengescards */ "./components/userprofile/userchallenges/challengescards.js");
<<<<<<< HEAD
var _jsxFileName = "/Users/christian/Desktop/myeffect/myeffect-app/frontend/components/userprofile/userchallenges/challenges.js";
=======
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/userprofile/userchallenges/challenges.js";
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Outerbox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "challenges__Outerbox",
  componentId: "dch363-0"
})(["grid-column:1 / -1;grid-row:8;height:100%;"]);

var challenges =
/*#__PURE__*/
function (_Component) {
  _inherits(challenges, _Component);

  function challenges() {
    _classCallCheck(this, challenges);

    return _possibleConstructorReturn(this, _getPrototypeOf(challenges).apply(this, arguments));
  }

  _createClass(challenges, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outerbox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_challengesbanner__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_challengescards__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }));
    }
  }]);

  return challenges;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/userprofile/userchallenges/challengesbanner.js":
/*!*******************************************************************!*\
  !*** ./components/userprofile/userchallenges/challengesbanner.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return actionsbanner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Titles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Titles */ "./components/styles/Titles.js");
<<<<<<< HEAD
var _jsxFileName = "/Users/christian/Desktop/myeffect/myeffect-app/frontend/components/userprofile/userchallenges/challengesbanner.js";
=======
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/userprofile/userchallenges/challengesbanner.js";
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Outerbox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "challengesbanner__Outerbox",
  componentId: "sc-1vnwz3k-0"
})(["display:grid;grid-template-columns:1fr 1fr 1fr 100px;grid-template-rows:50px;margin-bottom:10px;"]);
var SeeMore = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "challengesbanner__SeeMore",
  componentId: "sc-1vnwz3k-1"
})(["color:", ";grid-column:-1;line-height:75px;cursor:pointer;"], function (props) {
  return props.theme.lightblue;
});

var actionsbanner =
/*#__PURE__*/
function (_Component) {
  _inherits(actionsbanner, _Component);

  function actionsbanner() {
    _classCallCheck(this, actionsbanner);

    return _possibleConstructorReturn(this, _getPrototypeOf(actionsbanner).apply(this, arguments));
  }

  _createClass(actionsbanner, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outerbox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Titles__WEBPACK_IMPORTED_MODULE_2__["Title"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Challenges"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SeeMore, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "See More"));
    }
  }]);

  return actionsbanner;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/userprofile/userchallenges/challengescard.js":
/*!*****************************************************************!*\
  !*** ./components/userprofile/userchallenges/challengescard.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return challengescard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _challengesprogresscircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./challengesprogresscircle */ "./components/userprofile/userchallenges/challengesprogresscircle.js");
/* harmony import */ var _challengeshost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./challengeshost */ "./components/userprofile/userchallenges/challengeshost.js");
<<<<<<< HEAD
var _jsxFileName = "/Users/christian/Desktop/myeffect/myeffect-app/frontend/components/userprofile/userchallenges/challengescard.js";
=======
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/userprofile/userchallenges/challengescard.js";
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var handclap = '../../../static/images/profile/challenges/card/icon-handclap.svg';
var hostimage = '../../../static/images/profile/challenges/card/image-host.jpg';
var Outerbox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "challengescard__Outerbox",
  componentId: "sc-18bjozr-0"
})(["display:grid;grid-template-columns:repeat(7,1fr);grid-template-rows:repeat(5,50px);height:250px;width:100%;color:", ";background:#fff;"], function (props) {
  return props.theme.black;
});
var InnerBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "challengescard__InnerBox",
  componentId: "sc-18bjozr-1"
})(["background:white;box-shadow:", ";grid-column:1 / -1;grid-row:2 / -1;border-radius:10px;"], function (props) {
  return props.theme.bsblack;
});
var TotalPeople = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "challengescard__TotalPeople",
  componentId: "sc-18bjozr-2"
})(["display:grid;grid-template-columns:40px 50px;grid-column:1 / 3;grid-row:2 / 3;align-self:center;line-height:14px;color:", ";.icon{grid-column:1;grid-row:1;height:30px;padding-left:10px;margin-left:50%;transform:translateX(-50%);}.numbers{grid-column:2;grid-row:1;}"], function (props) {
  return props.theme.lightblue;
});
var ChallengeIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "challengescard__ChallengeIcon",
  componentId: "sc-18bjozr-3"
})(["grid-column:7 / -1;grid-row:1 / 4;align-self:center;height:20px;"]);
var ChallengeTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "challengescard__ChallengeTitle",
  componentId: "sc-18bjozr-4"
})(["grid-column:1 / -1;font-weight:200;font-size:19px;grid-row:2 / 5;align-self:center;"]);
var ChallengeDesc = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "challengescard__ChallengeDesc",
  componentId: "sc-18bjozr-5"
})(["grid-column:1 / -1;font-weight:200;font-size:14px;grid-row:4;line-height:17px;margin-top:-10px;padding:5px 15px;"]);

var challengescard =
/*#__PURE__*/
function (_Component) {
  _inherits(challengescard, _Component);

  function challengescard() {
    _classCallCheck(this, challengescard);

    return _possibleConstructorReturn(this, _getPrototypeOf(challengescard).apply(this, arguments));
  }

  _createClass(challengescard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          points = _this$props.points,
          host = _this$props.host,
          desc = _this$props.desc,
          icon = _this$props.icon;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outerbox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerBox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TotalPeople, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "icon",
        src: handclap,
        alt: "MyEffect handclap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "numbers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, points, " / 1500")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_challengesprogresscircle__WEBPACK_IMPORTED_MODULE_2__["default"], {
        points: points,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChallengeIcon, {
        src: icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChallengeTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChallengeDesc, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, desc), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_challengeshost__WEBPACK_IMPORTED_MODULE_3__["default"], {
        host: host,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }));
    }
  }]);

  return challengescard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/userprofile/userchallenges/challengescards.js":
/*!******************************************************************!*\
  !*** ./components/userprofile/userchallenges/challengescards.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return challengescards; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _challengescard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./challengescard */ "./components/userprofile/userchallenges/challengescard.js");
<<<<<<< HEAD
var _jsxFileName = "/Users/christian/Desktop/myeffect/myeffect-app/frontend/components/userprofile/userchallenges/challengescards.js";
=======
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/userprofile/userchallenges/challengescards.js";
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a

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





var Outerbox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
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
    icon: '../../../static/images/profile/challenges/icon/LifeAction.svg'
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
    host: 'Tom Tiddles',
    desc: 'Organize groups and collect as many canned and dry items to help support people affected by Huricane Tim!',
    icon: '../../../static/images/profile/challenges/icon/ClimateAction.svg'
  }]
});



/***/ }),

/***/ "./components/userprofile/userchallenges/challengeshost.js":
/*!*****************************************************************!*\
  !*** ./components/userprofile/userchallenges/challengeshost.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return challengeshost; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
<<<<<<< HEAD
var _jsxFileName = "/Users/christian/Desktop/myeffect/myeffect-app/frontend/components/userprofile/userchallenges/challengeshost.js";
=======
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/userprofile/userchallenges/challengeshost.js";
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var hostimage = '../../../static/images/profile/challenges/card/image-host.jpg';
var ChallengeHost = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "challengeshost__ChallengeHost",
  componentId: "udozeg-0"
})(["margin-top:-20px;grid-column:1 / -1;grid-row:5;color:", ";p{font-weight:200;line-height:20px;}.hostProfile{display:grid;grid-template-columns:25px 1fr;margin-left:50%;transform:translateX(-50%);width:150px;height:25px;}.hostImage{height:25px;width:25px;border-radius:12.5px;}.hostName{margin-top:0px;margin-left:5px;text-align:left;line-height:25px;}.hostTitle{height:10px;}"], function (props) {
  return props.theme.grey;
});

var challengeshost =
/*#__PURE__*/
function (_Component) {
  _inherits(challengeshost, _Component);

  function challengeshost() {
    _classCallCheck(this, challengeshost);

    return _possibleConstructorReturn(this, _getPrototypeOf(challengeshost).apply(this, arguments));
  }

  _createClass(challengeshost, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChallengeHost, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "hostTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Hosted by:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hostProfile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "hostImage",
        src: hostimage,
        alt: "Host Image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "hostName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, this.props.host)));
    }
  }]);

  return challengeshost;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/userprofile/userchallenges/challengesprogresscircle.js":
/*!***************************************************************************!*\
  !*** ./components/userprofile/userchallenges/challengesprogresscircle.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return challengesprogresscircle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-circular-progressbar */ "react-circular-progressbar");
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_2__);
<<<<<<< HEAD
var _jsxFileName = "/Users/christian/Desktop/myeffect/myeffect-app/frontend/components/userprofile/userchallenges/challengesprogresscircle.js";
=======
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/userprofile/userchallenges/challengesprogresscircle.js";
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Outerbox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "challengesprogresscircle__Outerbox",
  componentId: "sc-1diin36-0"
})(["width:95px;grid-column:1 / -1;grid-row:1 / 4;align-self:center;margin-top:-40px;margin-left:50%;transform:translateX(-50%);"]);

var challengesprogresscircle =
/*#__PURE__*/
function (_Component) {
  _inherits(challengesprogresscircle, _Component);

  function challengesprogresscircle() {
    _classCallCheck(this, challengesprogresscircle);

    return _possibleConstructorReturn(this, _getPrototypeOf(challengesprogresscircle).apply(this, arguments));
  }

  _createClass(challengesprogresscircle, [{
    key: "render",
    value: function render() {
      var points = this.props.points;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outerbox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_2__["CircularProgressbarWithChildren"], {
        maxValue: 1500,
        value: points,
        styles: Object(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_2__["buildStyles"])(_defineProperty({
          backgroundColor: "white",
          pathColor: "#00B8F1",
          trailColor: "transparent",
          rotation: -1 / 4,
          strokeLinecap: "butt"
        }, "trailColor", "#eee")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        style: {
          width: 80,
          marginTop: '-25px'
        },
        src: "https://i.imgur.com/b9NyUGm.png",
        alt: "doge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })));
    }
  }]);

  return challengesprogresscircle;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/userprofile/userheader/header.js":
/*!*****************************************************!*\
  !*** ./components/userprofile/userheader/header.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headershare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./headershare */ "./components/userprofile/userheader/headershare.js");
/* harmony import */ var _headerprofile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./headerprofile */ "./components/userprofile/userheader/headerprofile.js");
/* harmony import */ var _headerbanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./headerbanner */ "./components/userprofile/userheader/headerbanner.js");
<<<<<<< HEAD
var _jsxFileName = "/Users/christian/Desktop/myeffect/myeffect-app/frontend/components/userprofile/userheader/header.js";
=======
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/userprofile/userheader/header.js";
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var notification = '../../static/images/profile/header/headerImage/icon-notification.svg';
var Outerbox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "header__Outerbox",
  componentId: "sc-1fqft7k-0"
})(["grid-column:1 / -1;grid-row:1;display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:200px;"]);
var Notification = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "header__Notification",
  componentId: "sc-1fqft7k-1"
})(["position:absolute;top:35px;right:40px;height:20px;z-index:100;"]);

var header =
/*#__PURE__*/
function (_Component) {
  _inherits(header, _Component);

  function header() {
    _classCallCheck(this, header);

    return _possibleConstructorReturn(this, _getPrototypeOf(header).apply(this, arguments));
  }

  _createClass(header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outerbox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_headerprofile__WEBPACK_IMPORTED_MODULE_3__["default"], {
        user: this.props.user,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_headerbanner__WEBPACK_IMPORTED_MODULE_4__["default"], {
        user: this.props.user,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Notification, {
        src: notification,
        alt: "my-effect notification",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_headershare__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }));
    }
  }]);

  return header;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/userprofile/userheader/headerbanner.js":
/*!***********************************************************!*\
  !*** ./components/userprofile/userheader/headerbanner.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return headerbanner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
<<<<<<< HEAD
var _jsxFileName = "/Users/christian/Desktop/myeffect/myeffect-app/frontend/components/userprofile/userheader/headerbanner.js";
=======
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/userprofile/userheader/headerbanner.js";
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var headerMask = '../../static/images/profile/header/headerImage/header-mask.svg';
var ImageMask = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "headerbanner__ImageMask",
  componentId: "sc-1jpi2zj-0"
})(["grid-column:1 / -1;grid-row:1;mask-image:url(", ");mask-repeat:no-repeat;mask-size:contain;width:100%;max-width:1000px;margin-left:50%;transform:translateX(-50%);background-repeat:no-repeat;pointer-events:none;-moz-user-select:none;-webkit-user-select:none;user-select:none;z-index:1;"], headerMask);

var headerbanner =
/*#__PURE__*/
function (_Component) {
  _inherits(headerbanner, _Component);

  function headerbanner() {
    _classCallCheck(this, headerbanner);

    return _possibleConstructorReturn(this, _getPrototypeOf(headerbanner).apply(this, arguments));
  }

  _createClass(headerbanner, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageMask, {
        unselectable: "on",
        src: this.props.user.bannerImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      });
    }
  }]);

  return headerbanner;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/userprofile/userheader/headerprofile.js":
/*!************************************************************!*\
  !*** ./components/userprofile/userheader/headerprofile.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return headerprofile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
<<<<<<< HEAD
var _jsxFileName = "/Users/christian/Desktop/myeffect/myeffect-app/frontend/components/userprofile/userheader/headerprofile.js";
=======
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/userprofile/userheader/headerprofile.js";
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Outerbox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "headerprofile__Outerbox",
  componentId: "sc-69s7ip-0"
})(["position:relative;grid-column:1 / -1;grid-row:2;margin-top:-130px;margin-left:50%;transform:translateX(-50%);z-index:10;p{margin-top:-10px;color:", ";font-size:25px;font-weight:200;}"], function (props) {
  return props.theme.black;
});
var ProfileImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "headerprofile__ProfileImage",
  componentId: "sc-69s7ip-1"
})(["border-radius:50%;"]);

var headerprofile =
/*#__PURE__*/
function (_Component) {
  _inherits(headerprofile, _Component);

  function headerprofile(props) {
    _classCallCheck(this, headerprofile);

    return _possibleConstructorReturn(this, _getPrototypeOf(headerprofile).call(this, props));
  }

  _createClass(headerprofile, [{
    key: "render",
    value: function render() {
      var username = this.props.user.firstName + " " + this.props.user.lastName;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outerbox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProfileImage, {
        height: "90px",
        width: "90px",
        src: this.props.user.profileImage,
        alt: "gr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, username));
    }
  }]);

  return headerprofile;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/userprofile/userheader/headershare.js":
/*!**********************************************************!*\
  !*** ./components/userprofile/userheader/headershare.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return headershare; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _buttons_subjective_sharebutton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../buttons/subjective/sharebutton */ "./components/buttons/subjective/sharebutton.js");
<<<<<<< HEAD
var _jsxFileName = "/Users/christian/Desktop/myeffect/myeffect-app/frontend/components/userprofile/userheader/headershare.js";
=======
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/userprofile/userheader/headershare.js";
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Outerbox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "headershare__Outerbox",
  componentId: "sc-1wpkkpz-0"
})(["grid-column:3 / -1;grid-row:1;height:100px;width:100%;align-self:flex-end;"]);

var headershare =
/*#__PURE__*/
function (_Component) {
  _inherits(headershare, _Component);

  function headershare() {
    _classCallCheck(this, headershare);

    return _possibleConstructorReturn(this, _getPrototypeOf(headershare).apply(this, arguments));
  }

  _createClass(headershare, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outerbox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_buttons_subjective_sharebutton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }));
    }
  }]);

  return headershare;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/userprofile/userinfo/info.js":
/*!*************************************************!*\
  !*** ./components/userprofile/userinfo/info.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return info; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _infotiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./infotiles */ "./components/userprofile/userinfo/infotiles.js");
<<<<<<< HEAD
var _jsxFileName = "/Users/christian/Desktop/myeffect/myeffect-app/frontend/components/userprofile/userinfo/info.js";
=======
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/userprofile/userinfo/info.js";
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Outerbox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "info__Outerbox",
  componentId: "sc-10zcuub-0"
})(["grid-column:1 / -1;width:100%;grid-row:4;height:250px;"]);

var info =
/*#__PURE__*/
function (_Component) {
  _inherits(info, _Component);

  function info() {
    _classCallCheck(this, info);

    return _possibleConstructorReturn(this, _getPrototypeOf(info).apply(this, arguments));
  }

  _createClass(info, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outerbox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_infotiles__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }));
    }
  }]);

  return info;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/userprofile/userinfo/infotile.js":
/*!*****************************************************!*\
  !*** ./components/userprofile/userinfo/infotile.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return infotile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
<<<<<<< HEAD
var _jsxFileName = "/Users/christian/Desktop/myeffect/myeffect-app/frontend/components/userprofile/userinfo/infotile.js";
=======
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/userprofile/userinfo/infotile.js";
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Outerbox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "infotile__Outerbox",
  componentId: "sc-1bgwf4w-0"
})(["background:white;box-shadow:", ";color:black;width:120px;height:200px;margin-top:20px;padding:5px;border-radius:10px;img{margin-top:14px;}"], function (props) {
  return props.theme.bsblack;
});

var infotile =
/*#__PURE__*/
function (_Component) {
  _inherits(infotile, _Component);

  function infotile() {
    _classCallCheck(this, infotile);

    return _possibleConstructorReturn(this, _getPrototypeOf(infotile).apply(this, arguments));
  }

  _createClass(infotile, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          name = _this$props.name,
          icon = _this$props.icon,
          hours = _this$props.hours,
          dollars = _this$props.dollars,
          people = _this$props.people;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outerbox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: icon,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, name));
    }
  }]);

  return infotile;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/userprofile/userinfo/infotiles.js":
/*!******************************************************!*\
  !*** ./components/userprofile/userinfo/infotiles.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return infotiles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _infotile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./infotile */ "./components/userprofile/userinfo/infotile.js");
<<<<<<< HEAD
var _jsxFileName = "/Users/christian/Desktop/myeffect/myeffect-app/frontend/components/userprofile/userinfo/infotiles.js";
=======
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/userprofile/userinfo/infotiles.js";
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a

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


var Outerbox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "infotiles__Outerbox",
  componentId: "sc-1kxr7ju-0"
})(["grid-column:1 /-1;grid-row:1;width:100%;height:100%;display:grid;grid-auto-flow:column;grid-gap:10px;justify-content:center;overflow-y:hidden;scrollbar-width:none;"]);

/***/ }),

/***/ "./components/userprofile/usermemories/memories.js":
/*!*********************************************************!*\
  !*** ./components/userprofile/usermemories/memories.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return memories; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _memoriesbanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./memoriesbanner */ "./components/userprofile/usermemories/memoriesbanner.js");
/* harmony import */ var _memoriesgallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./memoriesgallery */ "./components/userprofile/usermemories/memoriesgallery.js");
<<<<<<< HEAD
var _jsxFileName = "/Users/christian/Desktop/myeffect/myeffect-app/frontend/components/userprofile/usermemories/memories.js";
=======
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/userprofile/usermemories/memories.js";
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Outerbox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "memories__Outerbox",
  componentId: "sc-12d4jeg-0"
})(["grid-row:6;grid-column:1 / -1;"]);

var memories =
/*#__PURE__*/
function (_Component) {
  _inherits(memories, _Component);

  function memories() {
    _classCallCheck(this, memories);

    return _possibleConstructorReturn(this, _getPrototypeOf(memories).apply(this, arguments));
  }

  _createClass(memories, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outerbox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_memoriesbanner__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_memoriesgallery__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }));
    }
  }]);

  return memories;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/userprofile/usermemories/memoriesbanner.js":
/*!***************************************************************!*\
  !*** ./components/userprofile/usermemories/memoriesbanner.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return memoriesbanner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Titles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Titles */ "./components/styles/Titles.js");
<<<<<<< HEAD
var _jsxFileName = "/Users/christian/Desktop/myeffect/myeffect-app/frontend/components/userprofile/usermemories/memoriesbanner.js";
=======
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/userprofile/usermemories/memoriesbanner.js";
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Outerbox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "memoriesbanner__Outerbox",
  componentId: "sc-2xnu4c-0"
})(["display:grid;grid-template-columns:1fr 1fr 1fr 100px;grid-template-rows:50px;margin-bottom:10px;"]);
var SeeMore = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "memoriesbanner__SeeMore",
  componentId: "sc-2xnu4c-1"
})(["color:", ";grid-column:-1;line-height:75px;cursor:pointer;"], function (props) {
  return props.theme.lightblue;
});

var memoriesbanner =
/*#__PURE__*/
function (_Component) {
  _inherits(memoriesbanner, _Component);

  function memoriesbanner() {
    _classCallCheck(this, memoriesbanner);

    return _possibleConstructorReturn(this, _getPrototypeOf(memoriesbanner).apply(this, arguments));
  }

  _createClass(memoriesbanner, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outerbox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Titles__WEBPACK_IMPORTED_MODULE_2__["Title"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Memories"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SeeMore, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "See More"));
    }
  }]);

  return memoriesbanner;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/userprofile/usermemories/memoriesgallery.js":
/*!****************************************************************!*\
  !*** ./components/userprofile/usermemories/memoriesgallery.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return memoriesgallery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
<<<<<<< HEAD
var _jsxFileName = "/Users/christian/Desktop/myeffect/myeffect-app/frontend/components/userprofile/usermemories/memoriesgallery.js";
=======
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/userprofile/usermemories/memoriesgallery.js";
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var img = "../../static/images/profile/memories/me.jpg";
var Outerbox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "memoriesgallery__Outerbox",
  componentId: "sc-19gl3rt-0"
})(["display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;grid-template-rows:repeat(6,90px);grid-gap:15px;grid-template-areas:\"image1 image1 image2 image2 image2\" \"image1 image1 image2 image2 image2\" \"image1 image1 image2 image2 image2\" \"image1 image1 image4 image4 image4\" \"image3 image3 image4 image4 image4\" \"image3 image3 image4 image4 image4\";div{border-radius:10px;object-fit:cover;background-size:cover;}"]);
var Image1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "memoriesgallery__Image1",
  componentId: "sc-19gl3rt-1"
})(["background-image:url(\"../../static/images/profile/memories/me.jpg\");grid-area:image1;"]);
var Image2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "memoriesgallery__Image2",
  componentId: "sc-19gl3rt-2"
})(["background-image:url(\"../../static/images/profile/memories/me2.jpg\");grid-area:image2;"]);
var Image3 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "memoriesgallery__Image3",
  componentId: "sc-19gl3rt-3"
})(["background-image:url(\"../../static/images/profile/memories/me3.png\");grid-area:image3;"]);
var Image4 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "memoriesgallery__Image4",
  componentId: "sc-19gl3rt-4"
})(["background-image:url(\"../../static/images/profile/memories/me4.jpg\");grid-area:image4;"]);

var memoriesgallery =
/*#__PURE__*/
function (_Component) {
  _inherits(memoriesgallery, _Component);

  function memoriesgallery() {
    _classCallCheck(this, memoriesgallery);

    return _possibleConstructorReturn(this, _getPrototypeOf(memoriesgallery).apply(this, arguments));
  }

  _createClass(memoriesgallery, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outerbox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image1, {
        src: img,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image2, {
        src: img,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image3, {
        src: img,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image4, {
        src: img,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }));
    }
  }]);

  return memoriesgallery;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/userprofile/userprofile.js":
/*!***********************************************!*\
  !*** ./components/userprofile/userprofile.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return profile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _userheader_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userheader/header */ "./components/userprofile/userheader/header.js");
/* harmony import */ var _userinfo_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userinfo/info */ "./components/userprofile/userinfo/info.js");
/* harmony import */ var _userabout_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userabout/about */ "./components/userprofile/userabout/about.js");
/* harmony import */ var _usermemories_memories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usermemories/memories */ "./components/userprofile/usermemories/memories.js");
/* harmony import */ var _useractions_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useractions/actions */ "./components/userprofile/useractions/actions.js");
/* harmony import */ var _userchallenges_challenges__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userchallenges/challenges */ "./components/userprofile/userchallenges/challenges.js");
<<<<<<< HEAD
var _jsxFileName = "/Users/christian/Desktop/myeffect/myeffect-app/frontend/components/userprofile/userprofile.js";
=======
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/components/userprofile/userprofile.js";
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var Outerbox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "userprofile__Outerbox",
  componentId: "pfeev8-0"
})(["grid-column:2 / -1;display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;grid-template-rows:75px 75px 100px 300px 150px 750px 750px 750px;width:100%;max-width:800px;margin:0 auto;margin-bottom:100px;text-align:center;"]);

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
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_userheader_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
        user: this.state.user,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_userinfo_info__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_userabout_about__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_usermemories_memories__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_useractions_actions__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_userchallenges_challenges__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }));
    }
  }]);

  return profile;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_userprofile_userprofile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/userprofile/userprofile */ "./components/userprofile/userprofile.js");
<<<<<<< HEAD
var _jsxFileName = "/Users/christian/Desktop/myeffect/myeffect-app/frontend/pages/index.js";
=======
var _jsxFileName = "/Users/christian/Desktop/MyEffectApp/myeffect-app/frontend/pages/index.js";
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a



var Outerbox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Outerbox",
  componentId: "sc-1oycpon-0"
})(["display:grid;grid-template-columns:250px 1fr;width:100%;"]);

var index = function index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outerbox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_userprofile_userprofile__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-circular-progressbar":
/*!*********************************************!*\
  !*** external "react-circular-progressbar" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-circular-progressbar");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map