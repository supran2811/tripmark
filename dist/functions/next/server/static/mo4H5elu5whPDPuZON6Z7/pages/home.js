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
/******/ 	return __webpack_require__(__webpack_require__.s = 147);
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FETCH_CITY_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return FETCH_PLACE_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SET_CITY_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return RESET_CITY_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return TEXT_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AUTOCOMPLETE_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CLEAR_SUGGESTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CANCEL_AUTOCOMPLETE_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_BOOKMARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DELETE_BOOKMARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SET_ADD_BOOKMARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SET_DELETE_BOOKMARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return GET_BOOKMARK_PLACES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GET_BOOKMARKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CLEAR_BOOKMARKS; });
/* harmony import */ var redux_define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var redux_define__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_define__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);



var FETCH_CITY_DETAILS = Object(redux_define__WEBPACK_IMPORTED_MODULE_0__["defineAction"])("FETCH_CITY_DETAILS", [_app_constants__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "b"], _app_constants__WEBPACK_IMPORTED_MODULE_1__[/* PENDING */ "c"], _app_constants__WEBPACK_IMPORTED_MODULE_1__[/* SUCCESS */ "d"]], _constants__WEBPACK_IMPORTED_MODULE_2__["NAME"]);
var FETCH_PLACE_DETAILS = Object(redux_define__WEBPACK_IMPORTED_MODULE_0__["defineAction"])("FETCH_PLACE_DETAILS", [_app_constants__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "b"], _app_constants__WEBPACK_IMPORTED_MODULE_1__[/* PENDING */ "c"], _app_constants__WEBPACK_IMPORTED_MODULE_1__[/* SUCCESS */ "d"]], _constants__WEBPACK_IMPORTED_MODULE_2__["NAME"]);
var SET_CITY_DETAILS = Object(redux_define__WEBPACK_IMPORTED_MODULE_0__["defineAction"])("SET_CITY_DETAILS", [], _constants__WEBPACK_IMPORTED_MODULE_2__["NAME"]);
var RESET_CITY_DETAILS = Object(redux_define__WEBPACK_IMPORTED_MODULE_0__["defineAction"])("RESET_CITY_DETAILS", [], _constants__WEBPACK_IMPORTED_MODULE_2__["NAME"]);
var TEXT_SEARCH = Object(redux_define__WEBPACK_IMPORTED_MODULE_0__["defineAction"])("TEXT_SEARCH", [_app_constants__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "b"], _app_constants__WEBPACK_IMPORTED_MODULE_1__[/* PENDING */ "c"], _app_constants__WEBPACK_IMPORTED_MODULE_1__[/* SUCCESS */ "d"]], _constants__WEBPACK_IMPORTED_MODULE_2__["NAME"]);
var AUTOCOMPLETE_SEARCH = Object(redux_define__WEBPACK_IMPORTED_MODULE_0__["defineAction"])("AUTOCOMPLETE_SEARCH", [_app_constants__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "b"], _app_constants__WEBPACK_IMPORTED_MODULE_1__[/* PENDING */ "c"], _app_constants__WEBPACK_IMPORTED_MODULE_1__[/* SUCCESS */ "d"], _app_constants__WEBPACK_IMPORTED_MODULE_1__[/* CANCEL */ "a"]], _constants__WEBPACK_IMPORTED_MODULE_2__["NAME"]);
var CLEAR_SUGGESTIONS = Object(redux_define__WEBPACK_IMPORTED_MODULE_0__["defineAction"])("CLEAR_SUGGESTIONS", [], _constants__WEBPACK_IMPORTED_MODULE_2__["NAME"]);
var CANCEL_AUTOCOMPLETE_SEARCH = Object(redux_define__WEBPACK_IMPORTED_MODULE_0__["defineAction"])("CANCEL_AUTOCOMPLETE_SEARCH", [], _constants__WEBPACK_IMPORTED_MODULE_2__["NAME"]);
var ADD_BOOKMARK = Object(redux_define__WEBPACK_IMPORTED_MODULE_0__["defineAction"])("ADD_BOOKMARK", [_app_constants__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "b"], _app_constants__WEBPACK_IMPORTED_MODULE_1__[/* PENDING */ "c"], _app_constants__WEBPACK_IMPORTED_MODULE_1__[/* SUCCESS */ "d"]], _constants__WEBPACK_IMPORTED_MODULE_2__["NAME"]);
var DELETE_BOOKMARK = Object(redux_define__WEBPACK_IMPORTED_MODULE_0__["defineAction"])("DELETE_BOOKMARK", [_app_constants__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "b"], _app_constants__WEBPACK_IMPORTED_MODULE_1__[/* PENDING */ "c"], _app_constants__WEBPACK_IMPORTED_MODULE_1__[/* SUCCESS */ "d"]], _constants__WEBPACK_IMPORTED_MODULE_2__["NAME"]);
var SET_ADD_BOOKMARK = Object(redux_define__WEBPACK_IMPORTED_MODULE_0__["defineAction"])("SET_ADD_BOOKMARK", [], _constants__WEBPACK_IMPORTED_MODULE_2__["NAME"]);
var SET_DELETE_BOOKMARK = Object(redux_define__WEBPACK_IMPORTED_MODULE_0__["defineAction"])("SET_DELETE_BOOKMARK", [], _constants__WEBPACK_IMPORTED_MODULE_2__["NAME"]);
var GET_BOOKMARK_PLACES = Object(redux_define__WEBPACK_IMPORTED_MODULE_0__["defineAction"])("GET_BOOKMARK_PLACES", [_app_constants__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "b"], _app_constants__WEBPACK_IMPORTED_MODULE_1__[/* PENDING */ "c"], _app_constants__WEBPACK_IMPORTED_MODULE_1__[/* SUCCESS */ "d"]], _constants__WEBPACK_IMPORTED_MODULE_2__["NAME"]);
var GET_BOOKMARKS = Object(redux_define__WEBPACK_IMPORTED_MODULE_0__["defineAction"])("GET_BOOKMARKS", [_app_constants__WEBPACK_IMPORTED_MODULE_1__[/* ERROR */ "b"], _app_constants__WEBPACK_IMPORTED_MODULE_1__[/* PENDING */ "c"], _app_constants__WEBPACK_IMPORTED_MODULE_1__[/* SUCCESS */ "d"]], _constants__WEBPACK_IMPORTED_MODULE_2__["NAME"]);
var CLEAR_BOOKMARKS = Object(redux_define__WEBPACK_IMPORTED_MODULE_0__["defineAction"])("CLEAR_BOOKMARKS", [], _constants__WEBPACK_IMPORTED_MODULE_2__["NAME"]);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME", function() { return NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_BOOKMARK_PENDING", function() { return DELETE_BOOKMARK_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BOOKMARK_PENDING", function() { return ADD_BOOKMARK_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOKMARKED", function() { return BOOKMARKED; });
var NAME = "place";
var DELETE_BOOKMARK_PENDING = "deleteBookmarkPending";
var ADD_BOOKMARK_PENDING = "addBookmarkPending";
var BOOKMARKED = "bookmarked";

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux-define");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
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
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getPlaceDetails */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return openInGoogleMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getOptimalBGImageUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPhotoUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return filterCategory; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _category_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55);
var _category_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(55, 1);



var getPlaceDetails = function getPlaceDetails(google, mapRef, placeId) {
  return new Promise(function (resolve, reject) {
    var service = new google.maps.places.PlacesService(mapRef);
    service.getDetails({
      placeId: placeId
    }, function (place, status) {
      if (place && status == google.maps.places.PlacesServiceStatus.OK) {
        resolve(place);
      } else {
        reject(status);
      }
    });
  });
};
function openInGoogleMap(placeId, address) {
  window.open("https://www.google.com/maps/search/?api=1&query=".concat(encodeURI(address), "&query_place_id=").concat(placeId), "_blank");
}
function getOptimalBGImageUrl() {
  var photos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var maxWidth = arguments.length > 1 ? arguments[1] : undefined;
  var url = "";

  if (immutable__WEBPACK_IMPORTED_MODULE_0__["List"].isList(photos)) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = photos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var photo = _step.value;

        if (photo.get("width") >= maxWidth) {
          url = getMaxWidthPhotoUrl(photo.get("photo_reference"), maxWidth);
          break;
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

    if (url === "" && photos.size > 0) {
      url = getMaxWidthPhotoUrl(photos[0].get("photo_reference"), maxWidth);
    }
  } else {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = photos[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _photo = _step2.value;

        if (_photo["width"] >= maxWidth) {
          url = getMaxWidthPhotoUrl(_photo["photo_reference"], maxWidth);
          break;
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    if (url === "" && photos.length > 0) {
      url = getMaxWidthPhotoUrl(photos[0]["photo_reference"], maxWidth);
    }
  }

  return url;
}
function getPhotoUrl(photoReference, maxHeight) {
  return "https://maps.googleapis.com/maps/api/place/photo?maxheight=".concat(maxHeight, "&photoreference=").concat(photoReference, "&key=").concat("AIzaSyCnQOZTelS4uIEcFjqlOMvQJffdWpgIoCk");
}
var filterCategory = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.memoize(filter);

function filter(query) {
  var _ref = query || {
    term: "",
    type: "text"
  },
      _ref$term = _ref.term,
      term = _ref$term === void 0 ? "" : _ref$term,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "text" : _ref$type;

  if (term.length == 0 || type === "category") {
    return _category_json__WEBPACK_IMPORTED_MODULE_2__.slice(0, 5);
  } else {
    var count = 0;
    return _category_json__WEBPACK_IMPORTED_MODULE_2__.filter(function (category) {
      var keep = count < 5 && category.label.slice(0, term.length).toLowerCase() === term;

      if (keep) {
        count += 1;
      }

      return keep;
    });
  }
}

function getMaxWidthPhotoUrl(photoReference, maxWidth) {
  return "https://maps.googleapis.com/maps/api/place/photo?maxwidth=".concat(maxWidth, "&photoreference=").concat(photoReference, "&key=").concat("AIzaSyCnQOZTelS4uIEcFjqlOMvQJffdWpgIoCk");
}

/***/ }),
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
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return fetchCityDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return fetchPlaceDetails; });
/* unused harmony export setCityDetails */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return resetCityDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return textSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return autoCompleteSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clearSuggestion; });
/* unused harmony export cancelAutoCompleteSearch */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addBookmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return setAddBookmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleteBookmarkAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return setDeleteBookmark; });
/* unused harmony export fetchBookmarkPlaces */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return fetchBookmarks; });
/* unused harmony export clearBookmarks */
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

