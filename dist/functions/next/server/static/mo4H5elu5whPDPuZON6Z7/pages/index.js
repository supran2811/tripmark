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
/******/ 	return __webpack_require__(__webpack_require__.s = 148);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return drawerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return container; });
/* unused harmony export conatinerFluid */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return boxShadow; });
/* unused harmony export card */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return defaultFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return primaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return warningColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return dangerColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return successColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return infoColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return roseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return grayColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return primaryBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return infoBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return successBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return warningBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return dangerBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return roseBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return warningCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return successCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dangerCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return infoCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return primaryCardHeader; });
/* unused harmony export roseCardHeader */
/* unused harmony export cardActions */
/* unused harmony export cardHeader */
/* unused harmony export defaultBoxShadow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return title; });
/* unused harmony export cardTitle */
/* unused harmony export cardLink */
/* unused harmony export cardSubtitle */
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*!

 =========================================================
 * Material Kit React - v1.1.0 based on Material Kit - v2.0.2
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-kit-react
 * Copyright 2018 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
// ##############################
// // // Variables - Styles that are used on more than one component
// #############################
var drawerWidth = 260;
var transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};
var conatinerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
};

var container = _objectSpread({}, conatinerFluid);

var boxShadow = {
  boxShadow: "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
};
var card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
  borderRadius: "3px",
  color: "rgba(0, 0, 0, 0.87)",
  background: "#fff"
};
var defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};
var primaryColor = "#9c27b0";
var warningColor = "#ff9800";
var dangerColor = "#f44336";
var successColor = "#4caf50";
var infoColor = "#00acc1";
var roseColor = "#e91e63";
var grayColor = "#999999";
var primaryBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
};
var infoBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
};
var successBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
};
var warningBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
};
var dangerBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"
};
var roseBoxShadow = {
  boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"
};

var warningCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #ffa726, #fb8c00)"
}, warningBoxShadow);

var successCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #66bb6a, #43a047)"
}, successBoxShadow);

var dangerCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #ef5350, #e53935)"
}, dangerBoxShadow);

var infoCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #26c6da, #00acc1)"
}, infoBoxShadow);

var primaryCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #ab47bc, #8e24aa)"
}, primaryBoxShadow);

var roseCardHeader = _objectSpread({
  color: "#fff",
  background: "linear-gradient(60deg, #ec407a, #d81b60)"
}, roseBoxShadow);

var cardActions = _objectSpread({
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid #eeeeee",
  height: "auto"
}, defaultFont);

var cardHeader = {
  margin: "-30px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};
var defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow: "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};
var title = {
  color: "#3C4858",
  margin: "1.75rem 0 0.875rem",
  textDecoration: "none",
  fontWeight: "700",
  fontFamily: "\"Roboto Slab\", \"Times New Roman\", serif"
};

var cardTitle = _objectSpread({}, title, {
  marginTop: ".625rem"
});

var cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};
var cardSubtitle = {
  marginBottom: "0",
  marginTop: "-.375rem"
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CANCEL; });
/* unused harmony export CANCELLED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SUCCESS; });
var CANCEL = "CANCEL";
var CANCELLED = "CANCELLED";
var ERROR = "ERROR";
var PENDING = "PENDING";
var SUCCESS = "SUCCESS";

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux-define");

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/withStyles");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);


var config = {
  apiKey: "AIzaSyBJPM4QjLcMSGN_17eRHCcRhHrct08guhM",
  authDomain: "triporg-1508486982436.firebaseapp.com",
  databaseURL: "https://triporg-1508486982436.firebaseio.com",
  projectId: "triporg-1508486982436",
  storageBucket: "triporg-1508486982436.appspot.com",
  messagingSenderId: "246403049091"
};

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
}

var auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
var Auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME", function() { return NAME; });
var NAME = "auth";

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ACTION_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ACTION_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ACTION_SET_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ACTION_SET_USER_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ACTION_SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTION_GOOGLE_SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ACTION_SET_PATH_TO_REDIRECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ACTION_RESET_PATH_TO_REDIRECT; });
/* harmony import */ var redux_define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var redux_define__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_define__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



var ACTION_LOGIN = Object(redux_define__WEBPACK_IMPORTED_MODULE_0__["defineAction"])("LOGIN", [_app_constants__WEBPACK_IMPORTED_MODULE_2__[/* ERROR */ "b"], _app_constants__WEBPACK_IMPORTED_MODULE_2__[/* PENDING */ "c"], _app_constants__WEBPACK_IMPORTED_MODULE_2__[/* SUCCESS */ "d"]], _constants__WEBPACK_IMPORTED_MODULE_1__["NAME"]);
var ACTION_LOGOUT = Object(redux_define__WEBPACK_IMPORTED_MODULE_0__["defineAction"])("LOGOUT", [_app_constants__WEBPACK_IMPORTED_MODULE_2__[/* ERROR */ "b"], _app_constants__WEBPACK_IMPORTED_MODULE_2__[/* PENDING */ "c"], _app_constants__WEBPACK_IMPORTED_MODULE_2__[/* SUCCESS */ "d"]], _constants__WEBPACK_IMPORTED_MODULE_1__["NAME"]);
var ACTION_SET_TOKEN = Object(redux_define__WEBPACK_IMPORTED_MODULE_0__["defineAction"])("SET_TOKEN", [_app_constants__WEBPACK_IMPORTED_MODULE_2__[/* ERROR */ "b"], _app_constants__WEBPACK_IMPORTED_MODULE_2__[/* PENDING */ "c"], _app_constants__WEBPACK_IMPORTED_MODULE_2__[/* SUCCESS */ "d"]], _constants__WEBPACK_IMPORTED_MODULE_1__["NAME"]);
var ACTION_SET_USER_DATA = Object(redux_define__WEBPACK_IMPORTED_MODULE_0__["defineAction"])("SET_USER_DATA", [], _constants__WEBPACK_IMPORTED_MODULE_1__["NAME"]);
var ACTION_SIGNUP = Object(redux_define__WEBPACK_IMPORTED_MODULE_0__["defineAction"])("SIGNUP", [_app_constants__WEBPACK_IMPORTED_MODULE_2__[/* ERROR */ "b"], _app_constants__WEBPACK_IMPORTED_MODULE_2__[/* PENDING */ "c"], _app_constants__WEBPACK_IMPORTED_MODULE_2__[/* SUCCESS */ "d"]], _constants__WEBPACK_IMPORTED_MODULE_1__["NAME"]);
var ACTION_GOOGLE_SIGNUP = Object(redux_define__WEBPACK_IMPORTED_MODULE_0__["defineAction"])("GOOGLE_SIGNUP", [_app_constants__WEBPACK_IMPORTED_MODULE_2__[/* ERROR */ "b"], _app_constants__WEBPACK_IMPORTED_MODULE_2__[/* PENDING */ "c"], _app_constants__WEBPACK_IMPORTED_MODULE_2__[/* SUCCESS */ "d"]], _constants__WEBPACK_IMPORTED_MODULE_1__["NAME"]);
var ACTION_SET_PATH_TO_REDIRECT = Object(redux_define__WEBPACK_IMPORTED_MODULE_0__["defineAction"])("ACTION_SET_PATH_TO_REDIRECT", [], _constants__WEBPACK_IMPORTED_MODULE_1__["NAME"]);
var ACTION_RESET_PATH_TO_REDIRECT = Object(redux_define__WEBPACK_IMPORTED_MODULE_0__["defineAction"])("ACTION_RESET_PATH_TO_REDIRECT", [], _constants__WEBPACK_IMPORTED_MODULE_1__["NAME"]);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(14);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(8);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles/withStyles"
var withStyles_ = __webpack_require__(7);
var withStyles_default = /*#__PURE__*/__webpack_require__.n(withStyles_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(27);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: ./assets/jss/material-kit-react.js
var material_kit_react = __webpack_require__(1);

// CONCATENATED MODULE: ./components/CustomButtons/buttonStyle.js

var buttonStyle = {
  buttonProgress: {
    color: "#ffffff",
    position: 'absolute',
    top: "50%",
    left: "50%",
    marginLeft: -14,
    marginTop: -10
  },
  buttonRoot: {
    position: 'relative'
  },
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: material_kit_react["h" /* grayColor */],
    color: "#FFFFFF",
    boxShadow: "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: "#FFFFFF",
      backgroundColor: material_kit_react["h" /* grayColor */],
      boxShadow: "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
    },
    "& .fab,& .fas,& .far,& .fal": {
      position: "relative",
      display: "inline-block",
      top: "0",
      fontSize: "1.1rem",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "& svg": {
      position: "relative",
      display: "inline-block",
      top: "0",
      width: "18px",
      height: "18px",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal": {
        marginRight: "0px",
        position: "absolute",
        width: "100%",
        transform: "none",
        left: "0px",
        top: "0px",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px"
      }
    }
  },
  fullWidth: {
    width: "100%"
  },
  primary: {
    backgroundColor: material_kit_react["n" /* primaryColor */],
    boxShadow: "0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: material_kit_react["n" /* primaryColor */],
      boxShadow: "0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)"
    }
  },
  info: {
    backgroundColor: material_kit_react["k" /* infoColor */],
    boxShadow: "0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: material_kit_react["k" /* infoColor */],
      boxShadow: "0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)"
    }
  },
  success: {
    backgroundColor: material_kit_react["s" /* successColor */],
    boxShadow: "0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: material_kit_react["s" /* successColor */],
      boxShadow: "0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)"
    }
  },
  warning: {
    backgroundColor: material_kit_react["x" /* warningColor */],
    boxShadow: "0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: material_kit_react["x" /* warningColor */],
      boxShadow: "0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)"
    }
  },
  danger: {
    backgroundColor: material_kit_react["e" /* dangerColor */],
    boxShadow: "0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: material_kit_react["e" /* dangerColor */],
      boxShadow: "0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)"
    }
  },
  rose: {
    backgroundColor: material_kit_react["p" /* roseColor */],
    boxShadow: "0 2px 2px 0 rgba(233, 30, 99, 0.14), 0 3px 1px -2px rgba(233, 30, 99, 0.2), 0 1px 5px 0 rgba(233, 30, 99, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: material_kit_react["p" /* roseColor */],
      boxShadow: "0 14px 26px -12px rgba(233, 30, 99, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2)"
    }
  },
  white: {
    "&,&:focus,&:hover,&:visited": {
      backgroundColor: "#FFFFFF",
      color: material_kit_react["h" /* grayColor */]
    }
  },
  twitter: {
    backgroundColor: "#55acee",
    color: "#fff",
    boxShadow: "0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12)",
    "&:hover,&:focus,&:visited": {
      backgroundColor: "#55acee",
      color: "#fff",
      boxShadow: "0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)"
    }
  },
  facebook: {
    backgroundColor: "#3b5998",
    color: "#fff",
    boxShadow: "0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: "#3b5998",
      color: "#fff",
      boxShadow: "0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2)"
    }
  },
  google: {
    backgroundColor: "#dd4b39",
    color: "#fff",
    boxShadow: "0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: "#dd4b39",
      color: "#fff",
      boxShadow: "0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2)"
    }
  },
  github: {
    backgroundColor: "#333333",
    color: "#fff",
    boxShadow: "0 2px 2px 0 rgba(51, 51, 51, 0.14), 0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: "#333333",
      color: "#fff",
      boxShadow: "0 14px 26px -12px rgba(51, 51, 51, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(51, 51, 51, 0.2)"
    }
  },
  simple: {
    "&,&:focus,&:hover,&:visited": {
      color: "#FFFFFF",
      background: "transparent",
      boxShadow: "none"
    },
    "&$primary": {
      "&,&:focus,&:hover,&:visited": {
        color: material_kit_react["n" /* primaryColor */]
      }
    },
    "&$info": {
      "&,&:focus,&:hover,&:visited": {
        color: material_kit_react["k" /* infoColor */]
      }
    },
    "&$success": {
      "&,&:focus,&:hover,&:visited": {
        color: material_kit_react["s" /* successColor */]
      }
    },
    "&$warning": {
      "&,&:focus,&:hover,&:visited": {
        color: material_kit_react["x" /* warningColor */]
      }
    },
    "&$rose": {
      "&,&:focus,&:hover,&:visited": {
        color: material_kit_react["p" /* roseColor */]
      }
    },
    "&$danger": {
      "&,&:focus,&:hover,&:visited": {
        color: material_kit_react["e" /* dangerColor */]
      }
    },
    "&$twitter": {
      "&,&:focus,&:hover,&:visited": {
        color: "#55acee"
      }
    },
    "&$facebook": {
      "&,&:focus,&:hover,&:visited": {
        color: "#3b5998"
      }
    },
    "&$google": {
      "&,&:focus,&:hover,&:visited": {
        color: "#dd4b39"
      }
    },
    "&$github": {
      "&,&:focus,&:hover,&:visited": {
        color: "#333333"
      }
    }
  },
  transparent: {
    "&,&:focus,&:hover,&:visited": {
      color: "inherit",
      background: "transparent",
      boxShadow: "none"
    }
  },
  disabled: {
    opacity: "0.65",
    pointerEvents: "none"
  },
  lg: {
    padding: "1.125rem 2.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.333333",
    borderRadius: "0.2rem"
  },
  sm: {
    padding: "0.40625rem 1.25rem",
    fontSize: "0.6875rem",
    lineHeight: "1.5",
    borderRadius: "0.2rem"
  },
  round: {
    borderRadius: "30px"
  },
  block: {
    width: "100% !important"
  },
  link: {
    "&,&:hover,&:focus": {
      backgroundColor: "transparent",
      color: "#999999",
      boxShadow: "none"
    }
  },
  justIcon: {
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "20px",
    height: "41px",
    minWidth: "41px",
    width: "41px",
    "& .fab,& .fas,& .far,& .fal,& svg": {
      marginRight: "0px"
    },
    "&$lg": {
      height: "57px",
      minWidth: "57px",
      width: "57px",
      lineHeight: "56px",
      "& .fab,& .fas,& .far,& .fal": {
        fontSize: "32px",
        lineHeight: "56px"
      },
      "& svg": {
        width: "32px",
        height: "32px"
      }
    },
    "&$sm": {
      height: "30px",
      minWidth: "30px",
      width: "30px",
      "& .fab,& .fas,& .far,& .fal": {
        fontSize: "17px",
        lineHeight: "29px"
      },
      "& svg": {
        width: "17px",
        height: "17px"
      }
    }
  }
};
/* harmony default export */ var CustomButtons_buttonStyle = (buttonStyle);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(15);

// CONCATENATED MODULE: ./components/CustomButtons/Button.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // nodejs library to set properties for components

 // nodejs library that concatenates classes

 // @material-ui/core components


 // core components




function RegularButton(_ref) {
  var _classNames, _classNames2;

  var props = _extends({}, _ref);

  var classes = props.classes,
      color = props.color,
      round = props.round,
      children = props.children,
      fullWidth = props.fullWidth,
      disabled = props.disabled,
      simple = props.simple,
      size = props.size,
      block = props.block,
      link = props.link,
      justIcon = props.justIcon,
      loading = props.loading,
      className = props.className,
      rest = _objectWithoutProperties(props, ["classes", "color", "round", "children", "fullWidth", "disabled", "simple", "size", "block", "link", "justIcon", "loading", "className"]);

  var btnClasses = external_classnames_default()((_classNames = {}, _defineProperty(_classNames, classes.button, true), _defineProperty(_classNames, classes[size], size), _defineProperty(_classNames, classes[color], color), _defineProperty(_classNames, classes.round, round), _defineProperty(_classNames, classes.fullWidth, fullWidth), _defineProperty(_classNames, classes.disabled, disabled), _defineProperty(_classNames, classes.simple, simple), _defineProperty(_classNames, classes.block, block), _defineProperty(_classNames, classes.link, link), _defineProperty(_classNames, classes.justIcon, justIcon), _defineProperty(_classNames, className, className), _classNames));
  var btnDivClasses = external_classnames_default()((_classNames2 = {}, _defineProperty(_classNames2, classes.buttonRoot, true), _defineProperty(_classNames2, classes.fullWidth, fullWidth), _classNames2));
  return external_react_default.a.createElement("div", {
    className: btnDivClasses
  }, external_react_default.a.createElement(Button_default.a, _extends({}, rest, {
    className: btnClasses
  }), !loading && children), loading && external_react_default.a.createElement(core_["CircularProgress"], {
    size: 24,
    className: classes.buttonProgress
  }));
}

/* harmony default export */ var Button = (withStyles_default()(CustomButtons_buttonStyle)(RegularButton));
// CONCATENATED MODULE: ./components/CustomButtons/index.js

/* harmony default export */ var CustomButtons = __webpack_exports__["a"] = (Button);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__(78)();

routes.add("login", "/login");
routes.add("home", "/mypage");
routes.add("city", "/city/:cityId");
routes.add("city/addfav", "/city/:cityId/addFav");
routes.add("city/place", "/city/:cityId/place/:placeId");

module.exports = routes;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loginRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return setToken; });
/* unused harmony export setUserData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return signUpRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return googleSignUpRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return logoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setRedirectPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return resetRedirectPath; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);

function loginRequest(email, password) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* ACTION_LOGIN */ "b"].ACTION,
    email: email,
    password: password
  };
}
function setToken() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* ACTION_SET_TOKEN */ "f"].ACTION
  };
}
function setUserData(token, uid) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* ACTION_SET_USER_DATA */ "g"].ACTION,
    token: token,
    uid: uid
  };
}
function signUpRequest(fullName, email, password) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* ACTION_SIGNUP */ "h"].ACTION,
    fullName: fullName,
    email: email,
    password: password
  };
}
function googleSignUpRequest() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* ACTION_GOOGLE_SIGNUP */ "a"].ACTION
  };
}
function logoutRequest() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* ACTION_LOGOUT */ "c"].ACTION
  };
}
function setRedirectPath(pathToRedirect) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* ACTION_SET_PATH_TO_REDIRECT */ "e"].ACTION,
    pathToRedirect: pathToRedirect
  };
}
function resetRedirectPath() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* ACTION_RESET_PATH_TO_REDIRECT */ "d"].ACTION
  };
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getNameInitials; });
/* unused harmony export getQueryParam */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deleteKey; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function getNameInitials(name) {
  var nameArray = name.split(" ");
  return nameArray.length > 1 ? "".concat(nameArray[0].charAt(0)).concat(nameArray[1].charAt(0)) : "".concat(nameArray[0].charAt(0));
}
function getQueryParam(key, search) {
  if (search) {
    search = search.substr(1);
    var params = search.split("&");
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = params[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var param = _step.value;
        var keyValues = param.split("=");

        if (keyValues[0] === key) {
          return keyValues[1];
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  return undefined;
}
function getValue(key, obj) {
  return immutable__WEBPACK_IMPORTED_MODULE_0__["Map"].isMap(obj) ? obj.get(key) : obj[key];
}
function setValue(key, value, obj) {
  if (immutable__WEBPACK_IMPORTED_MODULE_0__["Map"].isMap(obj)) {
    return obj.set(key, value);
  } else {
    return _objectSpread({}, obj, _defineProperty({}, key, value));
  }
}
function deleteKey(key, obj) {
  if (key && obj) {
    if (immutable__WEBPACK_IMPORTED_MODULE_0__["Map"].isMap(obj)) {
      return obj.delete(key);
    } else {
      return _objectSpread({}, obj, _defineProperty({}, key, undefined));
    }
  }

  return undefined;
}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getToken */
/* unused harmony export getUid */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isFirebaseLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPathToRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isAuthenticated; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);


var getToken = function getToken(state) {
  return state.get(_constants__WEBPACK_IMPORTED_MODULE_1__["NAME"]).get("token");
};
var getUid = function getUid(state) {
  return state.get(_constants__WEBPACK_IMPORTED_MODULE_1__["NAME"]).get("uid");
};
var isFirebaseLoaded = function isFirebaseLoaded(state) {
  return state.get(_constants__WEBPACK_IMPORTED_MODULE_1__["NAME"]).get("firebaseLoaded");
};
var getPathToRedirect = function getPathToRedirect(state) {
  return state.get(_constants__WEBPACK_IMPORTED_MODULE_1__["NAME"]).get("pathToRedirect");
};
var isAuthenticated = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getToken, function (token) {
  return token !== "";
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doCreateUser", function() { return doCreateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSignInUser", function() { return doSignInUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUpdateProfile", function() { return doUpdateProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSignOut", function() { return doSignOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserName", function() { return getUserName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfilePhotoUrl", function() { return getProfilePhotoUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserId", function() { return getUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doGoogleSignIn", function() { return doGoogleSignIn; });
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);

var doCreateUser = function doCreateUser(email, password) {
  return _firebase__WEBPACK_IMPORTED_MODULE_0__[/* auth */ "b"].createUserWithEmailAndPassword(email, password);
};
var doSignInUser = function doSignInUser(email, password) {
  return _firebase__WEBPACK_IMPORTED_MODULE_0__[/* auth */ "b"].signInWithEmailAndPassword(email, password);
};
var doUpdateProfile = function doUpdateProfile(name, photoUrl) {
  return _firebase__WEBPACK_IMPORTED_MODULE_0__[/* auth */ "b"].currentUser.updateProfile({
    displayName: name,
    photoURL: photoUrl
  });
};
var getToken = function getToken() {
  return _firebase__WEBPACK_IMPORTED_MODULE_0__[/* auth */ "b"].currentUser.getIdToken();
};
var doSignOut = function doSignOut() {
  return _firebase__WEBPACK_IMPORTED_MODULE_0__[/* auth */ "b"].signOut();
};
var getUserName = function getUserName() {
  return _firebase__WEBPACK_IMPORTED_MODULE_0__[/* auth */ "b"].currentUser ? _firebase__WEBPACK_IMPORTED_MODULE_0__[/* auth */ "b"].currentUser.displayName : "";
};
var getProfilePhotoUrl = function getProfilePhotoUrl() {
  return _firebase__WEBPACK_IMPORTED_MODULE_0__[/* auth */ "b"].currentUser ? _firebase__WEBPACK_IMPORTED_MODULE_0__[/* auth */ "b"].currentUser.photoURL : "";
};
var getUserId = function getUserId() {
  return _firebase__WEBPACK_IMPORTED_MODULE_0__[/* auth */ "b"].currentUser ? _firebase__WEBPACK_IMPORTED_MODULE_0__[/* auth */ "b"].currentUser.uid : "";
};
var doGoogleSignIn = function doGoogleSignIn(isMobile) {
  var provider = new _firebase__WEBPACK_IMPORTED_MODULE_0__[/* Auth */ "a"].GoogleAuthProvider();
  return !isMobile ? _firebase__WEBPACK_IMPORTED_MODULE_0__[/* auth */ "b"].signInWithPopup(provider) : _firebase__WEBPACK_IMPORTED_MODULE_0__[/* auth */ "b"].signInWithRedirect(provider);
};

/***/ }),
/* 31 */,
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);




/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME", function() { return NAME; });
var NAME = "app";

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(14);

// EXTERNAL MODULE: external "@material-ui/core/LinearProgress"
var LinearProgress_ = __webpack_require__(71);
var LinearProgress_default = /*#__PURE__*/__webpack_require__.n(LinearProgress_);

// EXTERNAL MODULE: external "@material-ui/core/CircularProgress"
var CircularProgress_ = __webpack_require__(72);
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);

// CONCATENATED MODULE: ./modules/app/components/PageLoader/PageLoader.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var PageLoader_PageLoader =
/*#__PURE__*/
function (_Component) {
  _inherits(PageLoader, _Component);

  function PageLoader() {
    _classCallCheck(this, PageLoader);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageLoader).apply(this, arguments));
  }

  _createClass(PageLoader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          _this$props$size = _this$props.size,
          size = _this$props$size === void 0 ? 40 : _this$props$size;
      return type && type === "circular" ? external_react_default.a.createElement(CircularProgress_default.a, {
        color: "secondary",
        size: size
      }) : external_react_default.a.createElement(LinearProgress_default.a, {
        color: "secondary"
      });
    }
  }]);

  return PageLoader;
}(external_react_["Component"]);

/* harmony default export */ var components_PageLoader_PageLoader = (PageLoader_PageLoader);
// CONCATENATED MODULE: ./modules/app/components/PageLoader/index.js

/* harmony default export */ var components_PageLoader = __webpack_exports__["a"] = (components_PageLoader_PageLoader);

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles/withStyles"
var withStyles_ = __webpack_require__(7);
var withStyles_default = /*#__PURE__*/__webpack_require__.n(withStyles_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__(39);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// CONCATENATED MODULE: ./components/GridItem/GridItem.js
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // @material-ui/core components



var style = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto"
  }
};

function GridItem(_ref) {
  var props = _extends({}, _ref);

  var classes = props.classes,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, ["classes", "children", "className"]);

  return external_react_default.a.createElement(Grid_default.a, _extends({
    item: true
  }, rest, {
    className: classes.grid + " " + className
  }), children);
}

/* harmony default export */ var GridItem_GridItem = (withStyles_default()(style)(GridItem));
// CONCATENATED MODULE: ./components/GridItem/index.js

/* harmony default export */ var components_GridItem = __webpack_exports__["a"] = (GridItem_GridItem);

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("react-popper");

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (function (res, target) {
  if (res) {
    // server
    // 303: "See other"
    res.writeHead(303, {
      Location: target
    });
    res.end();
  } else if (window) {
    // In the browser, we just pretend like this never even happened ;)
    // Router.replaceRoute(target);
    window.location.href = target;
  }
});

/***/ }),
/* 42 */,
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(8);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(14);

// EXTERNAL MODULE: external "@material-ui/core/styles/withStyles"
var withStyles_ = __webpack_require__(7);
var withStyles_default = /*#__PURE__*/__webpack_require__.n(withStyles_);

// CONCATENATED MODULE: ./components/Card/cardStyle.js
var cardStyle = {
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff",
    width: "100%",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    transition: "all 300ms linear"
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardCarousel: {
    overflow: "hidden"
  }
};
/* harmony default export */ var Card_cardStyle = (cardStyle);
// CONCATENATED MODULE: ./components/Card/Card.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components



function Card(_ref) {
  var _classNames;

  var props = _extends({}, _ref);

  var classes = props.classes,
      className = props.className,
      children = props.children,
      plain = props.plain,
      carousel = props.carousel,
      rest = _objectWithoutProperties(props, ["classes", "className", "children", "plain", "carousel"]);

  var cardClasses = external_classnames_default()((_classNames = {}, _defineProperty(_classNames, classes.card, true), _defineProperty(_classNames, classes.cardPlain, plain), _defineProperty(_classNames, classes.cardCarousel, carousel), _defineProperty(_classNames, className, className !== undefined), _classNames));
  return external_react_default.a.createElement("div", _extends({
    className: cardClasses
  }, rest), children);
}

/* harmony default export */ var Card_Card = (withStyles_default()(Card_cardStyle)(Card));
// CONCATENATED MODULE: ./components/Card/cardBodyStyle.js
var cardBodyStyle = {
  cardBody: {
    padding: "0.9375rem 1.875rem",
    flex: "1 1 auto"
  }
};
/* harmony default export */ var Card_cardBodyStyle = (cardBodyStyle);
// CONCATENATED MODULE: ./components/Card/CardBody.js
function CardBody_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CardBody_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CardBody_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CardBody_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CardBody_extends() { CardBody_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CardBody_extends.apply(this, arguments); }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components



function CardBody(_ref) {
  var _classNames;

  var props = CardBody_extends({}, _ref);

  var classes = props.classes,
      className = props.className,
      children = props.children,
      rest = CardBody_objectWithoutProperties(props, ["classes", "className", "children"]);

  var cardBodyClasses = external_classnames_default()((_classNames = {}, CardBody_defineProperty(_classNames, classes.cardBody, true), CardBody_defineProperty(_classNames, className, className !== undefined), _classNames));
  return external_react_default.a.createElement("div", CardBody_extends({
    className: cardBodyClasses
  }, rest), children);
}

/* harmony default export */ var Card_CardBody = (withStyles_default()(Card_cardBodyStyle)(CardBody));
// CONCATENATED MODULE: ./components/Card/cardFooterStyle.js
var cardFooterStyle = {
  cardFooter: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: "0.9375rem 1.875rem"
  }
};
/* harmony default export */ var Card_cardFooterStyle = (cardFooterStyle);
// CONCATENATED MODULE: ./components/Card/CardFooter.js
function CardFooter_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CardFooter_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CardFooter_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CardFooter_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CardFooter_extends() { CardFooter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CardFooter_extends.apply(this, arguments); }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components



function CardFooter(_ref) {
  var _classNames;

  var props = CardFooter_extends({}, _ref);

  var classes = props.classes,
      className = props.className,
      children = props.children,
      rest = CardFooter_objectWithoutProperties(props, ["classes", "className", "children"]);

  var cardFooterClasses = external_classnames_default()((_classNames = {}, CardFooter_defineProperty(_classNames, classes.cardFooter, true), CardFooter_defineProperty(_classNames, className, className !== undefined), _classNames));
  return external_react_default.a.createElement("div", CardFooter_extends({
    className: cardFooterClasses
  }, rest), children);
}

/* harmony default export */ var Card_CardFooter = (withStyles_default()(Card_cardFooterStyle)(CardFooter));
// EXTERNAL MODULE: ./assets/jss/material-kit-react.js
var material_kit_react = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Card/cardHeaderStyle.js

var cardHeaderStyle = {
  cardHeader: {
    borderRadius: "3px",
    padding: "1rem 15px",
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "-30px",
    border: "0",
    marginBottom: "0"
  },
  cardHeaderPlain: {
    marginLeft: "0px",
    marginRight: "0px"
  },
  warningCardHeader: material_kit_react["w" /* warningCardHeader */],
  successCardHeader: material_kit_react["r" /* successCardHeader */],
  dangerCardHeader: material_kit_react["d" /* dangerCardHeader */],
  infoCardHeader: material_kit_react["j" /* infoCardHeader */],
  primaryCardHeader: material_kit_react["m" /* primaryCardHeader */]
};
/* harmony default export */ var Card_cardHeaderStyle = (cardHeaderStyle);
// CONCATENATED MODULE: ./components/Card/CardHeader.js
function CardHeader_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CardHeader_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CardHeader_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CardHeader_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CardHeader_extends() { CardHeader_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CardHeader_extends.apply(this, arguments); }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components



function CardHeader(_ref) {
  var _classNames;

  var props = CardHeader_extends({}, _ref);

  var classes = props.classes,
      className = props.className,
      children = props.children,
      color = props.color,
      plain = props.plain,
      rest = CardHeader_objectWithoutProperties(props, ["classes", "className", "children", "color", "plain"]);

  var cardHeaderClasses = external_classnames_default()((_classNames = {}, CardHeader_defineProperty(_classNames, classes.cardHeader, true), CardHeader_defineProperty(_classNames, classes[color + "CardHeader"], color), CardHeader_defineProperty(_classNames, classes.cardHeaderPlain, plain), CardHeader_defineProperty(_classNames, className, className !== undefined), _classNames));
  return external_react_default.a.createElement("div", CardHeader_extends({
    className: cardHeaderClasses
  }, rest), children);
}

/* harmony default export */ var Card_CardHeader = (withStyles_default()(Card_cardHeaderStyle)(CardHeader));
// CONCATENATED MODULE: ./components/Card/index.js
/* concated harmony reexport CardBody */__webpack_require__.d(__webpack_exports__, "a", function() { return Card_CardBody; });
/* concated harmony reexport CardFooter */__webpack_require__.d(__webpack_exports__, "b", function() { return Card_CardFooter; });
/* concated harmony reexport CardHeader */__webpack_require__.d(__webpack_exports__, "c", function() { return Card_CardHeader; });




/* harmony default export */ var components_Card = __webpack_exports__["d"] = (Card_Card);


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

const i18n = __webpack_require__(79);
const XHR = __webpack_require__(80);
const LanguageDetector = __webpack_require__(81);

const options = {
  fallbackLng: "en",
  load: "languageOnly", // we only provide en, de -> no region specific locals like en-US, de-DE

  // have a common namespace used around the full app
  ns: ["common"],
  defaultNS: "common",

  debug: false, //process.env.NODE_ENV !== 'production',
  saveMissing: true,

  interpolation: {
    formatSeparator: ",",
    format: (value, format, lng) => {
      if (format === "uppercase") return value.toUpperCase();
      return value;
    }
  }
  
}


// for browser use xhr backend to load translations and browser lng detector
if (false) {}

// initialize if not already initialized
if (!i18n.isInitialized) i18n.init(options);