function fetchCityDetails(cityid, uid) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_CITY_DETAILS */ "g"].ACTION,
    cityid: cityid,
    uid: uid
  };
}
function fetchPlaceDetails(cityid, placeId, uid) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_PLACE_DETAILS */ "h"].ACTION,
    cityid: cityid,
    placeId: placeId,
    uid: uid
  };
}
function setCityDetails(city) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* SET_CITY_DETAILS */ "m"].ACTION,
    city: city
  };
}
function resetCityDetails() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* RESET_CITY_DETAILS */ "k"].ACTION
  };
}
function textSearch(query, params) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* TEXT_SEARCH */ "o"].ACTION,
    query: query,
    params: params
  };
}
function autoCompleteSearch(query, params) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* AUTOCOMPLETE_SEARCH */ "b"].ACTION,
    query: query,
    params: params
  };
}
function clearSuggestion() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* CLEAR_SUGGESTIONS */ "e"].ACTION
  };
}
function cancelAutoCompleteSearch() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* CANCEL_AUTOCOMPLETE_SEARCH */ "c"].ACTION
  };
}
function addBookmark(city, place) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* ADD_BOOKMARK */ "a"].ACTION,
    city: city,
    place: place
  };
}
function setAddBookmark(city, place) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* SET_ADD_BOOKMARK */ "l"].ACTION,
    city: city,
    place: place
  };
}
function deleteBookmarkAction(cityid, placeid) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* DELETE_BOOKMARK */ "f"].ACTION,
    cityid: cityid,
    placeid: placeid
  };
}
function setDeleteBookmark(cityid, placeid) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* SET_DELETE_BOOKMARK */ "n"].ACTION,
    cityid: cityid,
    placeid: placeid
  };
}
function fetchBookmarkPlaces(cityid) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* GET_BOOKMARK_PLACES */ "j"].ACTION,
    cityid: cityid
  };
}
function fetchBookmarks(uid) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* GET_BOOKMARKS */ "i"].ACTION,
    uid: uid
  };
}
function clearBookmarks() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* CLEAR_BOOKMARKS */ "d"].ACTION
  };
}

/***/ }),
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
/* 42 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
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
/* 47 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(47);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(35);

// EXTERNAL MODULE: external "qs"
var external_qs_ = __webpack_require__(98);
var external_qs_default = /*#__PURE__*/__webpack_require__.n(external_qs_);

// CONCATENATED MODULE: ./service/constants.js
var API_TEXT_SEARCH = "/searchPlace";
var API_AUTOCOMPLETE_SEARCH = "/autoCompleteSearch";
var API_ADD_BOOKMARK = "/addBookmarkPlace";
var API_DELETE_BOOKMARK = "/removeBookmarkPlace";
var API_GET_ALL_BOOKMARK = "/getBookmarks";
var API_GET_BOOKMARK_PLACES = "/getBookmarkPlaces";
var API_GET_PLACE_DETAILS = "/getPlaceDetails";
var API_GET_CITY_DETAILS = "/getCityDetails";
// EXTERNAL MODULE: ./lib/firebase/auth.js
var auth = __webpack_require__(30);

// CONCATENATED MODULE: ./service/networkService.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return textSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return autoCompleteSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addBookmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteBookmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getAllBookmarks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getAllBookmarksInCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getCityDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getPlaceDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return sendLoginRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return sendLogoutRequest; });





function textSearch(_ref, _ref2) {
  var term = _ref.term,
      pagetoken = _ref.pagetoken;
  var latlngObj = _ref2.latlngObj,
      radius = _ref2.radius;
  var location, config;

  if (latlngObj) {
    location = "".concat(latlngObj.lat, ",").concat(latlngObj.lng);
  }

  if (term) {
    config = {
      params: {
        query: term,
        location: location,
        radius: radius,
        key: "AIzaSyCnQOZTelS4uIEcFjqlOMvQJffdWpgIoCk"
      }
    };
  } else if (pagetoken) {
    config = {
      params: {
        pagetoken: pagetoken,
        key: "AIzaSyCnQOZTelS4uIEcFjqlOMvQJffdWpgIoCk"
      }
    };
  }

  return external_axios_default.a.get(getUrl(API_TEXT_SEARCH), config);
}
function autoCompleteSearch(_ref3, _ref4) {
  var term = _ref3.term;
  var latlngObj = _ref4.latlngObj,
      radius = _ref4.radius;

  if (term === "") {
    return {
      data: {
        predictions: []
      }
    };
  }

  var location;

  if (latlngObj) {
    location = "".concat(latlngObj.lat, ",").concat(latlngObj.lng);
  }

  var config = {
    params: {
      text: term,
      location: location,
      radius: radius,
      key: "AIzaSyCnQOZTelS4uIEcFjqlOMvQJffdWpgIoCk"
    }
  };
  return external_axios_default.a.get(getUrl(API_AUTOCOMPLETE_SEARCH), config);
}
function addBookmark(city, place, uid) {
  var userid = uid || Object(auth["getUserId"])();

  if (userid === "") {
    return null;
  }

  var data = {
    userid: userid,
    city: city,
    place: place,
    key: "AIzaSyCnQOZTelS4uIEcFjqlOMvQJffdWpgIoCk"
  };
  return external_axios_default.a.post(getUrl(API_ADD_BOOKMARK), external_qs_default.a.stringify(data));
}
function deleteBookmark(cityid, placeid, uid) {
  var userid = uid || Object(auth["getUserId"])();

  if (userid === "") {
    return null;
  }

  var config = {
    params: {
      cityid: cityid,
      placeid: placeid,
      userid: userid
    }
  };
  return external_axios_default.a.delete(getUrl(API_DELETE_BOOKMARK), config);
}
function getAllBookmarks(uid) {
  console.log("55555555555555555555555555555555555555555555");
  var userid = uid || Object(auth["getUserId"])();

  if (userid === "") {
    return null;
  }

  var config = {
    params: {
      userid: userid
    }
  };
  console.log("6666666666666666666666666666666666666666666666");
  return external_axios_default.a.get(getUrl(API_GET_ALL_BOOKMARK), config);
}
function getAllBookmarksInCity(cityid, uid) {
  var userid = uid || Object(auth["getUserId"])();

  if (userid === "") {
    return null;
  }

  var config = {
    params: {
      userid: userid,
      cityid: cityid
    }
  };
  return external_axios_default.a.get(getUrl(API_GET_BOOKMARK_PLACES), config);
}
function getCityDetails(cityid, uid) {
  var userid = uid || Object(auth["getUserId"])();
  var config = {
    params: {
      userid: userid,
      cityid: cityid,
      key: "AIzaSyCnQOZTelS4uIEcFjqlOMvQJffdWpgIoCk"
    }
  };
  return external_axios_default.a.get(getUrl(API_GET_CITY_DETAILS), config);
}
function getPlaceDetails(cityid, placeid, uid) {
  var userid = uid || Object(auth["getUserId"])();
  var config = {
    params: {
      userid: userid,
      cityid: cityid,
      placeid: placeid,
      key: "AIzaSyCnQOZTelS4uIEcFjqlOMvQJffdWpgIoCk"
    }
  };
  return external_axios_default.a.get(getUrl(API_GET_PLACE_DETAILS), config);
}
function sendLoginRequest(user) {
  var options = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    data: JSON.stringify(user),
    url: "/api/login"
  };
  return external_axios_default()(options);
}
function sendLogoutRequest() {
  return external_axios_default.a.post("/api/logout", {});
}

function getUrl(apiUrl) {
  /// CLIENT SIDE
  if (typeof window !== "undefined") {
    return apiUrl;
  } /// SERVER SIDE SO WE NEED ABSOLUTE URL
  else {
      return "https://us-central1-triporg-1508486982436.cloudfunctions.net/" + apiUrl;
    }
}

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedCityDetails", function() { return getSelectedCityDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedPlaceObject", function() { return getSelectedPlaceObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPredictionAsList", function() { return getPredictionAsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlacesObject", function() { return getPlacesObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryString", function() { return getQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllBookmarks", function() { return getAllBookmarks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPredictions", function() { return getPredictions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlaces", function() { return getPlaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextToken", function() { return getNextToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBookmarkedCities", function() { return getBookmarkedCities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBookmarkedPlacesForCity", function() { return getBookmarkedPlacesForCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedPlace", function() { return getSelectedPlace; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _lib_google_places__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }





var getSelectedCityDetails = function getSelectedCityDetails(state) {
  return state.get(_constants__WEBPACK_IMPORTED_MODULE_1__["NAME"]).get("selectedCity");
};
var getSelectedPlaceObject = function getSelectedPlaceObject(state, placeId) {
  return state.get(_constants__WEBPACK_IMPORTED_MODULE_1__["NAME"]).get("selectedPlaces").get(placeId);
};
var getPredictionAsList = function getPredictionAsList(state) {
  return state.get(_constants__WEBPACK_IMPORTED_MODULE_1__["NAME"]).get("predictions");
};
var getPlacesObject = function getPlacesObject(state) {
  return state.get(_constants__WEBPACK_IMPORTED_MODULE_1__["NAME"]).get("places");
};
var getQueryString = function getQueryString(state) {
  return state.get(_constants__WEBPACK_IMPORTED_MODULE_1__["NAME"]).get("query");
};
var getAllBookmarks = function getAllBookmarks(state) {
  return state.get(_constants__WEBPACK_IMPORTED_MODULE_1__["NAME"]).get("bookmarks");
};
var getPredictions = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPredictionAsList, getQueryString, function (predictions, query) {
  var predictionsArray = predictions.toJSON ? predictions.toJSON() : predictions;
  var categories = Object(_lib_google_places__WEBPACK_IMPORTED_MODULE_2__[/* filterCategory */ "a"])(query.toJSON());
  var filterCategoryLength = categories.length;

  if (filterCategoryLength > 0) {
    var difference = 5 - filterCategoryLength;
    predictionsArray = predictionsArray.length > difference ? predictionsArray.slice(0, difference) : predictionsArray;
    return [].concat(_toConsumableArray(predictionsArray), _toConsumableArray(categories));
  }

  return predictionsArray;
});
var getPlaces = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPlacesObject, getAllBookmarks, getSelectedCityDetails, function (placesObject, bookmarks, selectedCity) {
  return placesObject && placesObject.get("results") ? placesObject.get("results").map(function (place) {
    var isBookmarked = false;
    var deleteBookmarkPending;
    var addBookmarkPending;
    var cityObj = bookmarks.get(selectedCity.get("place_id"));

    if (cityObj) {
      var placeObj = cityObj.get("places").get(place["place_id"]);

      if (placeObj) {
        isBookmarked = true;

        if (Object(_lib_utils__WEBPACK_IMPORTED_MODULE_3__[/* getValue */ "c"])(_constants__WEBPACK_IMPORTED_MODULE_1__["DELETE_BOOKMARK_PENDING"], placeObj)) {
          deleteBookmarkPending = true;
        } else if (Object(_lib_utils__WEBPACK_IMPORTED_MODULE_3__[/* getValue */ "c"])(_constants__WEBPACK_IMPORTED_MODULE_1__["ADD_BOOKMARK_PENDING"], placeObj)) {
          addBookmarkPending = true;
          isBookmarked = false;
        }
      }
    }

    return _objectSpread({}, place, {
      isBookmarked: isBookmarked,
      deleteBookmarkPending: deleteBookmarkPending,
      addBookmarkPending: addBookmarkPending
    });
  }) : null;
});
var getNextToken = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPlacesObject, function (placesObject) {
  return placesObject ? placesObject.get("next_page_token") : placesObject;
});
var getBookmarkedCities = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAllBookmarks, function (bookmarksObj) {
  if (bookmarksObj) {
    var bookmarksJS = bookmarksObj.toJSON();
    return Object.keys(bookmarksJS).map(function (cityid) {
      return _objectSpread({}, bookmarksJS[cityid]);
    });
  }

  return null;
});
var getBookmarkedPlacesForCity = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAllBookmarks, getSelectedCityDetails, function (bookmarks, selectedCity) {
  if (bookmarks && selectedCity) {
    var cityObj = bookmarks.get(selectedCity.get("place_id"));
    var placesObj = cityObj ? cityObj.get("places").toJSON() : null;
    return placesObj ? Object.keys(placesObj).map(function (placeId) {
      return _objectSpread({}, placesObj[placeId], {
        isBookmarked: true
      });
    }) : null;
  }

  return null;
});
var getSelectedPlace = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getSelectedPlaceObject, function (placeObject) {
  return placeObject ? placeObject.toJSON() : placeObject;
});

/***/ }),
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
/* 55 */
/***/ (function(module) {

module.exports = [{"label":"Art","term":"art","type":"category"},{"label":"Museum","term":"museum","type":"category"},{"label":"History","term":"history","type":"category"},{"label":"Food","term":"food","type":"category"},{"label":"Entertainment","term":"entertainment","type":"category"},{"label":"Park","term":"park","type":"category"},{"label":"Amusement Park","term":"amusement park","type":"category"}];

/***/ }),
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
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _APP_LOCAL_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return clearData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return checkAndClearAppData; });
var _APP_LOCAL_DATA = "tripmark-data";
var _APP_LOCAL_LASTUPDATE_TIME = "tripmark-data-lastupdate-time";
function addItem(key, item) {
  if (!localStorage) return;
  var data = localStorage.getItem(_APP_LOCAL_DATA);
  var obj = data ? JSON.parse(data) : {};
  obj[key] = item;
  localStorage.setItem(_APP_LOCAL_DATA, JSON.stringify(obj));
  localStorage.setItem(_APP_LOCAL_LASTUPDATE_TIME, Date.now());

  _setTimeOutToClearKeyCache();
}
function clearData() {
  if (!localStorage) return;
  localStorage.removeItem(_APP_LOCAL_DATA);
  localStorage.removeItem(_APP_LOCAL_LASTUPDATE_TIME);
}
function checkAndClearAppData() {
  if (!localStorage) return;
  var lastUpdateTime = localStorage.getItem(_APP_LOCAL_LASTUPDATE_TIME);

  if (lastUpdateTime) {
    var diffUpdateTime = Date.now() - lastUpdateTime;

    if (diffUpdateTime > 1000) {
      clearData();
    }
  }
}

function _setTimeOutToClearKeyCache() {
  setTimeout(function () {
    checkAndClearAppData();
  }, 2000);
}

/***/ }),
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
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withAuth; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_auth_store_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony import */ var _redirect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41);
/* harmony import */ var _modules_auth_store_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _modules_app_components_PageLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36);
/* harmony import */ var _withI18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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









function serverComponent(component) {
  return (
    /*#__PURE__*/
    function (_Component) {
      _inherits(AuthComponent, _Component);

      function AuthComponent() {
        _classCallCheck(this, AuthComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(AuthComponent).apply(this, arguments));
      }

      _createClass(AuthComponent, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
          var _this$props = this.props,
              oldfirebaseLoaded = _this$props.firebaseLoaded,
              oldauthenticated = _this$props.authenticated,
              oldtoken = _this$props.token;
          var firebaseLoaded = nextProps.firebaseLoaded,
              authenticated = nextProps.authenticated,
              token = nextProps.token;

          if (token === oldtoken && firebaseLoaded === oldfirebaseLoaded && authenticated === oldauthenticated) {
            return false;
          } else if (oldtoken && oldtoken !== "null" && firebaseLoaded === true && authenticated === true) {
            return false;
          } else if (oldfirebaseLoaded === true && oldauthenticated === true && token && token !== "null") {
            return false;
          } else if (oldtoken === "null" && firebaseLoaded === true && authenticated === false) {
            return false;
          } else if (oldfirebaseLoaded === true && oldauthenticated === false && token === "null") {
            return false;
          }

          return true;
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props2 = this.props,
              authenticated = _this$props2.authenticated,
              firebaseLoaded = _this$props2.firebaseLoaded,
              dispatch = _this$props2.dispatch,
              token = _this$props2.token,
              user = _this$props2.user;
          var Component = component;

          if (firebaseLoaded) {
            if (!authenticated) {
              dispatch(Object(_modules_auth_store_action__WEBPACK_IMPORTED_MODULE_5__[/* setRedirectPath */ "e"])(window.location.pathname));
              Object(_redirect__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(undefined, "/login");
            }

            return authenticated ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, this.props) : null;
          } else if (user && user.token) {
            if (token === "null") {
              dispatch(Object(_modules_auth_store_action__WEBPACK_IMPORTED_MODULE_5__[/* setRedirectPath */ "e"])(window.location.pathname));
              Object(_redirect__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(undefined, "/login");
            }

            return user.token !== "null" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, this.props) : null;
          } else {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_modules_app_components_PageLoader__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null);
          }
        }
      }], [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
            var req, res, query, store, componentProps, user;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    req = _ref.req, res = _ref.res, query = _ref.query, store = _ref.store;
                    componentProps = {};
                    user = req && req.session ? req.session.user : null; // const uid = req && req.session ? req.session.uid : null;
                    /// THIS IS SITUATION WHERE GET INITIAL PROPS IS EXECUTIING IN SERVER SIDE

                    if (!(user && store && component.getInitialProps)) {
                      _context.next = 9;
                      break;
                    }

                    _context.next = 6;
                    return component.getInitialProps({
                      store: store,
                      query: query,
                      uid: user.uid
                    });

                  case 6:
                    componentProps = _context.sent;
                    _context.next = 13;
                    break;

                  case 9:
                    if (!(typeof window !== "undefined" && store && component.getInitialProps)) {
                      _context.next = 13;
                      break;
                    }

                    _context.next = 12;
                    return component.getInitialProps({
                      store: store,
                      query: query
                    });

                  case 12:
                    componentProps = _context.sent;

                  case 13:
                    if (user && user.token === "null") {
                      Object(_redirect__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(res, "/");
                      store.dispatch(Object(_modules_auth_store_action__WEBPACK_IMPORTED_MODULE_5__[/* setRedirectPath */ "e"])(document.location.pathname));
                    }

                    return _context.abrupt("return", _objectSpread({
                      user: user
                    }, componentProps));

                  case 15:
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

      return AuthComponent;
    }(react__WEBPACK_IMPORTED_MODULE_1__["Component"])
  );
}