// a simple helper to getInitialProps passed on loaded i18n data
i18n.getInitialProps = (req, namespaces) => {
  if (!namespaces) namespaces = i18n.options.defaultNS;
  if (typeof namespaces === "string") namespaces = [namespaces];

  req.i18n.toJSON = () => null; // do not serialize i18next instance and send to client

  const initialI18nStore = {};
  req.i18n.languages.forEach((l) => {
    initialI18nStore[l] = {};
    namespaces.forEach((ns) => {
      initialI18nStore[l][ns] = (req.i18n.services.resourceStore.data[l] || {})[ns] || {};
    })
  })

  return {
    i18n: req.i18n, // use the instance on req - fixed language on request (avoid issues in race conditions with lngs of different users)
    initialI18nStore,
    initialLanguage: req.i18n.language
  };
};

module.exports = i18n;

/***/ }),
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */
/***/ (function(module, exports) {

module.exports = require("google-maps-react");

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(14);

// EXTERNAL MODULE: external "@material-ui/core/styles/withStyles"
var withStyles_ = __webpack_require__(7);
var withStyles_default = /*#__PURE__*/__webpack_require__.n(withStyles_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__(39);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// CONCATENATED MODULE: ./components/GridContainer/GridContainer.js
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // nodejs library to set properties for components

 // @material-ui/core components



var style = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto"
  }
};

function GridContainer(_ref) {
  var props = _extends({}, _ref);

  var classes = props.classes,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, ["classes", "children", "className"]);

  return external_react_default.a.createElement(Grid_default.a, _extends({
    container: true
  }, rest, {
    className: classes.grid + " " + className
  }), children);
}

GridContainer.defaultProps = {
  className: ""
};
/* harmony default export */ var GridContainer_GridContainer = (withStyles_default()(style)(GridContainer));
// CONCATENATED MODULE: ./components/GridContainer/index.js

/* harmony default export */ var components_GridContainer = __webpack_exports__["a"] = (GridContainer_GridContainer);

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(15);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(8);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(14);

// EXTERNAL MODULE: external "react-geosuggest"
var external_react_geosuggest_ = __webpack_require__(68);
var external_react_geosuggest_default = /*#__PURE__*/__webpack_require__.n(external_react_geosuggest_);

// EXTERNAL MODULE: external "@material-ui/icons/Search"
var Search_ = __webpack_require__(53);
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_);

// EXTERNAL MODULE: external "@material-ui/icons/LocationCity"
var LocationCity_ = __webpack_require__(69);
var LocationCity_default = /*#__PURE__*/__webpack_require__.n(LocationCity_);

// CONCATENATED MODULE: ./components/GoogleAutoComplete/googleAutoCompleteStyle.js
var googleAutoCompleteStyle = {
  main: {
    position: 'relative',
    width: '100%',
    zIndex: 700
  },
  searchIcon: {
    position: 'absolute',
    top: '15px',
    left: '10px'
  },
  suggestInput: {
    width: '100%',
    border: "1px solid #BDBDBD",
    borderRadius: '50px',
    height: '50px',
    padding: '10px 20px',
    font: 'inherit',
    zIndex: 200,
    paddingLeft: '50px',
    "&:focus": {
      outline: "none"
    }
  },
  suggestList: {
    listStyle: 'none',
    backgroundColor: '#fff',
    border: '1px solid #bdbdbd',
    maxHeight: '25em',
    transition: 'max-height 0.2s , border 0.2s',
    padding: '10px 20px',
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '-1px',
    borderTopWidth: 0,
    overflowX: 'hidden',
    overflowY: 'visible',
    position: "absolute"
  },
  suggestItemClassName: {
    padding: '10px 0px',
    cursor: 'pointer',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'flex-start',
    '&:hover , &:focus': {
      backgroundColor: '#F5F5F5'
    }
  },
  suggestActiveClass: {
    backgroundColor: '#F5F5F5'
  },
  label: {
    color: '#000',
    marginLeft: '10px'
  },
  suggestHiddenList: {
    maxHeight: 0,
    overflow: 'hidden',
    borderWidth: 0,
    height: 0,
    padding: 0
  }
};
/* harmony default export */ var GoogleAutoComplete_googleAutoCompleteStyle = (googleAutoCompleteStyle);
// CONCATENATED MODULE: ./components/GoogleAutoComplete/GoogleAutoComplete.js
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










var GoogleAutoComplete_GoogleAutoComplete =
/*#__PURE__*/
function (_Component) {
  _inherits(GoogleAutoComplete, _Component);

  function GoogleAutoComplete() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GoogleAutoComplete);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GoogleAutoComplete)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activatedPlaceId: ""
    });

    _defineProperty(_assertThisInitialized(_this), "onActivateSuggest", function (suggest) {
      _this.setState({
        activatedPlaceId: suggest.placeId
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onUpdateSuggests", function (suggests, activeSuggest) {
      _this.setState({
        activatedPlaceId: ""
      });
    });

    return _this;
  }

  _createClass(GoogleAutoComplete, [{
    key: "renderSuggestItem",
    value: function renderSuggestItem(item, classes) {
      var itemClassNames = external_classnames_default()([classes.suggestItemClassName], _defineProperty({}, classes.suggestActiveClass, item && item.placeId === this.state.activatedPlaceId));
      return external_react_default.a.createElement("div", {
        className: itemClassNames
      }, external_react_default.a.createElement(LocationCity_default.a, {
        color: "primary"
      }), " ", external_react_default.a.createElement("span", {
        className: classes.label
      }, item.label));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          searchTypes = _this$props.searchTypes,
          onSuggestSelect = _this$props.onSuggestSelect,
          t = _this$props.t,
          initialValue = _this$props.initialValue,
          placeholder = _this$props.placeholder;
      return external_react_default.a.createElement("div", {
        className: classes.main
      }, external_react_default.a.createElement(Search_default.a, {
        color: "primary",
        classes: {
          root: classes.searchIcon
        }
      }), external_react_default.a.createElement(external_react_geosuggest_default.a, {
        types: searchTypes || null,
        inputClassName: classes.suggestInput,
        suggestsClassName: classes.suggestList,
        suggestsHiddenClassName: classes.suggestHiddenList,
        renderSuggestItem: function renderSuggestItem(item) {
          return _this2.renderSuggestItem(item, classes);
        },
        suggestItemActiveClassName: classes.suggestActiveClass,
        placeholder: placeholder || t("common:searchBoxPlaceHolder"),
        onSuggestSelect: onSuggestSelect,
        initialValue: initialValue || "",
        onActivateSuggest: this.onActivateSuggest,
        onUpdateSuggests: this.onUpdateSuggests
      }));
    }
  }]);

  return GoogleAutoComplete;
}(external_react_["Component"]);

/* harmony default export */ var components_GoogleAutoComplete_GoogleAutoComplete = (Object(core_["withStyles"])(GoogleAutoComplete_googleAutoCompleteStyle)(GoogleAutoComplete_GoogleAutoComplete));
// CONCATENATED MODULE: ./components/GoogleAutoComplete/index.js

/* harmony default export */ var components_GoogleAutoComplete = __webpack_exports__["a"] = (components_GoogleAutoComplete_GoogleAutoComplete);

/***/ }),
/* 55 */,
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getErrorData; });
/* unused harmony export getPendingRequestCount */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hasError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isLoading; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);


var getErrorData = function getErrorData(state) {
  return state.get(_constants__WEBPACK_IMPORTED_MODULE_1__["NAME"]).get("errorData");
};
var getPendingRequestCount = function getPendingRequestCount(state) {
  return state.get(_constants__WEBPACK_IMPORTED_MODULE_1__["NAME"]).get("pendingRequestCount");
};
var hasError = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getErrorData, function (errorData) {
  return errorData != undefined;
});
var isLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPendingRequestCount, function (pendingReqCount) {
  return pendingReqCount > 0;
});

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAgCAYAAACYTcH3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAj9SURBVFhHnVd7jFxVGf/d18zceWx3Z2fbbal90G0xEuqLJjZpSglQI4qmSzRFqSWmaoKJkBYIhhAghmiKaLpt2BYTi4lRCCJapBr/kUQNbRcoTUGwy9pot7vt7nYf05mdmXvn3OPvO3dm2dbdQvg2Z+55fOf7vvO91+rq6dWWZUEBsLVGZAEW/z4q6MZXQObJSCiTprYMbVlFtj0nBzvijyDIYUShPrwgwipmzTc0VppMNRwO+QpEpFcn3RoFCDnmE0TAFq00Dz9IjCbDiJNp5WEszGKUY7KexniQwTjn05GHOilREbCJXxcBLM64FvpX4mGt2rs/fsIVoIkgr61ESTJM4UutJ7ElfxzXpAaQdasoqRTeLi/FixOfxUuTn0HWqZnxYUF4zCnMJRuicn4Uf4uqDV/Nv4beFQdhuSWxK889Dnk2b1l1qqMGrZLYPvBtPD/+OSzxpkDlzwviJnIsD50RZrYATXsLkplycibI44/XPIFbCq8BwQLiU/VGCMFsIDU+dFUgMYm/jK7Dbafuw9LExIxAMemYPiMHKcUH8IbsGAeWYUd0NTqDCBKjxg6tbQtnwza8uOYnuCX/JnQtT4IOiVNX3kWOcWqJr5evrLmvtW3wNrcf570nMRS2co90OVwK5ZC2DIHAdoxz1xwHdoqhl1IqPpTHiUOLEPKlWMW6j/s6X8athT5EYYshICYaCnLYfupuLDp6EKlXf83vL8x6iI5sTEizBbVW3juG+xcfRlmljUOHFEiRtgxZCx9Rm8ytVT1P8Tj2doHGx4BEzYUwg6n120iljS+jgF4Rz41swNaBe1Bwi8jZVdKSV1sYV8QNO/CbriewNX8E0/UMfK/GO5NoOfIr4pcYvg3ic4CtGXZGOC4uxdO4yAh5cMkhSpWKBXECvFlcja399+BA8pdYZE9hBFlUtIsxpPF1qw86eSe29+/AG5XlSCepIXko7/9g8SFDr+kvc8GVBMUkVXtn4QiJJSgwPcuuYNvAd7A4OYG39FV4C/fjOH6MjejHN6yjeMp52lDM+lVG0w7OJbTJnPeFzpTyY8JzgHHgePr/oKiJgnsRS5NjxHSJnMDp8tX4d3URfDvAc7geHVYvLlgpPGvtRy93gAVYj11IMcQHap04XVrGRzC/06GvIp28W6bp4+cL86aOxLH5874wzUMZEQ8YL1iRLJPYAjpdkt8A71Y6GibVyFlVZJhr1+Mh3hD1B3gSm3ACS2mwkIQ13qktFGocdFBqtp2PUzyJeCY0XAaO8BPxRBDbCMAfS0dcyHg/yZWUEJqAZ1WIEHLIWgSWwmrTXzLow6P4HdZiP26iTg5z3zEMmkxikBXDmRHhM3p90vUUnZ4vMyHPr6QR2whBZGEgNUQ25fmSuEYYyhFziiFLU13rD3NXwjCCT03swl/xZ1yHr2EHHsAWg9eNN1CBZ9h/wj/PXzGxizrvj9ZbWCwtVE1esaH4ZXEU6maYaDLVetamOWC4jqsshmrt3IgT2bL0IJYlR5DTVTyPn2M5hvE4bsUKjBvT3K6/h936DyjqDLqSo1ieOWPuiYnPM+eMRVnOxQyNvMIxG0w0Xb7ZBHG4A+dvIFaVmiEWo+ulNXtwvLoSm/RODOp25HXZqL9dVfCKXoPduAGlqo8XiAcmTKMi3t8/cqOhJzAfv3mjSa5kGJo95z9PrMC8SFPVq9Nn8Ns1P8NkNYN96mZkVWhahrLtwqPJ99W+iBdYw1aLVthOGE3w/p5zmw29+UWZR5hmHRG1JW2Fne8xZzhFhMpBnX50e+EoptZ9F91tx1B3NKZ1gm6r8JXW11G+/i50t78OHeZiYt4E7uV9n3TE9LNBVmYIP/7NVG0J5ya4tKm4bcA9eccwC92zXXtwGyu2phMKmMosNUjIsWWA6V2IXc9yh2/ktpSOQ2PrcMd730dnYqpxLxaAElyiCelGGMksXBw5enaaFTTH6pmkMLInjiZh18meZEv/Lvxj8tq4CPJISEnhNMIxD8nXrGcEKeFvxO/u34lFIog8jEOzO5AUIkJJ4EiyMAHEP1vyijAVLQRasX4olHlBqqpckORUs1y0J0rY8M5j+NPEpymQOLS51sCIMc1amHoVg7fxn49gIbUjz05JiyLoM21og37jK2BdTTPFNEi9SXAWSCG8KXoXa/UQM4uDc2yseq97BqlsnR2dEJV7MZiZ5JCyi7tPbMOSRBE+w/rv1kq8aq9EAdMzjOeCeXtg2TzLWvNQdBgPe6w7C+kXskv+tcFWeGtLsOjhOmLK5AtEO+YhtTrCk1mk2kUjQolQruABdRf22TdiCWLfmQvmEIY+RI7/QRt+rw7gy04faj4bJuaSiMyjsoeoIKaIkC6U2QLT1ZneRfNRxUJ4WuoUpWKUOR0sISIQUbyRCp4pb8K3nG8ySU6Ixxm82cwvE4b+wVRe5uhTu7Gq5SyCFhZJClJi46TZrloXHHjZGtxGm+p2VWH7dMxAoz5MQSgEXYxz5hiHOKaFJHA/GUzjRNCFDfa9fGoVrhAkiEJ5RZTesDV/S0iyUQgwoB7BKpb8StpHVCNK3UKaxTI9FcJPTJtqK44q94J/+VBjDsJB0QhB8bUBCedYQgIWTXISd9SkUXUy+CT+i1PqUdYqCwnXRwtrVIbDodZt0y5wXGAF/nh0joI8jBa/giDFIsbszU6B6qdfjPOJdApncQinUI9HB0dngKCfuYVpRtNMZkyLzSiBREoqgrOQLQXxrbxC5WMOOvMXMaQeRE6NY5DdX5lmrhLfzlKqc1Yed+hjeAU/Ys7yoHw+h/RE3WZQjqjqkjH7WYcMmvv8l8lEKRuR2fu2S63xwMkGCEdTxgc1z22XrYOjEOXpf50WXeExbLZOYpg9k6nehZ6D+qfsSLaxGYDNBEZCl3iVgKRHqhk52ljms0Fwp8VDZWGsTrO49APiOnTgGqVL0KzeZUSlkxIXCIvosbrxQ3wB1sa9j+ub8TYbataSy4W4HGady1TEko5QselyI/Yt9AN2DAT2ctJ2CIYgCfJctOWYowNFvIxPwVq292mam9J/ABiaJCjBKAIY+tw0zmkwCIL0ESGFEP8DajQCd1xXN/8AAAAASUVORK5CYII="

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowBack");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ClickAwayListener");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grow");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("react-geosuggest");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocationCity");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADImlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowRDJDM0REMTRBODMxMUUxQjQ3QUNDRTk0ODNBMjY0RiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRDJDM0REMjRBODMxMUUxQjQ3QUNDRTk0ODNBMjY0RiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBEMkMzRENGNEE4MzExRTFCNDdBQ0NFOTQ4M0EyNjRGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBEMkMzREQwNEE4MzExRTFCNDdBQ0NFOTQ4M0EyNjRGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ZjaYRwAABuFJREFUaEPdmltv1EYUx4+9u9mLlEAuFTcFsgGSplJSHkqfaKXSgtSLxEP5BhUfjaqXj8BDQK1ERFX4AgVCQ0jSSgtkk71kb/3/z9heL8lmPbZ56bE9Y8/xzJyfz8x4PLtODyL/A3nvICy+0WhKs9nAcSDFYkEmJiY8bXqSKsj+fk22t7fkzZs3ksvlpFAoyvP159IEiDi6S7vdkanpKfns2jVxXddkTEESg3S7XXn27Jmsr6/jiTclk8mgVFd6SO9hyzgZ6REC1TCF0gFM86ApN2/ckPHxcU1LKolADlotefL4T6lU6AEACAC4scReF4ejxochel3EAOt1elJr1OT297fFoasSSiKQtbU1eft2V7JZAMBohYD98FMfAkfXq8KHUDXT4bV8Pg99VzJuRubKc3L50iW911Zig9y7d0+ffCYDU2NAcO9yYzru4f3NelMuXpyXq1c/0Tw2Equ3ra6uajwIQYMNBK+jQFBcpiNwsRWKefnr6VNNtxVrkHWMQhxOXVQ+6AkaaDyhTzgChPEExNMxS6lUkp2dHVXbiDVItbo/CKH20pLhHds3lHsAAV0Ygjul0WhIqVgyFxZiDdLptBGGPMHAh8ARCYKw0DkDEBqg07vy4Pff9NxGrEH4dqbE6dgqIU8otGbRuxAhxFjc8uqwEWsQDpVmoDMQNCEyhOeJsM47MzovjvNisQah640RyTo2d+8s0Dk6GzB12Io9SDarRmhzUgPUlMjN6TgIxpzaZFmHpViD5LI5bV5JO7aJBiF4zWbLCaetWIPk82NqeBodm7owBIXlctpiK9YgnJrTI5QongjrvDOjQ3QIgnqUmS8U9NpGrEGmpqa0spEQjEM67yzQHQXBnQ9pZnpa02zEatJYqVTk4cM1jI5s9EgIGRpAsDnF8ITZsSF/u92WTzFxXFhYUH0UsfLIo0d/oG7UeJwnyBgTggo+JH6c3X9g93a3AqnX6+bzNGTogCc05m503l2IokFQ6BEHWybjSh3zrqhiBcLq6ZFDEDQ0QXPqF+PrTEK7xXldNLECoa1HQjBGkBoEk5EnPzamaVHECmQao0m3w6q82kPNKQmEP5wHELgeA8QY3llRxQpkZWVZavWauaChCTs2XUxPsE/4EAzqtTpGrau8iCxWICdPnpSV5WWp7lal2WqpMb5xnnm0zNgYpTnBoxQfooUyd3f35Pz5WVla+lB1USXW4gO/4jY3X8njJ0907uWZh8gCItD1IRYXF+WjpSWZmLBf67LyiC8FTCG42tE6OFDj1KQEEAyaKGtx4XIsCEosEF/OnTuHT98OLVMb43RsBp1OT4p4OJOTk6qLI4lArlz5WJtZJIghHRvZdKnVtnO/K4lATpw4IWfOnJYO2vexEJB3OzYDQvTgofxYHv0j+rzqKEkEQvny+nVdA+63eyXAjsCHCHSDEIy5vHTr1ne8SCSJQSjffvO1Ng9bCK7IXP/i81R+L0kFhJ2UUwpjax/iqI7tQ5CPA8Xs7CwTEksqIBT2gZ7jQRzTsX0IE3PEwqiXgqQHwkANxfmQjm2MN7Ef6kdaCpIaiBrJ0Fg6GgKRWd4z10kl9u8jldevZWNjQ16+fCn/7PwrxVLRtzEShK+r1/d1GJ+7cEHm5i7I2bNn9R5biQyyt7cHozfV8FdbW5rm4pM047ji6Or86D6hYUjnYOrMuNvtSBufB20M4+wzp0+dknJ5To+ZmRnNN0qGghxg7kPDNzdhPA4uCPBbmp+6Ln/sDHfsqH0ipPMhjI4PwhTG0Y8H62u18X5C2ZwNz5fLMj9fHjpUHwLhAsML/kKLgrIw2qHhjKGzfU/EgWDnZ8w6HK4vQ0cvGbA2HqIDT5Xl5s2vpFREc/YkAGHmn3/5VReQub4LhbE1MBSx7ghUQZWvQ4KejobQkgJdH4Jl+YcKIq2Lp0znCQrg3Zzy76Op37nzg3zgNb1g1FpdvS9Ztvlc7r1B0BN93aAnNNUrk+oAAjo982Pck8ODHkcTu/vjT0xRCUC20IFdegIZjD2moKMgRr2xvcTgnLphzSl4IGooznU3aQrB94zqcO3dy5BNrIFpEe2mKMj29rZpTshg6jIZDkFEfGNrGNIdB6HGmSzaJ6JAsHCWkEMLevH3BlMMSLVapY2q5E2UQxCQtEcnTVWjcA61DQQfOv8qUqm8ZqoBaTS5oqePm5e4EbHuCEx9QWE2EHq3d08YIijLKAc9Ad0oCOr4Cw0ffq22zxQD0mkzk1c4Y90RmHr6FTNBT0dDpNGxj4KgJ9i4TeE9vO9a1Hog3gxUf7zRHQFyMQ46NmNPZ2zpQ2g2r2D9SwaRQ/e8CzG0Y4djZPRjFqI5oaMneB3ko15E/gMkw51lalZxHwAAAABJRU5ErkJggg=="

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/LinearProgress");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withI18next; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_2__);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var withI18next = function withI18next() {
  var namespaces = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ["common"];
  return function (ComposedComponent) {
    var Extended = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["translate"])(namespaces, {
      i18n: _i18n__WEBPACK_IMPORTED_MODULE_2___default.a,
      wait: false
    })(ComposedComponent);

    Extended.getInitialProps =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
        var composedInitialProps, i18nInitialProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!ComposedComponent.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return ComposedComponent.getInitialProps(ctx);

              case 3:
                _context.t0 = _context.sent;
                _context.next = 7;
                break;

              case 6:
                _context.t0 = {};

              case 7:
                composedInitialProps = _context.t0;
                i18nInitialProps = ctx.req ? _i18n__WEBPACK_IMPORTED_MODULE_2___default.a.getInitialProps(ctx.req, namespaces) : {};
                return _context.abrupt("return", _objectSpread({}, composedInitialProps, i18nInitialProps));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    return Extended;
  };
};

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(14);