function withAuth(component, localesDataArray) {
  var mapStateToProps = function mapStateToProps(state) {
    return {
      authenticated: Object(_modules_auth_store_selector__WEBPACK_IMPORTED_MODULE_3__[/* isAuthenticated */ "b"])(state),
      firebaseLoaded: Object(_modules_auth_store_selector__WEBPACK_IMPORTED_MODULE_3__[/* isFirebaseLoaded */ "c"])(state)
    };
  };

  return Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Object(_withI18next__WEBPACK_IMPORTED_MODULE_7__[/* withI18next */ "a"])(localesDataArray)(serverComponent(component)));
}

/***/ }),
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
/* 84 */,
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var localStorage_namespaceObject = {};
__webpack_require__.r(localStorage_namespaceObject);
__webpack_require__.d(localStorage_namespaceObject, "addRemovedPlaces", function() { return addRemovedPlaces; });
__webpack_require__.d(localStorage_namespaceObject, "addBookmarkedPlaces", function() { return addBookmarkedPlaces; });
__webpack_require__.d(localStorage_namespaceObject, "handleStorageListener", function() { return handleStorageListener; });

// EXTERNAL MODULE: ./modules/place/store/action.js
var store_action = __webpack_require__(31);

// EXTERNAL MODULE: ./modules/place/store/actionTypes.js
var actionTypes = __webpack_require__(3);

// EXTERNAL MODULE: external "immutable"
var external_immutable_ = __webpack_require__(11);

// EXTERNAL MODULE: ./lib/google/places.js
var google_places = __webpack_require__(26);

// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(20);

// EXTERNAL MODULE: ./modules/place/store/constants.js
var constants = __webpack_require__(4);

// CONCATENATED MODULE: ./modules/place/store/reducer.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var myRecord = Object(external_immutable_["Record"])({
  predictions: undefined,
  selectedCity: undefined,
  selectedPlaces: undefined,
  places: undefined,
  query: undefined,
  bookmarks: undefined
});
var initialState = new myRecord({
  predictions: Object(external_immutable_["List"])(),
  selectedCity: undefined,
  selectedPlaces: Object(external_immutable_["Map"])(),
  places: Object(external_immutable_["Map"])(),
  query: Object(external_immutable_["Map"])({
    term: "",
    label: "",
    type: "text"
  }),
  bookmarks: undefined
});
function placeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes["g" /* FETCH_CITY_DETAILS */].SUCCESS:
      {
        var _action$response$data = action.response.data,
            city = _action$response$data.result,
            places = _action$response$data.places;
        var cityid = city["place_id"];
        var bookmarks = state.get("bookmarks") || Object(external_immutable_["Map"])();
        var cityObj = bookmarks.get(cityid) || Object(external_immutable_["Map"])();
        var newBookmarks = bookmarks.set(cityid, cityObj.set("places", Object(external_immutable_["Map"])(places)));
        var updatedBookmarks = bookmarks.mergeDeep(newBookmarks);
        return state.merge({
          selectedCity: city,
          bookmarks: updatedBookmarks
        });
      }

    case actionTypes["h" /* FETCH_PLACE_DETAILS */].SUCCESS:
      {
        var selectedPlaces = state.get("selectedPlaces");
        var _action$response$data2 = action.response.data,
            result = _action$response$data2.result,
            bookmarked = _action$response$data2.bookmarked;
        var place = Object(external_immutable_["Map"])(result).set("bookmarked", bookmarked);
        selectedPlaces = selectedPlaces.set(result["place_id"], place);
        return state.merge({
          selectedPlaces: selectedPlaces
        });
      }

    case actionTypes["b" /* AUTOCOMPLETE_SEARCH */].SUCCESS:
      {
        var query = action.query;
        var predictions = Object(external_immutable_["List"])(action.response.data["predictions"]);

        if (predictions.length > 5) {
          predictions = predictions.slice(0, 4);
        }

        return state.merge({
          predictions: predictions,
          query: query
        });
      }

    case actionTypes["e" /* CLEAR_SUGGESTIONS */].ACTION:
      {
        var _query = state.get("query");

        var updatedQuery = _query.set("term", "").set("type", "text");

        return state.merge({
          predictions: [],
          query: updatedQuery
        });
      }

    case actionTypes["o" /* TEXT_SEARCH */].SUCCESS:
      {
        var _query2 = action.query;

        var _places = Object(external_immutable_["Map"])(action.response.data);

        if (_places.get("status") === "INVALID_REQUEST") {
          return state;
        }

        if (_query2["pagetoken"]) {
          var newToken = _places.get("next_page_token");

          var oldPlace = state.get("places");
          var oldResults = oldPlace.get("results");
          var oldToken = oldPlace.get("next_page_token");

          if (oldPlace && oldResults && oldToken !== newToken) {
            var updatedResults = oldResults.concat(_places.get("results"));
            _places = _places.set("results", updatedResults);
          }
        }

        return _query2["term"] ? state.merge({
          places: _places,
          query: _query2
        }) : state.merge({
          places: _places
        });
      }

    case actionTypes["a" /* ADD_BOOKMARK */].PENDING:
      {
        var _city = action.city,
            _place = action.place;

        var updatedPlace = _objectSpread({}, _place, _defineProperty({}, constants["ADD_BOOKMARK_PENDING"], true));

        var _bookmarks = state.get("bookmarks") || Object(external_immutable_["Map"])();

        var cityMapObj = _city ? Object(external_immutable_["Map"])(_city) : Object(external_immutable_["Map"])();
        var id = _city["place_id"];

        var _newBookmarks = Object(external_immutable_["Map"])(_defineProperty({}, id, cityMapObj.set("places", Object(external_immutable_["Map"])(_defineProperty({}, _place.place_id, updatedPlace)))));

        var _updatedBookmarks = _bookmarks.mergeDeep(_newBookmarks);

        var _selectedPlaces = state.get("selectedPlaces");

        var selectedPlace = _selectedPlaces.get(_place["place_id"]);

        if (selectedPlace) {
          _selectedPlaces = _selectedPlaces.set(_place["place_id"], selectedPlace.set(constants["ADD_BOOKMARK_PENDING"], true));
        }

        return state.merge({
          bookmarks: _updatedBookmarks,
          selectedPlaces: _selectedPlaces
        });
      }

    case actionTypes["l" /* SET_ADD_BOOKMARK */].ACTION:
      {
        var _city2 = action.city,
            _place2 = action.place;

        var _updatedPlace = _objectSpread({}, _place2, _defineProperty({}, constants["BOOKMARKED"], true));

        var _bookmarks2 = state.get("bookmarks") || Object(external_immutable_["Map"])();

        var _cityMapObj = _city2 ? Object(external_immutable_["Map"])(_city2) : Object(external_immutable_["Map"])();

        var _id = _city2["place_id"];

        var _newBookmarks2 = Object(external_immutable_["Map"])(_defineProperty({}, _id, _cityMapObj.set("places", Object(external_immutable_["Map"])(_defineProperty({}, _place2.place_id, _updatedPlace)))));

        var _updatedBookmarks2 = _bookmarks2.mergeDeep(_newBookmarks2);

        var _selectedPlaces2 = state.get("selectedPlaces");

        var _selectedPlace = _selectedPlaces2.get(_place2["place_id"]);

        if (_selectedPlace) {
          _selectedPlaces2 = _selectedPlaces2.set(_place2["place_id"], _selectedPlace.set(constants["BOOKMARKED"], true));
        }

        return state.merge({
          bookmarks: _updatedBookmarks2,
          selectedPlaces: _selectedPlaces2
        });
      }

    case actionTypes["a" /* ADD_BOOKMARK */].SUCCESS:
      {
        var _city3 = action.city,
            _place3 = action.place;

        var _bookmarks3 = state.get("bookmarks") || Object(external_immutable_["Map"])();

        var _cityid = _city3["place_id"];
        var placeid = _place3["place_id"];

        var _cityObj = _bookmarks3.get(_cityid);

        if (_cityObj) {
          var _places2 = _cityObj.get("places");

          if (_places2) {
            var _place4 = Object(utils["c" /* getValue */])(placeid, _places2);

            var _updatedPlace2 = Object(utils["a" /* deleteKey */])(constants["ADD_BOOKMARK_PENDING"], _place4);

            var updatedPlaces = _places2.set(placeid, _updatedPlace2);

            _bookmarks3 = _bookmarks3.set(_cityid, _cityObj.set("places", updatedPlaces));
          }
        }

        var _selectedPlaces3 = state.get("selectedPlaces");

        var _selectedPlace2 = _selectedPlaces3.get(_place3["place_id"]);

        if (_selectedPlace2) {
          _selectedPlaces3 = _selectedPlaces3.set(_place3["place_id"], _selectedPlace2.set(constants["BOOKMARKED"], true).delete(constants["ADD_BOOKMARK_PENDING"]));
        }

        return state.merge({
          bookmarks: _bookmarks3,
          selectedPlaces: _selectedPlaces3
        });
      }

    case actionTypes["a" /* ADD_BOOKMARK */].ERROR:
      {
        var _city4 = action.city,
            _place5 = action.place;
        var _cityid2 = _city4["place_id"];
        var _placeid = _place5["place_id"];

        var _bookmarks4 = state.get("bookmarks");

        if (_bookmarks4) {
          var _cityObj2 = _bookmarks4.get(_cityid2);

          if (_cityObj2) {
            var _places3 = _cityObj2.get("places");

            if (_places3) {
              var _updatedPlaces = _places3.delete(_placeid);

              if (_updatedPlaces.isEmpty()) {
                _bookmarks4 = _bookmarks4.delete(_cityid2);
              } else {
                _bookmarks4 = _bookmarks4.set(_cityid2, _cityObj2.set("places", _updatedPlaces));
              }
            }
          }
        }

        var _selectedPlaces4 = state.get("selectedPlaces");

        var _selectedPlace3 = _selectedPlaces4.get(_placeid);

        if (_selectedPlace3) {
          _selectedPlaces4 = _selectedPlace3.set(_placeid, _selectedPlace3.delete(constants["ADD_BOOKMARK_PENDING"]));
        }

        return state.merge({
          bookmarks: _bookmarks4,
          selectedPlaces: _selectedPlaces4
        });
      }

    case actionTypes["j" /* GET_BOOKMARK_PLACES */].SUCCESS:
      {
        var response = action.response,
            _cityid3 = action.cityid;
        var _places4 = response.data;

        var _bookmarks5 = state.get("bookmarks") || Object(external_immutable_["Map"])();

        var _cityObj3 = _bookmarks5.get(_cityid3) || Object(external_immutable_["Map"])();

        var _newBookmarks3 = _bookmarks5.set(_cityid3, _cityObj3.set("places", Object(external_immutable_["Map"])(_places4)));

        var _updatedBookmarks3 = _bookmarks5.mergeDeep(_newBookmarks3);

        return state.merge({
          bookmarks: _updatedBookmarks3
        });
      }

    case actionTypes["f" /* DELETE_BOOKMARK */].PENDING:
      {
        var _cityid4 = action.cityid,
            _placeid2 = action.placeid;

        var _bookmarks6 = state.get("bookmarks");

        if (_bookmarks6) {
          var _cityObj4 = _bookmarks6.get(_cityid4);

          if (_cityObj4) {
            var _places5 = _cityObj4.get("places");

            if (_places5) {
              var _place6 = Object(utils["c" /* getValue */])(_placeid2, _places5);

              var _updatedPlace3 = Object(utils["d" /* setValue */])(constants["DELETE_BOOKMARK_PENDING"], true, _place6);

              var _updatedPlaces2 = _places5.set(_placeid2, _updatedPlace3);

              _bookmarks6 = _bookmarks6.set(_cityid4, _cityObj4.set("places", _updatedPlaces2));
            }
          }
        }

        var _selectedPlaces5 = state.get("selectedPlaces");

        var _selectedPlace4 = _selectedPlaces5.get(_placeid2);

        if (_selectedPlace4) {
          _selectedPlaces5 = _selectedPlace4.set(_placeid2, _selectedPlace4.set(constants["DELETE_BOOKMARK_PENDING"], true));
        }

        return state.merge({
          bookmarks: _bookmarks6,
          selectedPlaces: _selectedPlaces5
        });
      }

    case actionTypes["f" /* DELETE_BOOKMARK */].ERROR:
      {
        var _cityid5 = action.cityid,
            _placeid3 = action.placeid;

        var _bookmarks7 = state.get("bookmarks");

        if (_bookmarks7) {
          var _cityObj5 = _bookmarks7.get(_cityid5);

          if (_cityObj5) {
            var _places6 = _cityObj5.get("places");

            if (_places6) {
              var _place7 = Object(utils["c" /* getValue */])(_placeid3, _places6);

              var _updatedPlace4 = Object(utils["a" /* deleteKey */])(constants["DELETE_BOOKMARK_PENDING"], _place7);

              var _updatedPlaces3 = _places6.set(_placeid3, _updatedPlace4);

              _bookmarks7 = _bookmarks7.set(_cityid5, _cityObj5.set("places", _updatedPlaces3));
            }
          }
        }

        var _selectedPlaces6 = state.get("selectedPlaces");

        var _selectedPlace5 = _selectedPlaces6.get(_placeid3);

        if (_selectedPlace5) {
          _selectedPlaces6 = _selectedPlace5.set(_placeid3, _selectedPlace5.delete(constants["DELETE_BOOKMARK_PENDING"]));
        }

        return state.merge({
          bookmarks: _bookmarks7,
          selectedPlaces: _selectedPlaces6
        });
      }

    case actionTypes["n" /* SET_DELETE_BOOKMARK */].ACTION:
    case actionTypes["f" /* DELETE_BOOKMARK */].SUCCESS:
      {
        var _cityid6 = action.cityid,
            _placeid4 = action.placeid;

        var _bookmarks8 = state.get("bookmarks");

        if (_bookmarks8) {
          var _cityObj6 = _bookmarks8.get(_cityid6);

          if (_cityObj6) {
            var _places7 = _cityObj6.get("places");

            if (_places7) {
              var _updatedPlaces4 = _places7.delete(_placeid4);

              if (_updatedPlaces4.isEmpty()) {
                _bookmarks8 = _bookmarks8.delete(_cityid6);
              } else {
                _bookmarks8 = _bookmarks8.set(_cityid6, _cityObj6.set("places", _updatedPlaces4));
              }
            }
          }
        }

        var _selectedPlaces7 = state.get("selectedPlaces");

        var _selectedPlace6 = _selectedPlaces7.get(_placeid4);

        if (_selectedPlace6) {
          _selectedPlaces7 = _selectedPlace6.set(_placeid4, _selectedPlace6.set(constants["BOOKMARKED"], false).delete(constants["DELETE_BOOKMARK_PENDING"]));
        }

        return state.merge({
          bookmarks: _bookmarks8,
          selectedPlaces: _selectedPlaces7
        });
      }

    case actionTypes["i" /* GET_BOOKMARKS */].SUCCESS:
      {
        var _result = action.response.data;

        var _bookmarks9 = Object(external_immutable_["Map"])();

        _bookmarks9 = _bookmarks9.mergeDeep(_result);
        return state.merge({
          bookmarks: _bookmarks9
        });
      }

    case actionTypes["k" /* RESET_CITY_DETAILS */].ACTION:
      {
        return state.merge({
          selectedCity: undefined,
          selectedPlaces: Object(external_immutable_["Map"])(),
          places: Object(external_immutable_["Map"])(),
          predictions: Object(google_places["a" /* filterCategory */])(),
          query: Object(external_immutable_["Map"])({
            term: "",
            label: "",
            type: "text"
          })
        });
      }

    case actionTypes["d" /* CLEAR_BOOKMARKS */].ACTION:
      {
        return state.merge({
          bookmarks: undefined
        });
      }
  }

  return state;
}
// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(10);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(6);