// EXTERNAL MODULE: external "@material-ui/core/Avatar"
var Avatar_ = __webpack_require__(37);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(15);

// EXTERNAL MODULE: ../routes.js
var routes = __webpack_require__(18);

// EXTERNAL MODULE: ./lib/firebase/index.js
var firebase = __webpack_require__(32);

// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(20);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(28);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(8);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles/withStyles"
var withStyles_ = __webpack_require__(7);
var withStyles_default = /*#__PURE__*/__webpack_require__.n(withStyles_);

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__(57);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__(58);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__(23);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(27);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Hidden"
var Hidden_ = __webpack_require__(21);
var Hidden_default = /*#__PURE__*/__webpack_require__.n(Hidden_);

// EXTERNAL MODULE: external "@material-ui/core/Drawer"
var Drawer_ = __webpack_require__(59);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);

// EXTERNAL MODULE: ./assets/img/appIcon.png
var appIcon = __webpack_require__(60);
var appIcon_default = /*#__PURE__*/__webpack_require__.n(appIcon);

// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var Menu_ = __webpack_require__(45);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);

// EXTERNAL MODULE: external "@material-ui/icons/ArrowBack"
var ArrowBack_ = __webpack_require__(61);
var ArrowBack_default = /*#__PURE__*/__webpack_require__.n(ArrowBack_);

// EXTERNAL MODULE: ./assets/jss/material-kit-react.js
var material_kit_react = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Header/headerStyle.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var headerStyle_headerStyle = function headerStyle(theme) {
  return {
    appBar: _defineProperty({
      display: "flex",
      border: "0",
      borderRadius: "3px",
      padding: "0.625rem 0",
      marginBottom: "20px",
      color: "#555",
      width: "100%",
      backgroundColor: "#fff",
      boxShadow: "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
      transition: "all 150ms ease 0s",
      alignItems: "center",
      flexFlow: "row nowrap",
      justifyContent: "flex-start",
      position: "relative"
    }, theme.breakpoints.down("sm"), {
      padding: "0.625rem 0",
      marginBottom: "0px"
    }),
    absolute: {
      position: "absolute"
    },
    fixed: {
      position: "fixed",
      zIndex: "1200"
    },
    container: _objectSpread({}, material_kit_react["b" /* container */], _defineProperty({
      minHeight: "50px",
      flex: "1",
      alignItems: "center",
      marginLeft: "30px",
      marginRight: "30px",
      justifyContent: "space-between",
      display: "flex",
      flexWrap: "nowrap"
    }, theme.breakpoints.down("sm"), {
      marginLeft: "0px",
      marginRight: "0px"
    })),
    flex: {
      flex: 1
    },
    title: _objectSpread({}, material_kit_react["f" /* defaultFont */], _defineProperty({
      lineHeight: "30px",
      fontSize: "18px",
      borderRadius: "3px",
      textTransform: "none",
      color: "inherit",
      "&:hover,&:focus": {
        color: "inherit",
        background: "transparent"
      }
    }, theme.breakpoints.down("sm"), {
      lineHeight: "10px",
      fontSize: "18px"
    })),
    appResponsive: {
      margin: "0px"
    },
    appIcon: {
      marginRight: "10px"
    },
    primary: {
      backgroundColor: material_kit_react["n" /* primaryColor */],
      color: "#FFFFFF",
      boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(156, 39, 176, 0.46)"
    },
    info: {
      backgroundColor: material_kit_react["k" /* infoColor */],
      color: "#FFFFFF",
      boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 188, 212, 0.46)"
    },
    success: {
      backgroundColor: material_kit_react["s" /* successColor */],
      color: "#FFFFFF",
      boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(76, 175, 80, 0.46)"
    },
    warning: {
      backgroundColor: material_kit_react["x" /* warningColor */],
      color: "#FFFFFF",
      boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(255, 152, 0, 0.46)"
    },
    danger: {
      backgroundColor: material_kit_react["e" /* dangerColor */],
      color: "#FFFFFF",
      boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(244, 67, 54, 0.46)"
    },
    rose: {
      backgroundColor: material_kit_react["p" /* roseColor */],
      color: "#FFFFFF",
      boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(233, 30, 99, 0.46)"
    },
    transparent: {
      backgroundColor: "transparent !important",
      boxShadow: "none",
      paddingTop: "25px",
      color: "#FFFFFF"
    },
    dark: {
      color: "#FFFFFF",
      backgroundColor: "#212121 !important",
      boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)"
    },
    white: {
      border: "0",
      padding: "0.625rem 0",
      marginBottom: "20px",
      color: "#555",
      backgroundColor: "#fff !important",
      boxShadow: "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)"
    },
    drawerPaper: _objectSpread({
      border: "none",
      bottom: "0",
      transitionProperty: "top, bottom, width",
      transitionDuration: ".2s, .2s, .35s",
      transitionTimingFunction: "linear, linear, ease",
      width: material_kit_react["g" /* drawerWidth */]
    }, material_kit_react["a" /* boxShadow */], {
      position: "fixed",
      display: "block",
      top: "0",
      height: "100vh",
      maxHeight: "1200px",
      left: "0",
      visibility: "visible",
      overflowY: "visible",
      borderTop: "none",
      textAlign: "left",
      paddingRight: "0px",
      paddingLeft: "0",
      zIndex: 9999
    }, material_kit_react["u" /* transition */]),
    childrens: _defineProperty({
      marginLeft: "20px",
      width: "60%",
      display: "inline-block"
    }, theme.breakpoints.down("sm"), {
      marginLeft: "0px"
    }),
    sidebar: {
      display: "inline-block"
    }
  };
};

/* harmony default export */ var Header_headerStyle = (headerStyle_headerStyle);
// CONCATENATED MODULE: ./components/Header/Header.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function Header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components









 // @material-ui/icons


 // core components



var Header_Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));
    _this.state = {
      mobileOpen: false
    };
    _this.handleDrawerToggle = _this.handleDrawerToggle.bind(_assertThisInitialized(_this));
    _this.headerColorChange = _this.headerColorChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Header, [{
    key: "handleDrawerToggle",
    value: function handleDrawerToggle() {
      this.setState({
        mobileOpen: !this.state.mobileOpen
      });
    }
  }, {
    key: "handleBackNavigation",
    value: function handleBackNavigation() {
      routes["Router"].back();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.changeColorOnScroll) {
        window.addEventListener("scroll", this.headerColorChange);
      }
    }
  }, {
    key: "headerColorChange",
    value: function headerColorChange() {
      var _this$props = this.props,
          classes = _this$props.classes,
          color = _this$props.color,
          changeColorOnScroll = _this$props.changeColorOnScroll;
      var windowsScrollTop = window.pageYOffset;

      if (windowsScrollTop > changeColorOnScroll.height) {
        document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
        document.body.getElementsByTagName("header")[0].classList.add(classes[changeColorOnScroll.color]);
      } else {
        document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
        document.body.getElementsByTagName("header")[0].classList.remove(classes[changeColorOnScroll.color]);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.changeColorOnScroll) {
        window.removeEventListener("scroll", this.headerColorChange);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props2 = this.props,
          classes = _this$props2.classes,
          color = _this$props2.color,
          rightLinks = _this$props2.rightLinks,
          leftLinks = _this$props2.leftLinks,
          brand = _this$props2.brand,
          fixed = _this$props2.fixed,
          absolute = _this$props2.absolute,
          children = _this$props2.children,
          drawerLinks = _this$props2.drawerLinks,
          backNavigation = _this$props2.backNavigation;
      var appBarClasses = external_classnames_default()((_classNames = {}, Header_defineProperty(_classNames, classes.appBar, true), Header_defineProperty(_classNames, classes[color], color), Header_defineProperty(_classNames, classes.absolute, absolute), Header_defineProperty(_classNames, classes.fixed, fixed), _classNames));
      var brandComponent = external_react_default.a.createElement(link_default.a, {
        href: "/mypage"
      }, external_react_default.a.createElement(Button_default.a, {
        className: classes.title
      }, external_react_default.a.createElement("img", {
        src: appIcon_default.a,
        className: classes.appIcon
      }), external_react_default.a.createElement(Hidden_default.a, {
        smDown: true,
        implementation: "css"
      }, brand)));
      var childrenComponent = children ? external_react_default.a.createElement("div", {
        className: classes.childrens
      }, children) : null;
      return external_react_default.a.createElement(AppBar_default.a, {
        className: appBarClasses
      }, external_react_default.a.createElement(Toolbar_default.a, {
        className: classes.container
      }, external_react_default.a.createElement("div", {
        className: classes.flex
      }, leftLinks !== undefined ? external_react_default.a.createElement("div", null, external_react_default.a.createElement(Hidden_default.a, {
        smUp: true,
        implementation: "css"
      }, external_react_default.a.createElement(IconButton_default.a, {
        color: "inherit",
        "aria-label": "open drawer",
        onClick: this.handleDrawerToggle
      }, external_react_default.a.createElement(Menu_default.a, null))), external_react_default.a.createElement(Hidden_default.a, {
        smDown: true,
        implementation: "css"
      }, external_react_default.a.createElement(external_react_default.a.Fragment, null, brandComponent, childrenComponent))) : external_react_default.a.createElement(external_react_default.a.Fragment, null, rightLinks && external_react_default.a.createElement("div", {
        className: classes.sidebar
      }, external_react_default.a.createElement(Hidden_default.a, {
        mdUp: true,
        implementation: "css"
      }, backNavigation ? external_react_default.a.createElement(IconButton_default.a, {
        color: "inherit",
        "aria-label": "go back",
        onClick: this.handleBackNavigation
      }, external_react_default.a.createElement(ArrowBack_default.a, null)) : drawerLinks ? external_react_default.a.createElement(IconButton_default.a, {
        color: "inherit",
        "aria-label": "open drawer",
        onClick: this.handleDrawerToggle
      }, external_react_default.a.createElement(Menu_default.a, null)) : null)), brandComponent, childrenComponent)), external_react_default.a.createElement(Hidden_default.a, {
        smDown: true,
        implementation: "css"
      }, rightLinks)), drawerLinks && external_react_default.a.createElement(Hidden_default.a, {
        smUp: true,
        implementation: "css"
      }, external_react_default.a.createElement(Drawer_default.a, {
        variant: "temporary",
        anchor: "left",
        open: this.state.mobileOpen,
        classes: {
          paper: classes.drawerPaper
        },
        onClose: this.handleDrawerToggle
      }, external_react_default.a.createElement("div", {
        className: classes.appResponsive
      }, drawerLinks))));
    }
  }]);

  return Header;
}(external_react_default.a.Component);

Header_Header.defaultProp = {
  color: "white"
};
/* harmony default export */ var components_Header_Header = (withStyles_default()(Header_headerStyle)(Header_Header));
// CONCATENATED MODULE: ./components/Header/index.js

/* harmony default export */ var components_Header = (components_Header_Header);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(35);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__(62);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__(22);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "@material-ui/core/Tooltip"
var Tooltip_ = __webpack_require__(63);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);

// EXTERNAL MODULE: external "react-popper"
var external_react_popper_ = __webpack_require__(40);

// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__(44);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);

// EXTERNAL MODULE: external "@material-ui/core/MenuList"
var MenuList_ = __webpack_require__(64);
var MenuList_default = /*#__PURE__*/__webpack_require__.n(MenuList_);

// EXTERNAL MODULE: external "@material-ui/core/ClickAwayListener"
var ClickAwayListener_ = __webpack_require__(65);
var ClickAwayListener_default = /*#__PURE__*/__webpack_require__.n(ClickAwayListener_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__(52);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/Grow"
var Grow_ = __webpack_require__(66);
var Grow_default = /*#__PURE__*/__webpack_require__.n(Grow_);

// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__(67);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: ./components/CustomButtons/index.js + 2 modules
var CustomButtons = __webpack_require__(17);

// CONCATENATED MODULE: ./components/CustomDropdown/customDropdownStyle.js
function customDropdownStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { customDropdownStyle_defineProperty(target, key, source[key]); }); } return target; }

function customDropdownStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var customDropdownStyle_customDropdownStyle = function customDropdownStyle(theme) {
  return {
    popperClose: {
      pointerEvents: "none"
    },
    dropdown: {
      borderRadius: "3px",
      border: "0",
      boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
      top: "100%",
      zIndex: "1000",
      minWidth: "160px",
      padding: "5px 0",
      margin: "2px 0 0",
      fontSize: "14px",
      textAlign: "left",
      listStyle: "none",
      backgroundColor: "#fff",
      backgroundClip: "padding-box"
    },
    menuList: {
      padding: "0"
    },
    pooperResponsive: customDropdownStyle_defineProperty({
      zIndex: "1200"
    }, theme.breakpoints.down("sm"), {
      zIndex: "1640",
      position: "static",
      float: "none",
      width: "auto",
      marginTop: "0",
      backgroundColor: "transparent",
      border: "0",
      boxShadow: "none",
      color: "black"
    }),
    dropdownItem: customDropdownStyle_objectSpread({}, material_kit_react["f" /* defaultFont */], {
      fontSize: "13px",
      padding: "10px 20px",
      margin: "0 5px",
      borderRadius: "2px",
      position: "relative",
      transition: "all 150ms linear",
      display: "block",
      clear: "both",
      fontWeight: "400",
      height: "fit-content",
      color: "#333",
      whiteSpace: "nowrap"
    }),
    blackHover: {
      "&:hover": {
        boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(33, 33, 33, 0.4)",
        backgroundColor: "#212121",
        color: "#fff"
      }
    },
    primaryHover: {
      "&:hover": customDropdownStyle_objectSpread({
        backgroundColor: material_kit_react["n" /* primaryColor */],
        color: "#FFFFFF"
      }, material_kit_react["l" /* primaryBoxShadow */])
    },
    infoHover: {
      "&:hover": customDropdownStyle_objectSpread({
        backgroundColor: material_kit_react["k" /* infoColor */],
        color: "#FFFFFF"
      }, material_kit_react["i" /* infoBoxShadow */])
    },
    successHover: {
      "&:hover": customDropdownStyle_objectSpread({
        backgroundColor: material_kit_react["s" /* successColor */],
        color: "#FFFFFF"
      }, material_kit_react["q" /* successBoxShadow */])
    },
    warningHover: {
      "&:hover": customDropdownStyle_objectSpread({
        backgroundColor: material_kit_react["x" /* warningColor */],
        color: "#FFFFFF"
      }, material_kit_react["v" /* warningBoxShadow */])
    },
    dangerHover: {
      "&:hover": customDropdownStyle_objectSpread({
        backgroundColor: material_kit_react["e" /* dangerColor */],
        color: "#FFFFFF"
      }, material_kit_react["c" /* dangerBoxShadow */])
    },
    roseHover: {
      "&:hover": customDropdownStyle_objectSpread({
        backgroundColor: material_kit_react["p" /* roseColor */],
        color: "#FFFFFF"
      }, material_kit_react["o" /* roseBoxShadow */])
    },
    dropdownItemRTL: {
      textAlign: "right"
    },
    dropdownDividerItem: {
      margin: "5px 0",
      backgroundColor: "rgba(0, 0, 0, 0.12)",
      height: "1px",
      overflow: "hidden"
    },
    buttonIcon: {
      width: "20px",
      height: "20px"
    },
    caret: {
      transition: "all 150ms ease-in",
      display: "inline-block",
      width: "0",
      height: "0",
      marginLeft: "4px",
      verticalAlign: "middle",
      borderTop: "4px solid",
      borderRight: "4px solid transparent",
      borderLeft: "4px solid transparent"
    },
    caretActive: {
      transform: "rotate(180deg)"
    },
    caretRTL: {
      marginRight: "4px"
    },
    dropdownHeader: {
      display: "block",
      padding: "0.1875rem 1.25rem",
      fontSize: "0.75rem",
      lineHeight: "1.428571",
      color: "#777",
      whiteSpace: "nowrap",
      fontWeight: "inherit",
      marginTop: "10px",
      "&:hover,&:focus": {
        backgroundColor: "transparent",
        cursor: "auto"
      }
    },
    noLiPadding: {
      padding: "0"
    }
  };
};

/* harmony default export */ var CustomDropdown_customDropdownStyle = (customDropdownStyle_customDropdownStyle);
// CONCATENATED MODULE: ./components/CustomDropdown/CustomDropdown.js
function CustomDropdown_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CustomDropdown_typeof = function _typeof(obj) { return typeof obj; }; } else { CustomDropdown_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CustomDropdown_typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function CustomDropdown_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CustomDropdown_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CustomDropdown_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CustomDropdown_createClass(Constructor, protoProps, staticProps) { if (protoProps) CustomDropdown_defineProperties(Constructor.prototype, protoProps); if (staticProps) CustomDropdown_defineProperties(Constructor, staticProps); return Constructor; }

function CustomDropdown_possibleConstructorReturn(self, call) { if (call && (CustomDropdown_typeof(call) === "object" || typeof call === "function")) { return call; } return CustomDropdown_assertThisInitialized(self); }

function CustomDropdown_getPrototypeOf(o) { CustomDropdown_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CustomDropdown_getPrototypeOf(o); }

function CustomDropdown_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CustomDropdown_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CustomDropdown_setPrototypeOf(subClass, superClass); }

function CustomDropdown_setPrototypeOf(o, p) { CustomDropdown_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CustomDropdown_setPrototypeOf(o, p); }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components


 // @material-ui/core components







 // core components




var CustomDropdown_CustomDropdown =
/*#__PURE__*/
function (_React$Component) {
  CustomDropdown_inherits(CustomDropdown, _React$Component);

  function CustomDropdown(props) {
    var _this;

    CustomDropdown_classCallCheck(this, CustomDropdown);

    _this = CustomDropdown_possibleConstructorReturn(this, CustomDropdown_getPrototypeOf(CustomDropdown).call(this, props));
    _this.state = {
      open: false
    };
    _this.handleClick = _this.handleClick.bind(CustomDropdown_assertThisInitialized(_this));
    _this.handleClose = _this.handleClose.bind(CustomDropdown_assertThisInitialized(_this));
    return _this;
  }

  CustomDropdown_createClass(CustomDropdown, [{
    key: "handleClick",
    value: function handleClick() {
      this.setState({
        open: true
      });
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames,
          _classNames2,
          _classNames3,
          _this2 = this;

      var open = this.state.open;
      var _this$props = this.props,
          classes = _this$props.classes,
          buttonText = _this$props.buttonText,
          buttonIcon = _this$props.buttonIcon,
          dropdownList = _this$props.dropdownList,
          buttonProps = _this$props.buttonProps,
          dropup = _this$props.dropup,
          dropdownHeader = _this$props.dropdownHeader,
          caret = _this$props.caret,
          hoverColor = _this$props.hoverColor,
          left = _this$props.left,
          rtlActive = _this$props.rtlActive,
          noLiPadding = _this$props.noLiPadding,
          avatar = _this$props.avatar;
      var caretClasses = external_classnames_default()((_classNames = {}, CustomDropdown_defineProperty(_classNames, classes.caret, true), CustomDropdown_defineProperty(_classNames, classes.caretActive, open), CustomDropdown_defineProperty(_classNames, classes.caretRTL, rtlActive), _classNames));
      var dropdownItem = external_classnames_default()((_classNames2 = {}, CustomDropdown_defineProperty(_classNames2, classes.dropdownItem, true), CustomDropdown_defineProperty(_classNames2, classes[hoverColor + "Hover"], true), CustomDropdown_defineProperty(_classNames2, classes.noLiPadding, noLiPadding), CustomDropdown_defineProperty(_classNames2, classes.dropdownItemRTL, rtlActive), _classNames2));
      return external_react_default.a.createElement(external_react_popper_["Manager"], null, external_react_default.a.createElement(external_react_popper_["Target"], null, external_react_default.a.createElement(CustomButtons["a" /* default */], _extends({
        "aria-label": "Notifications",
        "aria-owns": open ? "menu-list" : null,
        "aria-haspopup": "true"
      }, buttonProps, {
        onClick: this.handleClick
      }), buttonIcon !== undefined ? external_react_default.a.createElement(this.props.buttonIcon, {
        className: classes.buttonIcon
      }) : null, avatar !== undefined ? avatar : null, buttonText !== undefined ? buttonText : null, caret ? external_react_default.a.createElement("b", {
        className: caretClasses
      }) : null)), external_react_default.a.createElement(external_react_popper_["Popper"], {
        placement: dropup ? left ? "top-end" : "top-start" : left ? "bottom-end" : "bottom-start",
        eventsEnabled: open,
        className: external_classnames_default()((_classNames3 = {}, CustomDropdown_defineProperty(_classNames3, classes.popperClose, !open), CustomDropdown_defineProperty(_classNames3, classes.pooperResponsive, true), _classNames3))
      }, external_react_default.a.createElement(ClickAwayListener_default.a, {
        onClickAway: this.handleClose
      }, external_react_default.a.createElement(Grow_default.a, {
        in: open,
        id: "menu-list",
        style: dropup ? {
          transformOrigin: "0 100% 0"
        } : {
          transformOrigin: "0 0 0"
        }
      }, external_react_default.a.createElement(Paper_default.a, {
        className: classes.dropdown
      }, external_react_default.a.createElement(MenuList_default.a, {
        role: "menu",
        className: classes.menuList
      }, dropdownHeader !== undefined ? external_react_default.a.createElement(MenuItem_default.a, {
        onClick: this.handleClose,
        className: classes.dropdownHeader
      }, dropdownHeader) : null, dropdownList.map(function (prop, key) {
        if (prop.divider) {
          return external_react_default.a.createElement(Divider_default.a, {
            key: key,
            onClick: _this2.handleClose,
            className: classes.dropdownDividerItem
          });
        }

        return external_react_default.a.createElement(MenuItem_default.a, {
          key: key,
          onClick: _this2.handleClose,
          className: dropdownItem
        }, prop);
      })))))));
    }
  }]);

  return CustomDropdown;
}(external_react_default.a.Component);

CustomDropdown_CustomDropdown.defaultProps = {
  caret: true,
  hoverColor: "primary"
};
/* harmony default export */ var components_CustomDropdown_CustomDropdown = (withStyles_default()(CustomDropdown_customDropdownStyle)(CustomDropdown_CustomDropdown));
// CONCATENATED MODULE: ./components/CustomDropdown/index.js

/* harmony default export */ var components_CustomDropdown = (components_CustomDropdown_CustomDropdown);
// CONCATENATED MODULE: ./assets/jss/material-kit-react/tooltipsStyle.js
var tooltipsStyle = {
  tooltip: {
    padding: "10px 15px",
    minWidth: "130px",
    color: "#555555",
    lineHeight: "1.7em",
    background: "#FFFFFF",
    border: "none",
    borderRadius: "3px",
    boxShadow: "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)",
    maxWidth: "200px",
    textAlign: "center",
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: "0.875em",
    fontStyle: "normal",
    fontWeight: "400",
    textShadow: "none",
    textTransform: "none",
    letterSpacing: "normal",
    wordBreak: "normal",
    wordSpacing: "normal",
    wordWrap: "normal",
    whiteSpace: "normal",
    lineBreak: "auto"
  }
};
/* harmony default export */ var material_kit_react_tooltipsStyle = (tooltipsStyle);
// CONCATENATED MODULE: ./components/HeaderLinks/headerLinksStyle.js
function headerLinksStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { headerLinksStyle_defineProperty(target, key, source[key]); }); } return target; }

function headerLinksStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var headerLinksStyle_headerLinksStyle = function headerLinksStyle(theme) {
  return headerLinksStyle_objectSpread({
    list: headerLinksStyle_objectSpread({}, material_kit_react["f" /* defaultFont */], {
      fontSize: "14px",
      margin: 0,
      paddingLeft: "0",
      listStyle: "none",
      paddingTop: "0",
      paddingBottom: "0",
      color: "inherit"
    }),
    listItem: headerLinksStyle_defineProperty({
      float: "left",
      color: "inherit",
      position: "relative",
      display: "block",
      width: "auto",
      margin: "0",
      padding: "0"
    }, theme.breakpoints.down("sm"), {
      width: "100%",
      "&:after": {
        width: "calc(100% - 30px)",
        content: '""',
        display: "block",
        height: "1px",
        marginLeft: "15px",
        backgroundColor: "#e5e5e5"
      }
    }),
    listItemText: {
      padding: "0 !important"
    },
    navLink: headerLinksStyle_defineProperty({
      color: "inherit",
      position: "relative",
      padding: "0.9375rem",
      fontWeight: "400",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "3px",
      lineHeight: "20px",
      textDecoration: "none",
      margin: "0px",
      display: "inline-flex",
      "&:hover,&:focus": {
        color: "inherit",
        background: "rgba(200, 200, 200, 0.2)"
      }
    }, theme.breakpoints.down("sm"), {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start"
      }
    }),
    profile: {
      color: "inherit",
      position: "relative",
      fontWeight: "400",
      fontSize: "14px",
      padding: "0px",
      margin: "20px 0px"
    },
    notificationNavLink: {
      color: "inherit",
      padding: "0.9375rem",
      fontWeight: "400",
      fontSize: "12px",
      textTransform: "uppercase",
      lineHeight: "20px",
      textDecoration: "none",
      margin: "0px",
      display: "inline-flex",
      top: "4px"
    },
    registerNavLink: {
      top: "3px",
      position: "relative",
      fontWeight: "400",
      fontSize: "12px",
      textTransform: "uppercase",
      lineHeight: "20px",
      textDecoration: "none",
      margin: "0px",
      display: "inline-flex"
    },
    navLinkActive: {
      color: "inherit",
      backgroundColor: "rgba(255, 255, 255, 0.1)"
    },
    icons: {
      width: "20px",
      height: "20px",
      marginRight: "3px"
    },
    socialIcons: {
      position: "relative",
      fontSize: "20px !important",
      marginRight: "4px"
    },
    dropdownLink: {
      "&,&:hover,&:focus": {
        color: "inherit",
        textDecoration: "none",
        display: "block",
        padding: "10px 20px"
      }
    }
  }, material_kit_react_tooltipsStyle, {
    marginRight5: {
      marginRight: "5px"
    }
  });
};

/* harmony default export */ var HeaderLinks_headerLinksStyle = (headerLinksStyle_headerLinksStyle);
// CONCATENATED MODULE: ./components/HeaderLinks/HeaderLinks.js
function HeaderLinks_extends() { HeaderLinks_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return HeaderLinks_extends.apply(this, arguments); }

/*eslint-disable*/
 // react components for routing our app without refresh


 // @material-ui/core components




 // core components




/***
 * 
 * {
 *    linkname : {
 *                      icon:'',
 *                      childrens: [
 *                        {
 *                          text : 'linkname',
 *                          href : 'url',
 *                          isExternal: true/false
 *                        }
 *                      ],
 *                      href: '', 
 *                      type:'', /// DropDown , Button or Tooltip
 *                      isExternal:'' /// true or false,
 *                      tooltipText : '',
  *                     color:''
 *                }
 * }
 * 
 */