// EXTERNAL MODULE: ./service/networkService.js + 1 modules
var networkService = __webpack_require__(48);

// EXTERNAL MODULE: ./lib/localStore.js
var localStore = __webpack_require__(77);

// CONCATENATED MODULE: ./modules/place/store/localStorage.js


var PREFIX_REMOVE_IDS = "REMOVE_IDS:";
var PREFIX_ADDBOOKMARK_IDS = "ADD_BOOKMARK_IDS:";
function addRemovedPlaces(cityid, placeid) {
  localStore["b" /* addItem */](PREFIX_REMOVE_IDS + cityid + placeid, {
    cityid: cityid,
    placeid: placeid
  });
}
function addBookmarkedPlaces(city, place) {
  if (city) {
    localStore["b" /* addItem */](PREFIX_ADDBOOKMARK_IDS + city["place_id"] + place["place_id"], {
      city: city,
      place: place
    });
  }
}
function handleStorageListener(e, dispatch) {
  if (e.key == localStore["a" /* _APP_LOCAL_DATA */] && e.newValue) {
    var obj = JSON.parse(e.newValue);
    Object.keys(obj).forEach(function (key) {
      if (key.startsWith(PREFIX_ADDBOOKMARK_IDS)) {
        var _obj$key = obj[key],
            city = _obj$key.city,
            place = _obj$key.place;
        dispatch(Object(store_action["i" /* setAddBookmark */])(city, place));
      } else {
        var _obj$key2 = obj[key],
            cityid = _obj$key2.cityid,
            placeid = _obj$key2.placeid;
        dispatch(Object(store_action["j" /* setDeleteBookmark */])(cityid, placeid));
      }
    });
    localStore["d" /* clearData */]();
  }
}
// CONCATENATED MODULE: ./modules/place/store/saga.js


var _marked =
/*#__PURE__*/
regenerator_default.a.mark(dofetchCityDetails),
    _marked2 =
/*#__PURE__*/
regenerator_default.a.mark(dofetchPlaceDetails),
    _marked3 =
/*#__PURE__*/
regenerator_default.a.mark(doTextSearch),
    _marked4 =
/*#__PURE__*/
regenerator_default.a.mark(doAutoCompleteSearchCancellable),
    _marked5 =
/*#__PURE__*/
regenerator_default.a.mark(doAutoCompleteSearch),
    _marked6 =
/*#__PURE__*/
regenerator_default.a.mark(doAddBookmark),
    _marked7 =