function HeaderLinks(_ref) {
  var props = HeaderLinks_extends({}, _ref);

  var classes = props.classes,
      headerElements = props.headerElements;

  var headers = external_lodash_default.a.keys(headerElements).map(function (elementName) {
    var elementObject = headerElements[elementName];

    if (elementObject['type'] === 'Button') {
      if (elementObject['avatar']) {
        return external_react_default.a.createElement(ListItem_default.a, {
          key: elementName,
          className: classes.listItem
        }, external_react_default.a.createElement(CustomButtons["a" /* default */], {
          href: elementObject['href'],
          color: elementObject['color'],
          className: classes.profile
        }, elementObject['avatar'], elementName));
      } else if (elementObject['isExternal']) {
        return external_react_default.a.createElement(ListItem_default.a, {
          key: elementName,
          className: classes.listItem
        }, external_react_default.a.createElement(CustomButtons["a" /* default */], {
          href: elementObject['href'],
          color: elementObject['color'],
          target: "_blank",
          className: classes.navLink
        }, elementObject['icon'], elementName));
      } else if (elementObject['href']) {
        return external_react_default.a.createElement(ListItem_default.a, {
          key: elementName,
          className: classes.listItem
        }, external_react_default.a.createElement(link_default.a, {
          href: elementObject['href']
        }, external_react_default.a.createElement(CustomButtons["a" /* default */], {
          color: elementObject['color'],
          target: "_blank",
          className: classes.navLink
        }, elementObject['icon'], elementName)));
      } else if (elementObject['handleClick']) {
        var icon = elementObject['icon'];
        return external_react_default.a.createElement(ListItem_default.a, {
          key: elementName,
          className: classes.listItem
        }, external_react_default.a.createElement(CustomButtons["a" /* default */], {
          color: elementObject['color'],
          onClick: elementObject['handleClick'],
          className: classes.navLink
        }, icon, " ", elementName));
      }
    } else if (elementObject['type'] === 'DropDown') {
      var dropDownElements = elementObject['childrens'];
      var elements = dropDownElements.map(function (ele) {
        if (ele['isExternal']) {
          return external_react_default.a.createElement("a", {
            href: ele['href'],
            target: "_blank",
            className: classes.dropdownLink
          }, ele['text']);
        } else if (ele['handleClick']) {
          return external_react_default.a.createElement("a", {
            onClick: ele['handleClick'],
            target: "_blank",
            className: classes.dropdownLink
          }, ele['text']);
        } else {
          return external_react_default.a.createElement(link_default.a, {
            href: ele['href']
          }, external_react_default.a.createElement("a", {
            target: "_blank",
            className: classes.dropdownLink
          }, ele['text']));
        }
      });
      return external_react_default.a.createElement(ListItem_default.a, {
        key: elementName,
        className: classes.listItem
      }, external_react_default.a.createElement(components_CustomDropdown, {
        noLiPadding: true,
        buttonText: elementName,
        buttonProps: {
          className: classes.navLink,
          color: elementObject['color']
        },
        buttonIcon: elementObject['icon'],
        dropdownList: elements,
        avatar: elementObject['avatar']
      }));
    } else if (elementObject['type'] === 'Tooltip') {
      return external_react_default.a.createElement(ListItem_default.a, {
        className: classes.listItem,
        key: elementName
      }, external_react_default.a.createElement(Tooltip_default.a, {
        id: elementObject['icon'],
        title: elementObject['tooltipText'],
        placement: "left",
        classes: {
          tooltip: classes.tooltip
        }
      }, external_react_default.a.createElement(CustomButtons["a" /* default */], {
        color: elementObject['color'],
        target: "_blank",
        className: classes.navLink
      }, external_react_default.a.createElement("i", {
        className: "".concat(classes.socialIcons, " ").concat(elementObject['icon'])
      }))));
    }
  });

  return external_react_default.a.createElement(List_default.a, {
    className: classes.list
  }, headers);
}

/* harmony default export */ var HeaderLinks_HeaderLinks = (withStyles_default()(HeaderLinks_headerLinksStyle)(HeaderLinks));
// CONCATENATED MODULE: ./components/HeaderLinks/index.js

/* harmony default export */ var components_HeaderLinks = (HeaderLinks_HeaderLinks);
// CONCATENATED MODULE: ./modules/app/components/AppHeader/appHeaderStyle.js
function appHeaderStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var appHeaderStyle = function appHeaderStyle(theme) {
  return {
    appHeader: {
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1200,
      width: "100%"
    },
    avatar: appHeaderStyle_defineProperty({
      margin: "0 10px",
      width: "30px",
      height: "30px"
    }, theme.breakpoints.down("sm"), {
      margin: "10px 20px",
      width: "45px",
      height: "45px"
    }),
    autocomplete: {
      width: "100%"
    }
  };
};

/* harmony default export */ var AppHeader_appHeaderStyle = (appHeaderStyle);
// EXTERNAL MODULE: ./components/GoogleAutoComplete/index.js + 2 modules
var GoogleAutoComplete = __webpack_require__(54);

// EXTERNAL MODULE: ./assets/img/profilephoto.png
var profilephoto = __webpack_require__(70);
var profilephoto_default = /*#__PURE__*/__webpack_require__.n(profilephoto);

// CONCATENATED MODULE: ./modules/app/components/AppHeader/AppHeader.js
function AppHeader_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AppHeader_typeof = function _typeof(obj) { return typeof obj; }; } else { AppHeader_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AppHeader_typeof(obj); }

function AppHeader_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AppHeader_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AppHeader_createClass(Constructor, protoProps, staticProps) { if (protoProps) AppHeader_defineProperties(Constructor.prototype, protoProps); if (staticProps) AppHeader_defineProperties(Constructor, staticProps); return Constructor; }

function AppHeader_possibleConstructorReturn(self, call) { if (call && (AppHeader_typeof(call) === "object" || typeof call === "function")) { return call; } return AppHeader_assertThisInitialized(self); }

function AppHeader_getPrototypeOf(o) { AppHeader_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AppHeader_getPrototypeOf(o); }

function AppHeader_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AppHeader_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AppHeader_setPrototypeOf(subClass, superClass); }

function AppHeader_setPrototypeOf(o, p) { AppHeader_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AppHeader_setPrototypeOf(o, p); }

function AppHeader_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var AppHeader_AppHeader =
/*#__PURE__*/
function (_Component) {
  AppHeader_inherits(AppHeader, _Component);

  function AppHeader() {
    var _getPrototypeOf2;

    var _this;

    AppHeader_classCallCheck(this, AppHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = AppHeader_possibleConstructorReturn(this, (_getPrototypeOf2 = AppHeader_getPrototypeOf(AppHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    AppHeader_defineProperty(AppHeader_assertThisInitialized(_this), "onSuggestSelect", function (item) {
      item && routes["Router"].pushRoute("city", {
        cityId: item.placeId
      });
    });

    return _this;
  }

  AppHeader_createClass(AppHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          t = _this$props.t,
          googleAutoComplete = _this$props.googleAutoComplete,
          selectedCityName = _this$props.selectedCityName,
          user = _this$props.user,
          isAuthenticated = _this$props.isAuthenticated,
          noLinks = _this$props.noLinks;
      var displayName = user && user.username || firebase["a" /* auth */].getUserName();
      var profileImageUrl = user && user.profilePhotoUrl || firebase["a" /* auth */].getProfilePhotoUrl();
      var avatar;

      if (isAuthenticated) {
        avatar = profileImageUrl === "" || profileImageUrl == null ? external_react_default.a.createElement(Avatar_default.a, {
          className: classes.avatar
        }, " ", Object(utils["b" /* getNameInitials */])(displayName), " ") : external_react_default.a.createElement(Avatar_default.a, {
          src: profileImageUrl,
          className: classes.avatar
        });
      } else {
        avatar = external_react_default.a.createElement(Avatar_default.a, {
          src: profilephoto_default.a,
          className: classes.avatar
        });
      }

      var headerElementConfig = this.props.rightLinks;
      var drawerElementConfig = this.props.rightLinks;

      if (!noLinks) {
        if (!headerElementConfig) {
          headerElementConfig = {
            headerElements: {// facebook: {
              //   type: "Tooltip",
              //   tooltipText: "this is a tooltip text on facebook",
              //   color: "transparent",
              //   icon: "fab fa-facebook"
              // },
              // twitter: {
              //   type: "Tooltip",
              //   tooltipText: "this is a tooltip text on twitter",
              //   color: "transparent",
              //   icon: "fab fa-twitter"
              // }
            }
          };

          if (!isAuthenticated) {
            headerElementConfig.headerElements[t("common:loginText")] = {
              icon: "",
              type: "Button",
              isExternal: false,
              href: "/login",
              toolTipText: "",
              color: "transparent"
            };
          } else if (displayName) {
            headerElementConfig.headerElements[displayName] = {
              avatar: avatar,
              childrens: [{
                text: t("common:yourProfileText"),
                href: "/url",
                isExternal: false
              }, {
                text: t("common:logoutText"),
                isExternal: false,
                handleClick: this.props.logOut
              }],
              href: "",
              type: "DropDown",
              /// DropDown , Button or Tooltip
              isExternal: false,
              /// true or false,
              tooltipText: "",
              color: "transparent"
            };
          }
        }

        if (!drawerElementConfig) {
          if (displayName) {
            var _headerElements;

            drawerElementConfig = {
              headerElements: (_headerElements = {}, AppHeader_defineProperty(_headerElements, displayName, {
                avatar: avatar,
                href: "",
                type: "Button",
                /// DropDown , Button or Tooltip
                isExternal: false,
                /// true or false,
                tooltipText: "",
                color: "transparent"
              }), AppHeader_defineProperty(_headerElements, t("common:logoutText"), {
                icon: "",
                type: "Button",
                isExternal: false,
                handleClick: this.props.logOut,
                toolTipText: "",
                color: "transparent"
              }), _headerElements)
            };
          } else {
            drawerElementConfig = {
              headerElements: AppHeader_defineProperty({}, t("common:loginText"), {
                avatar: avatar,
                href: "/login",
                type: "Button",
                /// DropDown , Button or Tooltip
                isExternal: false,
                /// true or false,
                tooltipText: "",
                color: "transparent"
              })
            };
          }
        }
      }

      return external_react_default.a.createElement("div", {
        className: classes.appHeader
      }, external_react_default.a.createElement(components_Header, {
        color: this.props.color,
        brand: this.props.headerTitle || t("common:appName"),
        fixed: this.props.fixed,
        backNavigation: this.props.backNavigation,
        changeColorOnScroll: this.props.changeColorOnScroll,
        rightLinks: external_react_default.a.createElement(components_HeaderLinks, headerElementConfig),
        drawerLinks: drawerElementConfig ? external_react_default.a.createElement(components_HeaderLinks, drawerElementConfig) : undefined
      }, googleAutoComplete && external_react_default.a.createElement("div", {
        className: classes.autocomplete
      }, external_react_default.a.createElement(GoogleAutoComplete["a" /* default */], {
        searchTypes: ["(cities)"],
        onSuggestSelect: this.onSuggestSelect,
        t: t,
        initialValue: selectedCityName
      }))));
    }
  }]);

  return AppHeader;
}(external_react_["Component"]);
/* harmony default export */ var components_AppHeader_AppHeader = (Object(core_["withStyles"])(AppHeader_appHeaderStyle)(AppHeader_AppHeader));
// CONCATENATED MODULE: ./modules/app/components/AppHeader/index.js

/* harmony default export */ var components_AppHeader = __webpack_exports__["a"] = (components_AppHeader_AppHeader);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(24);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(15);

// EXTERNAL MODULE: external "google-maps-react"
var external_google_maps_react_ = __webpack_require__(50);

// CONCATENATED MODULE: ./lib/withGoogleMap.js

function withGoogleMap(ComposedComponent) {
  return new external_google_maps_react_["GoogleApiWrapper"]({
    apiKey: "".concat("AIzaSyCnQOZTelS4uIEcFjqlOMvQJffdWpgIoCk")
  })(ComposedComponent);
}
// CONCATENATED MODULE: ./lib/withLibs.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return withGoogleApiLibs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withLibs; });



function withGoogleApiLibs(ComposedComponent, defaultNS, pageStyle) {
  return Object(external_react_i18next_["translate"])(defaultNS)(Object(core_["withStyles"])(pageStyle, {
    withTheme: true
  })(withGoogleMap(ComposedComponent)));
}
function withLibs(ComposedComponent, defaultNS, pageStyle) {
  return pageStyle ? Object(external_react_i18next_["translate"])(defaultNS)(Object(core_["withStyles"])(pageStyle, {
    withTheme: true
  })(ComposedComponent)) : Object(external_react_i18next_["translate"])(defaultNS)(ComposedComponent);
}

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),
/* 77 */,
/* 78 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("i18next-xhr-backend");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("i18next-browser-languagedetector");

/***/ }),
/* 82 */,
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(8);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(14);

// EXTERNAL MODULE: external "@material-ui/core/styles/withStyles"
var withStyles_ = __webpack_require__(7);
var withStyles_default = /*#__PURE__*/__webpack_require__.n(withStyles_);

// CONCATENATED MODULE: ./components/Parallax/parallaxStyle.js
var parallaxStyle = {
  parallax: {
    height: "90vh",
    maxHeight: "1000px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center"
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  small: {
    height: "380px"
  }
};
/* harmony default export */ var Parallax_parallaxStyle = (parallaxStyle);
// CONCATENATED MODULE: ./components/Parallax/Parallax.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // core components



var Parallax_Parallax =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Parallax, _React$Component);

  function Parallax(props) {
    var _this;

    _classCallCheck(this, Parallax);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Parallax).call(this, props));
    _this.resetTransform = _this.resetTransform.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Parallax, [{
    key: "componentDidMount",
    value: function componentDidMount() {// var windowScrollTop = window.pageYOffset / 3;
      // this.setState({
      //   transform: "translate3d(0," + windowScrollTop + "px,0)"
      // });
      // window.addEventListener("scroll", this.resetTransform);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {// window.removeEventListener("scroll", this.resetTransform);
    }
  }, {
    key: "resetTransform",
    value: function resetTransform() {
      var windowScrollTop = window.pageYOffset / 3;
      this.setState({
        transform: "translate3d(0," + windowScrollTop + "px,0)"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          classes = _this$props.classes,
          filter = _this$props.filter,
          className = _this$props.className,
          children = _this$props.children,
          style = _this$props.style,
          image = _this$props.image,
          small = _this$props.small;
      var parallaxClasses = external_classnames_default()((_classNames = {}, _defineProperty(_classNames, classes.parallax, true), _defineProperty(_classNames, classes.filter, filter), _defineProperty(_classNames, classes.small, small), _defineProperty(_classNames, className, className !== undefined), _classNames));
      return external_react_default.a.createElement("div", {
        className: parallaxClasses,
        style: _objectSpread({}, style, {
          backgroundImage: "url(" + image + ")"
        }, this.state),
        ref: "parallax"
      }, children);
    }
  }]);

  return Parallax;
}(external_react_default.a.Component);

/* harmony default export */ var components_Parallax_Parallax = (withStyles_default()(Parallax_parallaxStyle)(Parallax_Parallax));
// CONCATENATED MODULE: ./components/Parallax/index.js

/* harmony default export */ var components_Parallax = __webpack_exports__["a"] = (components_Parallax_Parallax);

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Check");

/***/ }),
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export START_LOADING */
/* unused harmony export STOP_LOADING */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RESET_ERROR; });
/* harmony import */ var redux_define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var redux_define__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_define__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);


var START_LOADING = Object(redux_define__WEBPACK_IMPORTED_MODULE_0__["defineAction"])("START_LOADING", [], _constants__WEBPACK_IMPORTED_MODULE_1__["NAME"]);
var STOP_LOADING = Object(redux_define__WEBPACK_IMPORTED_MODULE_0__["defineAction"])("STOP_LOADING", [], _constants__WEBPACK_IMPORTED_MODULE_1__["NAME"]);
var RESET_ERROR = Object(redux_define__WEBPACK_IMPORTED_MODULE_0__["defineAction"])("RESET_ERROR", [], _constants__WEBPACK_IMPORTED_MODULE_1__["NAME"]);

/***/ }),
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Email");

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LockOutline");

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/People");

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Clear");

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/google_signup-0cc114b9bf355c4be580a2aeedfa1b39.jpg";

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/google_signin-b64b0df236736eb357036401b53ad603.jpg";

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resetError; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91);