/*#__PURE__*/
regenerator_default.a.mark(doGetAllBookmarksInCity),
    _marked8 =
/*#__PURE__*/
regenerator_default.a.mark(doDeleteBookmarks),
    _marked9 =
/*#__PURE__*/
regenerator_default.a.mark(doGetAllBookmarks),
    _marked10 =
/*#__PURE__*/
regenerator_default.a.mark(cancelTask),
    _marked11 =
/*#__PURE__*/
regenerator_default.a.mark(saga);





function dofetchCityDetails(_ref) {
  var cityid, uid, response;
  return regenerator_default.a.wrap(function dofetchCityDetails$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          cityid = _ref.cityid, uid = _ref.uid;
          _context.prev = 1;
          _context.next = 4;
          return Object(effects_["put"])({
            type: actionTypes["g" /* FETCH_CITY_DETAILS */].PENDING
          });

        case 4:
          _context.next = 6;
          return Object(effects_["call"])(networkService["f" /* getCityDetails */], cityid, uid);

        case 6:
          response = _context.sent;
          _context.next = 9;
          return Object(effects_["put"])({
            type: actionTypes["g" /* FETCH_CITY_DETAILS */].SUCCESS,
            response: response
          });

        case 9:
          _context.next = 15;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](1);
          _context.next = 15;
          return Object(effects_["put"])({
            type: actionTypes["g" /* FETCH_CITY_DETAILS */].ERROR,
            error: _context.t0
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[1, 11]]);
}
function dofetchPlaceDetails(_ref2) {
  var cityid, placeId, uid, response;
  return regenerator_default.a.wrap(function dofetchPlaceDetails$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          cityid = _ref2.cityid, placeId = _ref2.placeId, uid = _ref2.uid;
          _context2.prev = 1;
          _context2.next = 4;
          return Object(effects_["put"])({
            type: actionTypes["h" /* FETCH_PLACE_DETAILS */].PENDING
          });

        case 4:
          _context2.next = 6;
          return Object(effects_["call"])(networkService["g" /* getPlaceDetails */], cityid, placeId, uid);

        case 6:
          response = _context2.sent;
          _context2.next = 9;
          return Object(effects_["put"])({
            type: actionTypes["h" /* FETCH_PLACE_DETAILS */].SUCCESS,
            response: response
          });

        case 9:
          _context2.next = 15;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](1);
          _context2.next = 15;
          return Object(effects_["put"])({
            type: actionTypes["h" /* FETCH_PLACE_DETAILS */].ERROR,
            error: _context2.t0
          });

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this, [[1, 11]]);
}
function doTextSearch(_ref3) {
  var query, params, response;
  return regenerator_default.a.wrap(function doTextSearch$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          query = _ref3.query, params = _ref3.params;
          _context3.next = 3;
          return Object(effects_["put"])({
            type: actionTypes["o" /* TEXT_SEARCH */].PENDING
          });

        case 3:
          _context3.next = 5;
          return Object(effects_["put"])({
            type: actionTypes["c" /* CANCEL_AUTOCOMPLETE_SEARCH */].ACTION
          });

        case 5:
          _context3.prev = 5;
          _context3.next = 8;
          return Object(effects_["call"])(networkService["j" /* textSearch */], query, params);

        case 8:
          response = _context3.sent;
          _context3.next = 11;
          return Object(effects_["put"])({
            type: actionTypes["o" /* TEXT_SEARCH */].SUCCESS,
            response: response,
            query: query
          });

        case 11:
          _context3.next = 17;
          break;

        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](5);
          _context3.next = 17;
          return Object(effects_["put"])({
            type: actionTypes["o" /* TEXT_SEARCH */].ERROR,
            error: _context3.t0
          });

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, this, [[5, 13]]);
}
function doAutoCompleteSearchCancellable(_ref4) {
  var query, params, response;
  return regenerator_default.a.wrap(function doAutoCompleteSearchCancellable$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          query = _ref4.query, params = _ref4.params;
          _context4.next = 3;
          return Object(effects_["put"])({
            type: actionTypes["b" /* AUTOCOMPLETE_SEARCH */].PENDING
          });

        case 3:
          _context4.prev = 3;
          _context4.next = 6;
          return Object(effects_["call"])(networkService["b" /* autoCompleteSearch */], query, params);

        case 6:
          response = _context4.sent;
          _context4.next = 9;
          return Object(effects_["put"])({
            type: actionTypes["b" /* AUTOCOMPLETE_SEARCH */].SUCCESS,
            response: response,
            query: query
          });

        case 9:
          _context4.next = 15;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](3);
          _context4.next = 15;
          return Object(effects_["put"])({
            type: actionTypes["b" /* AUTOCOMPLETE_SEARCH */].ERROR,
            error: _context4.t0
          });

        case 15:
          _context4.prev = 15;
          _context4.next = 18;
          return Object(effects_["cancelled"])();

        case 18:
          if (!_context4.sent) {
            _context4.next = 21;
            break;
          }

          _context4.next = 21;
          return Object(effects_["put"])({
            type: actionTypes["b" /* AUTOCOMPLETE_SEARCH */].CANCEL
          });

        case 21:
          return _context4.finish(15);

        case 22:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, this, [[3, 11, 15, 22]]);
}
function doAutoCompleteSearch(_ref5) {
  var query, params, autoCompleteSearchTask;
  return regenerator_default.a.wrap(function doAutoCompleteSearch$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          query = _ref5.query, params = _ref5.params;
          _context5.prev = 1;
          _context5.next = 4;
          return Object(effects_["fork"])(doAutoCompleteSearchCancellable, {
            query: query,
            params: params
          });

        case 4:
          autoCompleteSearchTask = _context5.sent;
          _context5.next = 7;
          return Object(effects_["takeLatest"])(actionTypes["c" /* CANCEL_AUTOCOMPLETE_SEARCH */].ACTION, cancelTask, autoCompleteSearchTask);

        case 7:
          _context5.prev = 7;
          _context5.next = 10;
          return Object(effects_["cancelled"])();

        case 10:
          if (!_context5.sent) {
            _context5.next = 13;
            break;
          }

          _context5.next = 13;
          return Object(effects_["put"])({
            type: actionTypes["b" /* AUTOCOMPLETE_SEARCH */].CANCEL
          });

        case 13:
          return _context5.finish(7);

        case 14:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, this, [[1,, 7, 14]]);
}
function doAddBookmark(_ref6) {
  var city, place, response;
  return regenerator_default.a.wrap(function doAddBookmark$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          city = _ref6.city, place = _ref6.place;
          _context6.prev = 1;
          _context6.next = 4;
          return Object(effects_["put"])({
            type: actionTypes["a" /* ADD_BOOKMARK */].PENDING,
            city: city,
            place: place
          });

        case 4:
          _context6.next = 6;
          return Object(effects_["call"])(networkService["a" /* addBookmark */], city, place);

        case 6:
          response = _context6.sent;
          addBookmarkedPlaces(city, place);
          _context6.next = 10;
          return Object(effects_["put"])({
            type: actionTypes["a" /* ADD_BOOKMARK */].SUCCESS,
            city: city,
            place: place
          });

        case 10:
          _context6.next = 16;
          break;

        case 12:
          _context6.prev = 12;
          _context6.t0 = _context6["catch"](1);
          _context6.next = 16;
          return Object(effects_["put"])({
            type: actionTypes["a" /* ADD_BOOKMARK */].ERROR,
            city: city,
            place: place,
            error: _context6.t0
          });

        case 16:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, this, [[1, 12]]);
}
function doGetAllBookmarksInCity(_ref7) {
  var cityid, response;
  return regenerator_default.a.wrap(function doGetAllBookmarksInCity$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          cityid = _ref7.cityid;
          _context7.prev = 1;
          _context7.next = 4;
          return Object(effects_["put"])({
            type: actionTypes["j" /* GET_BOOKMARK_PLACES */].PENDING
          });

        case 4:
          _context7.next = 6;
          return Object(effects_["call"])(networkService["e" /* getAllBookmarksInCity */], cityid);

        case 6:
          response = _context7.sent;
          _context7.next = 9;
          return Object(effects_["put"])({
            type: actionTypes["j" /* GET_BOOKMARK_PLACES */].SUCCESS,
            cityid: cityid,
            response: response
          });

        case 9:
          _context7.next = 15;
          break;

        case 11:
          _context7.prev = 11;
          _context7.t0 = _context7["catch"](1);
          _context7.next = 15;
          return Object(effects_["put"])({
            type: actionTypes["j" /* GET_BOOKMARK_PLACES */].ERROR
          });

        case 15:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, this, [[1, 11]]);
}
function doDeleteBookmarks(_ref8) {
  var cityid, placeid, response;
  return regenerator_default.a.wrap(function doDeleteBookmarks$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          cityid = _ref8.cityid, placeid = _ref8.placeid;
          _context8.prev = 1;
          _context8.next = 4;
          return Object(effects_["put"])({
            type: actionTypes["f" /* DELETE_BOOKMARK */].PENDING,
            cityid: cityid,
            placeid: placeid
          });

        case 4:
          _context8.next = 6;
          return Object(effects_["call"])(networkService["c" /* deleteBookmark */], cityid, placeid);

        case 6:
          response = _context8.sent;
          addRemovedPlaces(cityid, placeid);
          _context8.next = 10;
          return Object(effects_["put"])({
            type: actionTypes["f" /* DELETE_BOOKMARK */].SUCCESS,
            cityid: cityid,
            placeid: placeid
          });

        case 10:
          _context8.next = 16;
          break;

        case 12:
          _context8.prev = 12;
          _context8.t0 = _context8["catch"](1);
          _context8.next = 16;
          return Object(effects_["put"])({
            type: actionTypes["f" /* DELETE_BOOKMARK */].ERROR,
            cityid: cityid,
            placeid: placeid,
            error: _context8.t0
          });

        case 16:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8, this, [[1, 12]]);
}
function doGetAllBookmarks(_ref9) {
  var uid, response;
  return regenerator_default.a.wrap(function doGetAllBookmarks$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          uid = _ref9.uid;
          _context9.prev = 1;
          _context9.next = 4;
          return Object(effects_["put"])({
            type: actionTypes["i" /* GET_BOOKMARKS */].PENDING
          });

        case 4:
          _context9.next = 6;
          return Object(effects_["call"])(networkService["d" /* getAllBookmarks */], uid);

        case 6:
          response = _context9.sent;
          _context9.next = 9;
          return Object(effects_["put"])({
            type: actionTypes["i" /* GET_BOOKMARKS */].SUCCESS,
            response: response
          });

        case 9:
          _context9.next = 15;
          break;

        case 11:
          _context9.prev = 11;
          _context9.t0 = _context9["catch"](1);
          _context9.next = 15;
          return Object(effects_["put"])({
            type: actionTypes["i" /* GET_BOOKMARKS */].ERROR,
            error: _context9.t0
          });

        case 15:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9, this, [[1, 11]]);
}
function cancelTask(task) {
  return regenerator_default.a.wrap(function cancelTask$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(effects_["cancel"])(task);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10, this);
}
function saga() {
  return regenerator_default.a.wrap(function saga$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(effects_["all"])([Object(effects_["fork"])(effects_["takeEvery"], actionTypes["g" /* FETCH_CITY_DETAILS */].ACTION, dofetchCityDetails), Object(effects_["fork"])(effects_["takeEvery"], actionTypes["h" /* FETCH_PLACE_DETAILS */].ACTION, dofetchPlaceDetails), Object(effects_["fork"])(effects_["takeEvery"], actionTypes["o" /* TEXT_SEARCH */].ACTION, doTextSearch), Object(effects_["fork"])(effects_["takeLatest"], actionTypes["b" /* AUTOCOMPLETE_SEARCH */].ACTION, doAutoCompleteSearch), Object(effects_["fork"])(effects_["takeEvery"], actionTypes["a" /* ADD_BOOKMARK */].ACTION, doAddBookmark), Object(effects_["fork"])(effects_["takeEvery"], actionTypes["j" /* GET_BOOKMARK_PLACES */].ACTION, doGetAllBookmarksInCity), Object(effects_["fork"])(effects_["takeEvery"], actionTypes["f" /* DELETE_BOOKMARK */].ACTION, doDeleteBookmarks), Object(effects_["fork"])(effects_["takeEvery"], actionTypes["i" /* GET_BOOKMARKS */].ACTION, doGetAllBookmarks)]);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11, this);
}
// EXTERNAL MODULE: ./modules/place/store/selector.js
var selector = __webpack_require__(49);

// CONCATENATED MODULE: ./modules/place/store/index.js
/* unused concated harmony import action */
/* unused concated harmony import actionTypes */
/* concated harmony reexport reducer */__webpack_require__.d(__webpack_exports__, "c", function() { return placeReducer; });
/* concated harmony reexport saga */__webpack_require__.d(__webpack_exports__, "d", function() { return saga; });
/* concated harmony reexport constants */__webpack_require__.d(__webpack_exports__, "a", function() { return constants; });
/* concated harmony reexport selectors */__webpack_require__.d(__webpack_exports__, "e", function() { return selector; });
/* concated harmony reexport localStorageListner */__webpack_require__.d(__webpack_exports__, "b", function() { return localStorage_namespaceObject; });









/***/ }),
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),
/* 96 */,
/* 97 */,
/* 98 */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
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
/* 139 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/home-bg-b98273760c71e1c3fa8a0b6cba76f29c.jpg";

/***/ }),
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(155);


/***/ }),
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(10);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(33);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(14);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(15);

// EXTERNAL MODULE: ../routes.js
var routes = __webpack_require__(18);

// EXTERNAL MODULE: ./components/GridContainer/index.js + 1 modules
var GridContainer = __webpack_require__(51);

// EXTERNAL MODULE: ./assets/jss/material-kit-react.js
var material_kit_react = __webpack_require__(1);

// CONCATENATED MODULE: ./modules/home/containers/HomePage/homePageStyle.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var homePageStyle_homePageStyle = function homePageStyle(theme) {
  var _objectSpread2, _autoComplete;

  return {
    container: _objectSpread({}, material_kit_react["b" /* container */], (_objectSpread2 = {
      top: "300px"
    }, _defineProperty(_objectSpread2, theme.breakpoints.down("sm"), {
      top: "120px"
    }), _defineProperty(_objectSpread2, "display", "flex"), _defineProperty(_objectSpread2, "justifyContent", "center"), _defineProperty(_objectSpread2, "overflowY", "visible"), _defineProperty(_objectSpread2, "position", "absolute"), _objectSpread2)),
    parrallexClass: _defineProperty({
      height: "80vh"
    }, theme.breakpoints.down("sm"), {
      height: "40vh"
    }),
    cityGrids: _objectSpread({}, material_kit_react["b" /* container */], {
      marginTop: "20px"
    }),
    autoComplete: (_autoComplete = {}, _defineProperty(_autoComplete, theme.breakpoints.down("sm"), {
      width: "90%"
    }), _defineProperty(_autoComplete, "width", "50%"), _autoComplete),
    loadingBar: {
      width: "100%",
      marginTop: "20px",
      display: "flex",
      justifyContent: "center"
    }
  };
};

/* harmony default export */ var HomePage_homePageStyle = (homePageStyle_homePageStyle);
// EXTERNAL MODULE: ./components/GridItem/index.js + 1 modules
var GridItem = __webpack_require__(38);

// EXTERNAL MODULE: ./lib/withLibs.js + 1 modules
var withLibs = __webpack_require__(75);

// EXTERNAL MODULE: ./modules/app/components/AppHeader/index.js + 12 modules
var AppHeader = __webpack_require__(74);

// EXTERNAL MODULE: ./components/GoogleAutoComplete/index.js + 2 modules
var GoogleAutoComplete = __webpack_require__(54);

// EXTERNAL MODULE: ./modules/app/components/PageLoader/index.js + 1 modules
var PageLoader = __webpack_require__(36);

// EXTERNAL MODULE: ./modules/auth/store/action.js
var action = __webpack_require__(19);

// EXTERNAL MODULE: ./modules/place/store/index.js + 3 modules
var place_store = __webpack_require__(85);

// EXTERNAL MODULE: external "@material-ui/core/styles/withStyles"
var withStyles_ = __webpack_require__(7);
var withStyles_default = /*#__PURE__*/__webpack_require__.n(withStyles_);

// EXTERNAL MODULE: external "@material-ui/core/CardActionArea"
var CardActionArea_ = __webpack_require__(93);
var CardActionArea_default = /*#__PURE__*/__webpack_require__.n(CardActionArea_);

// EXTERNAL MODULE: external "@material-ui/core/CardContent"
var CardContent_ = __webpack_require__(94);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);

// EXTERNAL MODULE: external "@material-ui/core/CardMedia"
var CardMedia_ = __webpack_require__(95);
var CardMedia_default = /*#__PURE__*/__webpack_require__.n(CardMedia_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__(42);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: ./components/Card/index.js + 8 modules
var Card = __webpack_require__(43);

// CONCATENATED MODULE: ./modules/home/components/CityThumbnailView/cityThumbnailViewStyle.js
function cityThumbnailViewStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var cityThumbnailViewStyle = function cityThumbnailViewStyle(theme) {
  var _media;

  return {
    card: {
      maxWidth: 345
    },
    media: (_media = {}, cityThumbnailViewStyle_defineProperty(_media, theme.breakpoints.down("sm"), {
      height: 200
    }), cityThumbnailViewStyle_defineProperty(_media, "height", 280), _media),
    actions: {
      display: "flex"
    }
  };
};

/* harmony default export */ var CityThumbnailView_cityThumbnailViewStyle = (cityThumbnailViewStyle);
// CONCATENATED MODULE: ./modules/home/components/CityThumbnailView/CityThumbnailView.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function CityThumbnailView_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var CityThumbnailView_CityThumbnailView =
/*#__PURE__*/
function (_Component) {
  _inherits(CityThumbnailView, _Component);

  function CityThumbnailView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CityThumbnailView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CityThumbnailView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    CityThumbnailView_defineProperty(_assertThisInitialized(_this), "navigateToCityDetails", function () {
      routes["Router"].pushRoute("city", {
        cityId: _this.props.city["place_id"]
      });
    });

    return _this;
  }

  _createClass(CityThumbnailView, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          city = _this$props.city;
      var name = city.name,
          photoUrl = city.photoUrl;
      return external_react_default.a.createElement(Card["d" /* default */], {
        className: classes.container
      }, external_react_default.a.createElement(CardActionArea_default.a, {
        onClick: this.navigateToCityDetails
      }, external_react_default.a.createElement(CardMedia_default.a, {
        className: classes.media,
        image: photoUrl,
        title: name
      }), external_react_default.a.createElement(CardContent_default.a, null, external_react_default.a.createElement(Typography_default.a, {
        gutterBottom: true,
        variant: "title",
        component: "h4",
        noWrap: true
      }, name))));
    }
  }]);

  return CityThumbnailView;
}(external_react_["Component"]);
/* harmony default export */ var components_CityThumbnailView_CityThumbnailView = (withStyles_default()(CityThumbnailView_cityThumbnailViewStyle)(CityThumbnailView_CityThumbnailView));
// CONCATENATED MODULE: ./modules/home/components/CityThumbnailView/index.js