function resetError() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* RESET_ERROR */ "a"].ACTION
  };
}

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withoutAuth; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_auth_store_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony import */ var _redirect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41);
/* harmony import */ var _modules_app_components_PageLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36);
/* harmony import */ var _modules_auth_store_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
/* harmony import */ var _withI18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var NotAuthComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(NotAuthComponent, _Component);

  function NotAuthComponent() {
    _classCallCheck(this, NotAuthComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(NotAuthComponent).apply(this, arguments));
  }

  _createClass(NotAuthComponent, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          authenticated = _this$props.authenticated,
          firebaseLoaded = _this$props.firebaseLoaded,
          redirectPath = _this$props.redirectPath,
          dispatch = _this$props.dispatch,
          component = _this$props.component,
          token = _this$props.token;
      var Component = component;

      if (firebaseLoaded) {
        if (authenticated) {
          Object(_redirect__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(undefined, redirectPath);
          dispatch(Object(_modules_auth_store_action__WEBPACK_IMPORTED_MODULE_6__[/* resetRedirectPath */ "d"])());
        }

        return !authenticated ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, this.props) : null;
      } else if (token) {
        if (token !== "null") {
          Object(_redirect__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(undefined, redirectPath);
          dispatch(Object(_modules_auth_store_action__WEBPACK_IMPORTED_MODULE_6__[/* resetRedirectPath */ "d"])());
        }

        return token === "null" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, this.props) : null;
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_modules_app_components_PageLoader__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null);
      }
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, res, store, query, token;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, res = _ref.res, store = _ref.store, query = _ref.query;
                token = req && req.session && req.session.user ? req.session.user.token : null;

                if (token && token !== "null") {
                  Object(_redirect__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(res, Object(_modules_auth_store_selector__WEBPACK_IMPORTED_MODULE_3__[/* getPathToRedirect */ "a"])(store.getState()));
                  store.dispatch(Object(_modules_auth_store_action__WEBPACK_IMPORTED_MODULE_6__[/* resetRedirectPath */ "d"])());
                }

                return _context.abrupt("return", {
                  token: token
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return NotAuthComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

function withoutAuth(ComposedComponent, localesDataArray) {
  var mapStateToProps = function mapStateToProps(state) {
    return {
      authenticated: Object(_modules_auth_store_selector__WEBPACK_IMPORTED_MODULE_3__[/* isAuthenticated */ "b"])(state),
      firebaseLoaded: Object(_modules_auth_store_selector__WEBPACK_IMPORTED_MODULE_3__[/* isFirebaseLoaded */ "c"])(state),
      redirectPath: Object(_modules_auth_store_selector__WEBPACK_IMPORTED_MODULE_3__[/* getPathToRedirect */ "a"])(state),
      component: ComposedComponent
    };
  };

  return Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Object(_withI18next__WEBPACK_IMPORTED_MODULE_7__[/* withI18next */ "a"])(localesDataArray)(NotAuthComponent));
}

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(14);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(15);

// EXTERNAL MODULE: external "@material-ui/core/InputAdornment"
var InputAdornment_ = __webpack_require__(90);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_);

// EXTERNAL MODULE: external "validator"
var external_validator_ = __webpack_require__(104);
var external_validator_default = /*#__PURE__*/__webpack_require__.n(external_validator_);

// EXTERNAL MODULE: external "@material-ui/icons/Email"
var Email_ = __webpack_require__(105);
var Email_default = /*#__PURE__*/__webpack_require__.n(Email_);

// EXTERNAL MODULE: external "@material-ui/icons/LockOutline"
var LockOutline_ = __webpack_require__(106);
var LockOutline_default = /*#__PURE__*/__webpack_require__.n(LockOutline_);

// EXTERNAL MODULE: external "@material-ui/icons/People"
var People_ = __webpack_require__(107);
var People_default = /*#__PURE__*/__webpack_require__.n(People_);

// EXTERNAL MODULE: external "@material-ui/icons/Check"
var Check_ = __webpack_require__(84);
var Check_default = /*#__PURE__*/__webpack_require__.n(Check_);

// EXTERNAL MODULE: ./components/GridContainer/index.js + 1 modules
var GridContainer = __webpack_require__(51);

// EXTERNAL MODULE: ./components/GridItem/index.js + 1 modules
var GridItem = __webpack_require__(38);

// EXTERNAL MODULE: ./components/Card/index.js + 8 modules
var Card = __webpack_require__(43);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(8);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles/withStyles"
var withStyles_ = __webpack_require__(7);
var withStyles_default = /*#__PURE__*/__webpack_require__.n(withStyles_);

// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__(108);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);

// EXTERNAL MODULE: external "@material-ui/core/InputLabel"
var InputLabel_ = __webpack_require__(109);
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);

// EXTERNAL MODULE: external "@material-ui/core/Input"
var Input_ = __webpack_require__(110);
var Input_default = /*#__PURE__*/__webpack_require__.n(Input_);

// EXTERNAL MODULE: external "@material-ui/icons/Clear"
var Clear_ = __webpack_require__(111);
var Clear_default = /*#__PURE__*/__webpack_require__.n(Clear_);

// EXTERNAL MODULE: ./assets/jss/material-kit-react.js
var material_kit_react = __webpack_require__(1);

// CONCATENATED MODULE: ./components/CustomInput/customInputStyle.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var customInputStyle = {
  disabled: {
    "&:before": {
      borderColor: "transparent !important"
    }
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#D2D2D2 !important",
      borderWidth: "1px !important"
    },
    "&:after": {
      borderColor: material_kit_react["n" /* primaryColor */]
    }
  },
  underlineError: {
    "&:after": {
      borderColor: material_kit_react["e" /* dangerColor */]
    }
  },
  underlineSuccess: {
    "&:after": {
      borderColor: material_kit_react["s" /* successColor */]
    }
  },
  labelRoot: _objectSpread({}, material_kit_react["f" /* defaultFont */], {
    color: "#AAAAAA !important",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857",
    top: "10px",
    "& + $underline": {
      marginTop: "0px"
    }
  }),
  labelRootError: {
    color: material_kit_react["e" /* dangerColor */] + " !important"
  },
  labelRootSuccess: {
    color: material_kit_react["s" /* successColor */] + " !important"
  },
  feedback: {
    position: "absolute",
    bottom: "3px",
    right: "0",
    zIndex: "2",
    display: "block",
    width: "1em",
    height: "1em",
    textAlign: "center",
    pointerEvents: "none"
  },
  feedbackRight: {
    marginRight: "22px"
  },
  formControl: {
    margin: "0 0 17px 0",
    paddingTop: "27px",
    position: "relative",
    "& svg,& .fab,& .far,& .fal,& .fas": {
      color: "#495057"
    }
  },
  whiteUnderline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#FFFFFF"
    },
    "&:after": {
      borderColor: "#FFFFFF"
    }
  },
  input: {
    color: "#495057",
    "&,&::placeholder": {
      fontSize: "14px",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: "1.42857",
      opacity: "1"
    },
    "&::placeholder": {
      color: "#AAAAAA"
    }
  },
  whiteInput: {
    "&,&::placeholder": {
      color: "#FFFFFF",
      opacity: "1"
    }
  }
};
/* harmony default export */ var CustomInput_customInputStyle = (customInputStyle);
// CONCATENATED MODULE: ./components/CustomInput/CustomInput.js
function CustomInput_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // nodejs library to set properties for components

 // nodejs library that concatenates classes

 // @material-ui/core components




 // @material-ui/icons


 // core components



function CustomInput(_ref) {
  var _classNames, _classNames2, _classNames3, _classNames4, _classNames5;

  var props = _extends({}, _ref);

  var classes = props.classes,
      formControlProps = props.formControlProps,
      labelText = props.labelText,
      id = props.id,
      labelProps = props.labelProps,
      inputProps = props.inputProps,
      error = props.error,
      white = props.white,
      inputRootCustomClasses = props.inputRootCustomClasses,
      success = props.success;
  var labelClasses = external_classnames_default()((_classNames = {}, CustomInput_defineProperty(_classNames, " " + classes.labelRootError, error), CustomInput_defineProperty(_classNames, " " + classes.labelRootSuccess, success && !error), _classNames));
  var underlineClasses = external_classnames_default()((_classNames2 = {}, CustomInput_defineProperty(_classNames2, classes.underlineError, error), CustomInput_defineProperty(_classNames2, classes.underlineSuccess, success && !error), CustomInput_defineProperty(_classNames2, classes.underline, true), CustomInput_defineProperty(_classNames2, classes.whiteUnderline, white), _classNames2));
  var marginTop = external_classnames_default()((_classNames3 = {}, CustomInput_defineProperty(_classNames3, classes.marginTop, labelText === undefined), CustomInput_defineProperty(_classNames3, inputRootCustomClasses, inputRootCustomClasses !== undefined), _classNames3));
  var inputClasses = external_classnames_default()((_classNames4 = {}, CustomInput_defineProperty(_classNames4, classes.input, true), CustomInput_defineProperty(_classNames4, classes.whiteInput, white), _classNames4));
  var formControlClasses = external_classnames_default()((_classNames5 = {}, CustomInput_defineProperty(_classNames5, classes.formControl, true), CustomInput_defineProperty(_classNames5, classes.formControlLabel, labelText !== undefined), CustomInput_defineProperty(_classNames5, formControlProps.className, formControlProps.className !== undefined), _classNames5));
  return external_react_default.a.createElement(FormControl_default.a, _extends({}, formControlProps, {
    className: formControlClasses
  }), labelText !== undefined ? external_react_default.a.createElement(InputLabel_default.a, _extends({
    className: classes.labelRoot + " " + labelClasses,
    htmlFor: id
  }, labelProps), labelText) : null, external_react_default.a.createElement(Input_default.a, _extends({
    classes: {
      input: inputClasses,
      root: marginTop,
      disabled: classes.disabled,
      underline: underlineClasses
    },
    id: id
  }, inputProps)), error ? external_react_default.a.createElement(Clear_default.a, {
    className: classes.feedback + " " + classes.labelRootError
  }) : success ? external_react_default.a.createElement(Check_default.a, {
    className: classes.feedback + " " + classes.labelRootSuccess
  }) : null);
}

/* harmony default export */ var CustomInput_CustomInput = (withStyles_default()(CustomInput_customInputStyle)(CustomInput));
// CONCATENATED MODULE: ./components/CustomInput/index.js

/* harmony default export */ var components_CustomInput = (CustomInput_CustomInput);
// CONCATENATED MODULE: ./assets/jss/material-kit-react/customCheckboxRadioSwitch.js

var customCheckboxRadioSwitch = {
  checkboxAndRadio: {
    position: "relative",
    display: "block",
    marginTop: "10px",
    marginBottom: "10px"
  },
  checkboxAndRadioHorizontal: {
    position: "relative",
    display: "block",
    "&:first-child": {
      marginTop: "10px"
    },
    "&:not(:first-child)": {
      marginTop: "-14px"
    },
    marginTop: "0",
    marginBottom: "0"
  },
  checked: {
    color: material_kit_react["n" /* primaryColor */] + "!important"
  },
  checkedIcon: {
    width: "20px",
    height: "20px",
    border: "1px solid  rgba(0, 0, 0, .54)",
    borderRadius: "3px"
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "9px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "3px"
  },
  disabledCheckboxAndRadio: {
    opacity: "0.45"
  },
  label: {
    cursor: "pointer",
    paddingLeft: "0",
    color: "rgba(0, 0, 0, 0.26)",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    display: "inline-flex",
    transition: "0.3s ease all"
  },
  labelHorizontal: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "39px",
    marginRight: "0",
    "@media (min-width: 992px)": {
      float: "right"
    }
  },
  labelHorizontalRadioCheckbox: {
    paddingTop: "22px"
  },
  labelLeftHorizontal: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "22px",
    marginRight: "0"
  },
  labelError: {
    color: material_kit_react["e" /* dangerColor */]
  },
  radio: {
    color: material_kit_react["n" /* primaryColor */] + "!important"
  },
  radioChecked: {
    width: "16px",
    height: "16px",
    border: "1px solid " + material_kit_react["n" /* primaryColor */],
    borderRadius: "50%"
  },
  radioUnchecked: {
    width: "0px",
    height: "0px",
    padding: "7px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "50%"
  },
  inlineChecks: {
    marginTop: "8px"
  },
  iconCheckbox: {
    height: "116px",
    width: "116px",
    color: material_kit_react["h" /* grayColor */],
    "& > span:first-child": {
      borderWidth: "4px",
      borderStyle: "solid",
      borderColor: "#CCCCCC",
      textAlign: "center",
      verticalAlign: "middle",
      borderRadius: "50%",
      color: "inherit",
      margin: "0 auto 20px",
      transition: "all 0.2s"
    },
    "&:hover": {
      color: material_kit_react["p" /* roseColor */],
      "& > span:first-child": {
        borderColor: material_kit_react["p" /* roseColor */]
      }
    }
  },
  iconCheckboxChecked: {
    color: material_kit_react["p" /* roseColor */],
    "& > span:first-child": {
      borderColor: material_kit_react["p" /* roseColor */]
    }
  },
  iconCheckboxIcon: {
    fontSize: "40px",
    lineHeight: "111px"
  },
  switchBase: {
    color: material_kit_react["n" /* primaryColor */] + "!important"
  },
  switchIcon: {
    boxShadow: "0 1px 3px 1px rgba(0, 0, 0, 0.4)",
    color: "#FFFFFF !important",
    border: "1px solid rgba(0, 0, 0, .54)",
    transform: "translateX(-4px)!important"
  },
  switchIconChecked: {
    borderColor: "#9c27b0",
    transform: "translateX(0px)!important"
  },
  switchBar: {
    width: "30px",
    height: "15px",
    backgroundColor: "rgb(80, 80, 80)",
    borderRadius: "15px",
    opacity: "0.7!important"
  },
  switchChecked: {
    "& + $switchBar": {
      backgroundColor: "rgba(156, 39, 176, 1) !important"
    }
  }
};
/* harmony default export */ var material_kit_react_customCheckboxRadioSwitch = (customCheckboxRadioSwitch);
// EXTERNAL MODULE: ./assets/img/google_signup.jpg
var google_signup = __webpack_require__(112);
var google_signup_default = /*#__PURE__*/__webpack_require__.n(google_signup);

// EXTERNAL MODULE: ./assets/img/google_signin.jpg
var google_signin = __webpack_require__(113);
var google_signin_default = /*#__PURE__*/__webpack_require__.n(google_signin);

// CONCATENATED MODULE: ./modules/auth/components/SignUp/signupFormStyle.js
function signupFormStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { signupFormStyle_defineProperty(target, key, source[key]); }); } return target; }

function signupFormStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var loginButtonStyle = {
  width: "80%",
  color: "#ffffff",
  fontWeight: "bold",
  borderRadius: "2px",
  border: "1px solid transparent",
  display: "inline-block",
  marginRight: "10px",
  padding: "15px",
  cursor: "pointer",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundOrigin: "border-box"
};

var signupPageStyle = signupFormStyle_objectSpread({
  container: signupFormStyle_objectSpread({}, material_kit_react["b" /* container */], {
    zIndex: "2",
    position: "relative",
    paddingTop: "20vh",
    color: "#FFFFFF"
  }),
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)"
  },
  pageHeader: {
    minHeight: "100vh",
    maxHeight: "1200px",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: ""
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      color: "#FFFFFF"
    }
  },
  form: {
    margin: "0"
  },
  cardHeader: {
    width: "100%",
    textAlign: "center",
    marginTop: "0px",
    marginBottom: "15px"
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px"
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center"
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important"
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0"
  },
  inputIconsColor: {
    color: "#495057"
  },
  googleSignUp: signupFormStyle_objectSpread({}, loginButtonStyle, {
    backgroundImage: "url(".concat(google_signup_default.a, ")")
  }),
  googleLogin: signupFormStyle_objectSpread({}, loginButtonStyle, {
    backgroundImage: "url(".concat(google_signin_default.a, ")")
  }),
  error: {
    color: "#ff0000",
    fontFamily: "inherit",
    width: "100%",
    fontWeight: 300,
    textAlign: "center"
  }
}, material_kit_react_customCheckboxRadioSwitch);

/* harmony default export */ var signupFormStyle = (signupPageStyle);
// EXTERNAL MODULE: ./components/CustomButtons/index.js + 2 modules
var CustomButtons = __webpack_require__(17);