/* harmony default export */ var components_CityThumbnailView = (components_CityThumbnailView_CityThumbnailView);
// CONCATENATED MODULE: ./modules/home/components/CityResultGrid/CityResultGrid.js
function CityResultGrid_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CityResultGrid_typeof = function _typeof(obj) { return typeof obj; }; } else { CityResultGrid_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CityResultGrid_typeof(obj); }

function CityResultGrid_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CityResultGrid_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CityResultGrid_createClass(Constructor, protoProps, staticProps) { if (protoProps) CityResultGrid_defineProperties(Constructor.prototype, protoProps); if (staticProps) CityResultGrid_defineProperties(Constructor, staticProps); return Constructor; }

function CityResultGrid_possibleConstructorReturn(self, call) { if (call && (CityResultGrid_typeof(call) === "object" || typeof call === "function")) { return call; } return CityResultGrid_assertThisInitialized(self); }

function CityResultGrid_getPrototypeOf(o) { CityResultGrid_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CityResultGrid_getPrototypeOf(o); }

function CityResultGrid_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CityResultGrid_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CityResultGrid_setPrototypeOf(subClass, superClass); }

function CityResultGrid_setPrototypeOf(o, p) { CityResultGrid_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CityResultGrid_setPrototypeOf(o, p); }

function CityResultGrid_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var CityResultGrid_CityResultGrid =
/*#__PURE__*/
function (_Component) {
  CityResultGrid_inherits(CityResultGrid, _Component);

  function CityResultGrid() {
    var _getPrototypeOf2;

    var _this;

    CityResultGrid_classCallCheck(this, CityResultGrid);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = CityResultGrid_possibleConstructorReturn(this, (_getPrototypeOf2 = CityResultGrid_getPrototypeOf(CityResultGrid)).call.apply(_getPrototypeOf2, [this].concat(args)));

    CityResultGrid_defineProperty(CityResultGrid_assertThisInitialized(_this), "renderCity", function (city) {
      return external_react_default.a.createElement(GridItem["a" /* default */], {
        xl: 2,
        lg: 3,
        md: 4,
        sm: 12,
        key: city["place_id"]
      }, external_react_default.a.createElement(components_CityThumbnailView, {
        city: city
      }));
    });

    return _this;
  }

  CityResultGrid_createClass(CityResultGrid, [{
    key: "render",
    value: function render() {
      var cities = this.props.cities;
      var citiesToRender = cities ? cities.map(this.renderCity) : null;
      return citiesToRender;
    }
  }]);

  return CityResultGrid;
}(external_react_["Component"]);
/* harmony default export */ var components_CityResultGrid_CityResultGrid = (CityResultGrid_CityResultGrid);
// EXTERNAL MODULE: ./modules/app/store/selector.js
var selector = __webpack_require__(56);

// EXTERNAL MODULE: ./assets/img/home-bg.jpg
var home_bg = __webpack_require__(139);
var home_bg_default = /*#__PURE__*/__webpack_require__.n(home_bg);

// EXTERNAL MODULE: ./components/Parallax/index.js + 2 modules
var Parallax = __webpack_require__(83);

// CONCATENATED MODULE: ./modules/home/containers/HomePage/HomePage.js
function HomePage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { HomePage_typeof = function _typeof(obj) { return typeof obj; }; } else { HomePage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return HomePage_typeof(obj); }

function HomePage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function HomePage_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function HomePage_createClass(Constructor, protoProps, staticProps) { if (protoProps) HomePage_defineProperties(Constructor.prototype, protoProps); if (staticProps) HomePage_defineProperties(Constructor, staticProps); return Constructor; }

function HomePage_possibleConstructorReturn(self, call) { if (call && (HomePage_typeof(call) === "object" || typeof call === "function")) { return call; } return HomePage_assertThisInitialized(self); }

function HomePage_getPrototypeOf(o) { HomePage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return HomePage_getPrototypeOf(o); }

function HomePage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function HomePage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) HomePage_setPrototypeOf(subClass, superClass); }

function HomePage_setPrototypeOf(o, p) { HomePage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return HomePage_setPrototypeOf(o, p); }

function HomePage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















var HomePage_HomePage =
/*#__PURE__*/
function (_Component) {
  HomePage_inherits(HomePage, _Component);

  function HomePage() {
    var _getPrototypeOf2;

    var _this;

    HomePage_classCallCheck(this, HomePage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = HomePage_possibleConstructorReturn(this, (_getPrototypeOf2 = HomePage_getPrototypeOf(HomePage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    HomePage_defineProperty(HomePage_assertThisInitialized(_this), "onSuggestSelect", function (item) {
      item && routes["Router"].pushRoute("city", {
        cityId: item.placeId
      });
    });

    HomePage_defineProperty(HomePage_assertThisInitialized(_this), "doLogOut", function () {
      _this.props.logoutRequest();
    });

    return _this;
  }

  HomePage_createClass(HomePage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          t = _this$props.t,
          cities = _this$props.cities,
          loading = _this$props.loading,
          user = _this$props.user;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(AppHeader["a" /* default */], {
        color: "primary",
        fixed: true,
        isAuthenticated: true,
        t: t,
        user: user,
        logOut: this.doLogOut
      }), external_react_default.a.createElement(Parallax["a" /* default */], {
        image: home_bg_default.a,
        className: classes.parrallexClass
      }), external_react_default.a.createElement("div", {
        className: classes.container
      }, external_react_default.a.createElement("div", {
        className: classes.autoComplete
      }, external_react_default.a.createElement(GoogleAutoComplete["a" /* default */], {
        searchTypes: ["(cities)"],
        onSuggestSelect: this.onSuggestSelect,
        t: t
      }))), cities && cities.length > 0 && external_react_default.a.createElement(GridContainer["a" /* default */], {
        className: classes.cityGrids
      }, external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(GridItem["a" /* default */], {
        xs: 12
      }, external_react_default.a.createElement(core_["Typography"], {
        gutterBottom: true,
        variant: "title",
        component: "h4",
        noWrap: true
      }, t("markedCities"))), external_react_default.a.createElement(components_CityResultGrid_CityResultGrid, {
        cities: cities
      }))), loading && external_react_default.a.createElement("div", {
        className: classes.loadingBar
      }, external_react_default.a.createElement(PageLoader["a" /* default */], {
        type: "circular"
      })));
    }
  }]);

  return HomePage;
}(external_react_["Component"]);

var HomePage_mapStateToProps = function mapStateToProps(state) {
  return {
    cities: place_store["e" /* selectors */].getBookmarkedCities(state),
    loading: Object(selector["c" /* isLoading */])(state)
  };
};

/* harmony default export */ var containers_HomePage_HomePage = (Object(external_react_redux_["connect"])(HomePage_mapStateToProps, {
  logoutRequest: action["c" /* logoutRequest */]
})(Object(withLibs["a" /* default */])(HomePage_HomePage, ["homedata", "common"], HomePage_homePageStyle)));
// CONCATENATED MODULE: ./modules/home/containers/HomePage/index.js

/* harmony default export */ var containers_HomePage = (containers_HomePage_HomePage);
// EXTERNAL MODULE: ./lib/withAuth.js
var withAuth = __webpack_require__(82);

// EXTERNAL MODULE: ./modules/place/store/action.js
var store_action = __webpack_require__(31);

// CONCATENATED MODULE: ./pages/home/index.js


function home_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { home_typeof = function _typeof(obj) { return typeof obj; }; } else { home_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return home_typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function home_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function home_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function home_createClass(Constructor, protoProps, staticProps) { if (protoProps) home_defineProperties(Constructor.prototype, protoProps); if (staticProps) home_defineProperties(Constructor, staticProps); return Constructor; }

function home_possibleConstructorReturn(self, call) { if (call && (home_typeof(call) === "object" || typeof call === "function")) { return call; } return home_assertThisInitialized(self); }

function home_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function home_getPrototypeOf(o) { home_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return home_getPrototypeOf(o); }

function home_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) home_setPrototypeOf(subClass, superClass); }

function home_setPrototypeOf(o, p) { home_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return home_setPrototypeOf(o, p); }






var home_Home =
/*#__PURE__*/
function (_Component) {
  home_inherits(Home, _Component);

  function Home() {
    home_classCallCheck(this, Home);

    return home_possibleConstructorReturn(this, home_getPrototypeOf(Home).apply(this, arguments));
  }

  home_createClass(Home, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(containers_HomePage, this.props);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref) {
        var store, query, uid;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = _ref.store, query = _ref.query, uid = _ref.uid;
                _context.next = 3;
                return store.dispatch(Object(store_action["h" /* resetCityDetails */])());

              case 3:
                _context.next = 5;
                return store.dispatch(Object(store_action["e" /* fetchBookmarks */])(uid));

              case 5:
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

  return Home;
}(external_react_["Component"]);

/* harmony default export */ var home = __webpack_exports__["default"] = (Object(withAuth["a" /* default */])(home_Home, ["common", "homedata"]));

/***/ })
/******/ ]);