// CONCATENATED MODULE: ./modules/auth/components/SignUp/SignUpForm.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function SignUpForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { SignUpForm_defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function SignUpForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // @material-ui/core components



 // @material-ui/icons











var SignUpForm_SignUpForm =
/*#__PURE__*/
function (_Component) {
  _inherits(SignUpForm, _Component);

  function SignUpForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SignUpForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SignUpForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    SignUpForm_defineProperty(_assertThisInitialized(_this), "state", {
      cardAnimation: "cardHidden",
      enableSubmit: false,
      name: {
        error: false,
        errorLabel: "",
        value: ""
      },
      email: {
        error: false,
        errorLabel: "",
        value: ""
      },
      password: {
        error: false,
        errorLabel: "",
        value: ""
      },
      rememberPassword: false
    });

    SignUpForm_defineProperty(_assertThisInitialized(_this), "onChangeName", function (e) {
      _this.setState({
        name: {
          error: false,
          errorLabel: "",
          value: e.target.value
        }
      });
    });

    SignUpForm_defineProperty(_assertThisInitialized(_this), "onChangeEmail", function (e) {
      _this.setState({
        email: {
          error: false,
          errorLabel: "",
          value: e.target.value
        }
      });
    });

    SignUpForm_defineProperty(_assertThisInitialized(_this), "onChangePassword", function (e) {
      _this.setState({
        password: {
          error: false,
          errorLabel: "",
          value: e.target.value
        }
      });
    });

    SignUpForm_defineProperty(_assertThisInitialized(_this), "onChangeRememberPassword", function (e) {
      _this.setState({
        rememberPassword: e.target.checked
      });
    });

    SignUpForm_defineProperty(_assertThisInitialized(_this), "validateForm", function () {
      var _this$props = _this.props,
          isLogin = _this$props.isLogin,
          requestLogin = _this$props.requestLogin,
          requestSignUp = _this$props.requestSignUp;

      if (isLogin && _this.isEmailValid() && _this.isPasswordValid()) {
        requestLogin(_this.state.email.value, _this.state.password.value);
      } else if (_this.isNameValid() && _this.isEmailValid() && _this.isPasswordValid()) {
        requestSignUp(_this.state.name.value, _this.state.email.value, _this.state.password.value);
      }
    });

    SignUpForm_defineProperty(_assertThisInitialized(_this), "isNameValid", function () {
      var t = _this.props.t;

      var name = _this.state.name.value.trim();

      var nameObj;

      if (name.length == 0) {
        nameObj = SignUpForm_objectSpread({}, _this.state.name, {
          error: true,
          errorLabel: t("nameIsRequiredErrorText")
        });

        _this.setState({
          name: nameObj
        });

        return false;
      } else if (name.length < 4) {
        nameObj = SignUpForm_objectSpread({}, _this.state.name, {
          error: true,
          errorLabel: t("nameLenghtErrorText")
        });

        _this.setState({
          name: nameObj
        });

        return false;
      } else {
        return true;
      }
    });

    SignUpForm_defineProperty(_assertThisInitialized(_this), "isEmailValid", function () {
      var t = _this.props.t;

      var email = _this.state.email.value.trim();

      var emailObj;

      if (email.length == 0) {
        emailObj = SignUpForm_objectSpread({}, _this.state.email, {
          error: true,
          errorLabel: t("emailIsRequiredErrorText")
        });

        _this.setState({
          email: emailObj
        });

        return false;
      } else if (!external_validator_default.a.isEmail(email)) {
        emailObj = SignUpForm_objectSpread({}, _this.state.email, {
          error: true,
          errorLabel: t("emailLengthErrorText")
        });

        _this.setState({
          email: emailObj
        });

        return false;
      }

      return true;
    });

    SignUpForm_defineProperty(_assertThisInitialized(_this), "isPasswordValid", function () {
      var t = _this.props.t;

      var password = _this.state.password.value.trim();

      var passwordObj;

      if (password.length == 0) {
        passwordObj = SignUpForm_objectSpread({}, _this.state.password, {
          error: true,
          errorLabel: t("passwordIsRequiredErrorText")
        });

        _this.setState({
          password: passwordObj
        });

        return false;
      } else if (password.length <= 6) {
        passwordObj = SignUpForm_objectSpread({}, _this.state.password, {
          error: true,
          errorLabel: t("passwordLengthErrorText")
        });

        _this.setState({
          password: passwordObj
        });

        return false;
      } else {
        return true;
      }
    });

    return _this;
  }

  _createClass(SignUpForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      setTimeout(function () {
        this.setState({
          cardAnimaton: ""
        });
      }.bind(this), 700);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          t = _this$props2.t;
      return external_react_default.a.createElement(GridContainer["a" /* default */], {
        justify: "center"
      }, external_react_default.a.createElement(GridItem["a" /* default */], {
        xs: 12,
        sm: 12,
        md: this.props.isLogin ? 12 : 10
      }, external_react_default.a.createElement(Card["d" /* default */], {
        className: classes[this.state.cardAnimaton]
      }, external_react_default.a.createElement("form", {
        className: classes.form
      }, external_react_default.a.createElement(Card["c" /* CardHeader */], {
        className: classes.cardHeader
      }, external_react_default.a.createElement(CustomButtons["a" /* default */], {
        className: classes.googleLogin,
        onClick: this.props.googleSignUp
      }, external_react_default.a.createElement("span", null))), external_react_default.a.createElement(Card["a" /* CardBody */], null, !this.props.isLogin ? external_react_default.a.createElement(components_CustomInput, {
        error: this.state.name.error,
        labelText: this.state.name.error ? this.state.name.errorLabel : t("enterNameInputPlaceholder"),
        id: "fullNameID",
        formControlProps: {
          fullWidth: true
        },
        inputProps: {
          type: "text",
          endAdornment: external_react_default.a.createElement(InputAdornment_default.a, {
            position: "end"
          }, external_react_default.a.createElement(People_default.a, {
            className: classes.inputIconsColor
          })),
          onChange: this.onChangeName
        }
      }) : null, external_react_default.a.createElement(components_CustomInput, {
        error: this.state.email.error,
        labelText: this.state.email.error ? this.state.email.errorLabel : t("emailnputPlaceholder"),
        id: "emailID",
        formControlProps: {
          fullWidth: true
        },
        inputProps: {
          type: "email",
          endAdornment: external_react_default.a.createElement(InputAdornment_default.a, {
            position: "end"
          }, external_react_default.a.createElement(Email_default.a, {
            className: classes.inputIconsColor
          })),
          onChange: this.onChangeEmail
        }
      }), external_react_default.a.createElement(components_CustomInput, {
        error: this.state.password.error,
        labelText: this.state.password.error ? this.state.password.errorLabel : t("passwordInputPlaceholder"),
        id: "passwordID",
        formControlProps: {
          fullWidth: true
        },
        inputProps: {
          type: "password",
          endAdornment: external_react_default.a.createElement(InputAdornment_default.a, {
            position: "end"
          }, external_react_default.a.createElement(LockOutline_default.a, {
            className: classes.inputIconsColor
          })),
          onChange: this.onChangePassword
        }
      }), this.props.errorData && this.props.errorData.message && external_react_default.a.createElement("div", {
        className: classes.error
      }, this.props.errorData.message), this.props.isLogin && external_react_default.a.createElement("div", {
        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
      }, external_react_default.a.createElement(core_["FormGroup"], {
        row: true
      }, external_react_default.a.createElement(core_["FormControlLabel"], {
        control: external_react_default.a.createElement(core_["Checkbox"], {
          checked: this.state.rememberPassword,
          value: "rememberPassword",
          onChange: this.onChangeRememberPassword,
          checkedIcon: external_react_default.a.createElement(Check_default.a, {
            className: classes.checkedIcon
          }),
          icon: external_react_default.a.createElement(Check_default.a, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked
          }
        }),
        label: t("rememberPasswordLabel")
      }), external_react_default.a.createElement(CustomButtons["a" /* default */], {
        simple: true,
        color: "primary",
        size: "lg"
      }, t("forgotPasswordLabel"))))), external_react_default.a.createElement(Card["b" /* CardFooter */], {
        className: classes.cardFooter
      }, external_react_default.a.createElement(CustomButtons["a" /* default */], {
        color: "primary",
        fullWidth: true,
        block: true,
        size: "lg",
        id: "submitButtonID",
        loading: this.props.isLoading,
        onClick: this.validateForm
      }, this.props.isLogin ? t("loginLabel") : t("signUpActionText")))))));
    }
  }]);

  return SignUpForm;
}(external_react_["Component"]);
/* harmony default export */ var SignUp_SignUpForm = (Object(core_["withStyles"])(signupFormStyle)(SignUpForm_SignUpForm));
// CONCATENATED MODULE: ./modules/auth/components/SignUp/index.js

/* harmony default export */ var SignUp = __webpack_exports__["a"] = (SignUp_SignUpForm);

/***/ }),
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */
/***/ (function(module, exports) {



/***/ }),
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/landing-bg-3745ec7fb172f0bab0f65390e75aacd3.jpg";

/***/ }),
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(159);


/***/ }),
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(33);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(14);

// EXTERNAL MODULE: ./lib/withLibs.js + 1 modules
var withLibs = __webpack_require__(75);

// EXTERNAL MODULE: ./assets/img/landing-bg.jpg
var landing_bg = __webpack_require__(140);
var landing_bg_default = /*#__PURE__*/__webpack_require__.n(landing_bg);

// EXTERNAL MODULE: ./components/Parallax/index.js + 2 modules
var Parallax = __webpack_require__(83);

// EXTERNAL MODULE: ./components/GridContainer/index.js + 1 modules
var GridContainer = __webpack_require__(51);

// EXTERNAL MODULE: ./components/GridItem/index.js + 1 modules
var GridItem = __webpack_require__(38);

// EXTERNAL MODULE: ./assets/jss/material-kit-react.js
var material_kit_react = __webpack_require__(1);

// CONCATENATED MODULE: ./modules/app/containers/LandingPage/landingPageStyle.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var landingPageStyle_landingPageStyle = function landingPageStyle(theme) {
  var _objectSpread2;

  return {
    container: _objectSpread({
      zIndex: "12",
      color: "#FFFFFF"
    }, material_kit_react["b" /* container */]),
    parrallexClass: {
      overflow: "auto ",
      height: "100vh"
    },
    title: _objectSpread({}, material_kit_react["t" /* title */], (_objectSpread2 = {
      display: "inline-block",
      position: "relative",
      marginTop: "2rem",
      minHeight: "2rem",
      color: "#FFFFFF",
      textDecoration: "none"
    }, _defineProperty(_objectSpread2, theme.breakpoints.down("sm"), {
      fontSize: "1.8rem",
      marginTop: "8rem"
    }), _defineProperty(_objectSpread2, theme.breakpoints.down("xs"), {
      fontSize: "1.5rem",
      marginTop: "12rem"
    }), _objectSpread2)),
    subtitle: {
      fontSize: "1.313rem",
      maxWidth: "500px",
      margin: "10px auto 0"
    },
    main: {
      background: "#FFFFFF",
      position: "relative",
      zIndex: "3"
    },
    mainRaised: {
      margin: "-60px 30px 0px",
      borderRadius: "6px",
      boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    welcomeSection: {
      paddingLeft: "2rem",
      paddingTop: "2rem"
    }
  };
};

/* harmony default export */ var LandingPage_landingPageStyle = (landingPageStyle_landingPageStyle);
// EXTERNAL MODULE: ./modules/auth/components/SignUp/index.js + 6 modules
var SignUp = __webpack_require__(116);

// EXTERNAL MODULE: ./modules/auth/store/action.js
var action = __webpack_require__(19);

// EXTERNAL MODULE: ./modules/app/store/action.js
var store_action = __webpack_require__(114);

// EXTERNAL MODULE: ./modules/auth/store/selector.js
var selector = __webpack_require__(29);

// EXTERNAL MODULE: ./modules/app/store/selector.js
var store_selector = __webpack_require__(56);

// EXTERNAL MODULE: ./modules/app/components/AppHeader/index.js + 12 modules
var AppHeader = __webpack_require__(74);

// CONCATENATED MODULE: ./modules/app/containers/LandingPage/LandingPage.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function LandingPage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















var LandingPage_LandingPage =
/*#__PURE__*/
function (_Component) {
  _inherits(LandingPage, _Component);

  function LandingPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LandingPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LandingPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    LandingPage_defineProperty(_assertThisInitialized(_this), "renderWelcomeText", function () {
      var _this$props = _this.props,
          classes = _this$props.classes,
          t = _this$props.t;
      return external_react_default.a.createElement("div", {
        className: classes.welcomeSection
      }, external_react_default.a.createElement("h1", {
        className: classes.title
      }, t("headingText")), external_react_default.a.createElement("h4", null, t("welcomepagetext")));
    });

    return _this;
  }

  _createClass(LandingPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.resetError();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          t = _this$props2.t;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(AppHeader["a" /* default */], {
        color: "primary",
        fixed: true,
        t: t
      }), external_react_default.a.createElement(Parallax["a" /* default */], {
        filter: true,
        image: landing_bg_default.a,
        className: classes.parrallexClass
      }, external_react_default.a.createElement("div", {
        className: classes.container
      }, external_react_default.a.createElement(GridContainer["a" /* default */], null, external_react_default.a.createElement(GridItem["a" /* default */], {
        xs: 12,
        sm: 12,
        md: 6
      }, this.renderWelcomeText()), external_react_default.a.createElement(GridItem["a" /* default */], {
        xs: 12,
        sm: 12,
        md: 6
      }, external_react_default.a.createElement(SignUp["a" /* default */], {
        requestSignUp: this.props.signUpRequest,
        googleSignUp: this.props.googleSignUpRequest,
        isLoading: this.props.loading,
        hasError: this.props.error,
        errorData: this.props.errorData,
        t: t
      }))))));
    }
  }]);

  return LandingPage;
}(external_react_["Component"]);

var LandingPage_mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: Object(selector["b" /* isAuthenticated */])(state),
    loading: Object(store_selector["c" /* isLoading */])(state),
    error: Object(store_selector["b" /* hasError */])(state),
    errorData: Object(store_selector["a" /* getErrorData */])(state),
    path: Object(selector["a" /* getPathToRedirect */])(state)
  };
};

/* harmony default export */ var containers_LandingPage_LandingPage = (Object(external_react_redux_["connect"])(LandingPage_mapStateToProps, {
  signUpRequest: action["g" /* signUpRequest */],
  googleSignUpRequest: action["a" /* googleSignUpRequest */],
  resetError: store_action["a" /* resetError */]
})(Object(withLibs["a" /* default */])(LandingPage_LandingPage, ["authdata", "common"], LandingPage_landingPageStyle)));
// CONCATENATED MODULE: ./modules/app/containers/LandingPage/index.js

/* harmony default export */ var containers_LandingPage = (containers_LandingPage_LandingPage);
// EXTERNAL MODULE: ./assets/scss/material-kit-react.scss
var scss_material_kit_react = __webpack_require__(120);

// EXTERNAL MODULE: ./lib/withoutAuth.js
var withoutAuth = __webpack_require__(115);

// CONCATENATED MODULE: ./pages/index.js


function pages_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages_typeof = function _typeof(obj) { return typeof obj; }; } else { pages_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages_typeof(obj); }

function pages_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages_createClass(Constructor, protoProps, staticProps) { if (protoProps) pages_defineProperties(Constructor.prototype, protoProps); if (staticProps) pages_defineProperties(Constructor, staticProps); return Constructor; }

function pages_possibleConstructorReturn(self, call) { if (call && (pages_typeof(call) === "object" || typeof call === "function")) { return call; } return pages_assertThisInitialized(self); }

function pages_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages_getPrototypeOf(o) { pages_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pages_getPrototypeOf(o); }

function pages_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pages_setPrototypeOf(subClass, superClass); }

function pages_setPrototypeOf(o, p) { pages_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pages_setPrototypeOf(o, p); }






var pages_MainPage =
/*#__PURE__*/
function (_Component) {
  pages_inherits(MainPage, _Component);

  function MainPage() {
    pages_classCallCheck(this, MainPage);

    return pages_possibleConstructorReturn(this, pages_getPrototypeOf(MainPage).apply(this, arguments));
  }

  pages_createClass(MainPage, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(containers_LandingPage, null);
    }
  }]);

  return MainPage;
}(external_react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(withoutAuth["a" /* default */])(pages_MainPage, ["common", "authdata"]));

/***/ })
/******/ ]);