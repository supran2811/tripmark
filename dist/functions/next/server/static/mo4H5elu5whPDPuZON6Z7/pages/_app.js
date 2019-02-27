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
/******/ 	return __webpack_require__(__webpack_require__.s = 141);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */,
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
/* 7 */,
/* 8 */,
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
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 17 */,
/* 18 */,
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
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
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
/* 27 */,
/* 28 */,
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
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
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
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
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
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
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
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
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
/* 89 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 90 */,
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
/* 97 */
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPageContext; });
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable no-underscore-dangle */

 // A theme with custom primary and secondary color.
// It's optional.

var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])({
  palette: {
    primary: {
      light: "#0276aa",
      main: "#03a9f4",
      dark: "#35baf6"
    },
    secondary: {
      light: "#f73378",
      main: "#f50057",
      dark: "#ab003c"
    }
  },
  transitions: {
    duration: {
      enteringScreen: 1000,
      leavingScreen: 1000
    }
  }
});

function createPageContext() {
  return {
    theme: theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new jss__WEBPACK_IMPORTED_MODULE_0__["SheetsRegistry"](),
    // The standard class name generator.
    generateClassName: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createGenerateClassName"])()
  };
}

function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (true) {
    return createPageContext();
  } // Reuse context on the client-side.


  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),
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
/* 119 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 120 */,
/* 121 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/JssProvider");

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(153);


/***/ }),
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */
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

// EXTERNAL MODULE: external "next/app"
var app_ = __webpack_require__(121);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(89);

// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__(126);
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// EXTERNAL MODULE: external "react-jss/lib/JssProvider"
var JssProvider_ = __webpack_require__(127);
var JssProvider_default = /*#__PURE__*/__webpack_require__.n(JssProvider_);

// EXTERNAL MODULE: external "next/document"
var document_ = __webpack_require__(97);

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(128);
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: external "next-redux-saga"
var external_next_redux_saga_ = __webpack_require__(129);
var external_next_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_saga_);

// EXTERNAL MODULE: external "immutable"
var external_immutable_ = __webpack_require__(11);
var external_immutable_default = /*#__PURE__*/__webpack_require__.n(external_immutable_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(119);

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__(130);
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "redux-immutable"
var external_redux_immutable_ = __webpack_require__(131);

// EXTERNAL MODULE: ./modules/auth/store/action.js
var store_action = __webpack_require__(19);

// EXTERNAL MODULE: ./modules/auth/store/actionTypes.js
var actionTypes = __webpack_require__(13);

// CONCATENATED MODULE: ./modules/auth/store/reducer.js


var myRecord = Object(external_immutable_["Record"])({
  token: "",
  uid: "",
  pathToRedirect: "/mypage",
  firebaseLoaded: false
});
var reducer_initialState = new myRecord({
  token: "",
  pathToRedirect: "/mypage",
  firebaseLoaded: false
});
function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : reducer_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes["f" /* ACTION_SET_TOKEN */].SUCCESS:
      {
        return state.merge({
          token: action.data,
          firebaseLoaded: true
        });
      }

    case actionTypes["c" /* ACTION_LOGOUT */].SUCCESS:
      {
        return state.merge({
          token: "",
          firebaseLoaded: true
        });
      }

    case actionTypes["e" /* ACTION_SET_PATH_TO_REDIRECT */].ACTION:
      {
        return state.merge({
          pathToRedirect: action.pathToRedirect
        });
      }

    case actionTypes["d" /* ACTION_RESET_PATH_TO_REDIRECT */].ACTION:
      {
        return state.merge({
          pathToRedirect: "/mypage"
        });
      }

    case actionTypes["g" /* ACTION_SET_USER_DATA */].ACTION:
      {
        var token = action.token,
            uid = action.uid;
        return state.merge({
          token: token,
          uid: uid
        });
      }
  }

  return state;
}
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(6);

// EXTERNAL MODULE: ./lib/firebase/index.js
var firebase = __webpack_require__(32);

// EXTERNAL MODULE: ./modules/place/store/actionTypes.js
var store_actionTypes = __webpack_require__(3);

// EXTERNAL MODULE: ./service/networkService.js + 1 modules
var networkService = __webpack_require__(48);

// CONCATENATED MODULE: ./modules/auth/store/saga.js


var _marked =
/*#__PURE__*/
regenerator_default.a.mark(doSignUp),
    _marked2 =
/*#__PURE__*/
regenerator_default.a.mark(doSignUpWithGoogle),
    _marked3 =
/*#__PURE__*/
regenerator_default.a.mark(doLogin),
    _marked4 =
/*#__PURE__*/
regenerator_default.a.mark(doSetToken),
    _marked5 =
/*#__PURE__*/
regenerator_default.a.mark(doLogOut),
    _marked6 =
/*#__PURE__*/
regenerator_default.a.mark(saga);






function doSignUp(action) {
  return regenerator_default.a.wrap(function doSignUp$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(effects_["put"])({
            type: actionTypes["h" /* ACTION_SIGNUP */].PENDING
          });

        case 3:
          _context.next = 5;
          return Object(effects_["call"])(firebase["a" /* auth */].doCreateUser, action.email, action.password);

        case 5:
          _context.next = 7;
          return Object(effects_["call"])(firebase["a" /* auth */].doUpdateProfile, action.fullName);

        case 7:
          _context.next = 9;
          return Object(effects_["put"])({
            type: actionTypes["h" /* ACTION_SIGNUP */].SUCCESS
          });

        case 9:
          _context.next = 15;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          _context.next = 15;
          return Object(effects_["put"])({
            type: actionTypes["h" /* ACTION_SIGNUP */].ERROR,
            error: _context.t0
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 11]]);
}
function doSignUpWithGoogle() {
  return regenerator_default.a.wrap(function doSignUpWithGoogle$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(effects_["put"])({
            type: actionTypes["a" /* ACTION_GOOGLE_SIGNUP */].PENDING
          });

        case 3:
          _context2.next = 5;
          return Object(effects_["call"])(firebase["a" /* auth */].doGoogleSignIn);

        case 5:
          _context2.next = 7;
          return Object(effects_["put"])({
            type: actionTypes["a" /* ACTION_GOOGLE_SIGNUP */].SUCCESS
          });

        case 7:
          _context2.next = 13;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 13;
          return Object(effects_["put"])({
            type: actionTypes["a" /* ACTION_GOOGLE_SIGNUP */].ERROR,
            error: _context2.t0
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this, [[0, 9]]);
}
function doLogin(action) {
  return regenerator_default.a.wrap(function doLogin$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(effects_["put"])({
            type: actionTypes["b" /* ACTION_LOGIN */].PENDING
          });

        case 3:
          _context3.next = 5;
          return Object(effects_["call"])(firebase["a" /* auth */].doSignInUser, action.email, action.password);

        case 5:
          _context3.next = 7;
          return Object(effects_["put"])({
            type: actionTypes["b" /* ACTION_LOGIN */].SUCCESS
          });

        case 7:
          _context3.next = 13;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 13;
          return Object(effects_["put"])({
            type: actionTypes["b" /* ACTION_LOGIN */].ERROR,
            error: _context3.t0
          });

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, this, [[0, 9]]);
}
function doSetToken() {
  var token, uid, username, profilePhotoUrl, user, response;
  return regenerator_default.a.wrap(function doSetToken$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(effects_["put"])({
            type: actionTypes["f" /* ACTION_SET_TOKEN */].PENDING
          });

        case 3:
          _context4.next = 5;
          return Object(effects_["call"])(firebase["a" /* auth */].getToken);

        case 5:
          token = _context4.sent;
          _context4.next = 8;
          return Object(effects_["call"])(firebase["a" /* auth */].getUserId);

        case 8:
          uid = _context4.sent;
          _context4.next = 11;
          return Object(effects_["call"])(firebase["a" /* auth */].getUserName);

        case 11:
          username = _context4.sent;
          _context4.next = 14;
          return Object(effects_["call"])(firebase["a" /* auth */].getProfilePhotoUrl);

        case 14:
          profilePhotoUrl = _context4.sent;
          user = {
            token: token,
            uid: uid,
            username: username,
            profilePhotoUrl: profilePhotoUrl
          };
          _context4.next = 18;
          return Object(effects_["call"])(networkService["h" /* sendLoginRequest */], user);

        case 18:
          response = _context4.sent;
          _context4.next = 21;
          return Object(effects_["put"])({
            type: actionTypes["f" /* ACTION_SET_TOKEN */].SUCCESS,
            data: token
          });

        case 21:
          _context4.next = 27;
          break;

        case 23:
          _context4.prev = 23;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 27;
          return Object(effects_["put"])({
            type: actionTypes["f" /* ACTION_SET_TOKEN */].ERROR
          });

        case 27:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, this, [[0, 23]]);
}
function doLogOut() {
  var response;
  return regenerator_default.a.wrap(function doLogOut$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(effects_["put"])({
            type: actionTypes["c" /* ACTION_LOGOUT */].PENDING
          });

        case 3:
          _context5.next = 5;
          return Object(effects_["call"])(firebase["a" /* auth */].doSignOut);

        case 5:
          _context5.next = 7;
          return Object(effects_["call"])(networkService["i" /* sendLogoutRequest */]);

        case 7:
          response = _context5.sent;
          _context5.next = 10;
          return Object(effects_["put"])({
            type: store_actionTypes["d" /* CLEAR_BOOKMARKS */].ACTION
          });

        case 10:
          _context5.next = 12;
          return Object(effects_["put"])({
            type: store_actionTypes["k" /* RESET_CITY_DETAILS */].ACTION
          });

        case 12:
          _context5.next = 14;
          return Object(effects_["put"])({
            type: actionTypes["c" /* ACTION_LOGOUT */].SUCCESS
          });

        case 14:
          _context5.next = 20;
          break;

        case 16:
          _context5.prev = 16;
          _context5.t0 = _context5["catch"](0);
          _context5.next = 20;
          return Object(effects_["put"])({
            type: actionTypes["c" /* ACTION_LOGOUT */].ERROR,
            error: _context5.t0
          });

        case 20:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, this, [[0, 16]]);
}
function saga() {
  return regenerator_default.a.wrap(function saga$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(effects_["all"])([Object(effects_["fork"])(effects_["takeEvery"], actionTypes["b" /* ACTION_LOGIN */].ACTION, doLogin), Object(effects_["fork"])(effects_["takeEvery"], actionTypes["h" /* ACTION_SIGNUP */].ACTION, doSignUp), Object(effects_["fork"])(effects_["takeEvery"], actionTypes["f" /* ACTION_SET_TOKEN */].ACTION, doSetToken), Object(effects_["fork"])(effects_["takeEvery"], actionTypes["a" /* ACTION_GOOGLE_SIGNUP */].ACTION, doSignUpWithGoogle), Object(effects_["fork"])(effects_["takeEvery"], actionTypes["c" /* ACTION_LOGOUT */].ACTION, doLogOut)]);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, this);
}
// EXTERNAL MODULE: ./modules/auth/store/constants.js
var constants = __webpack_require__(12);

// EXTERNAL MODULE: ./modules/auth/store/selector.js
var selector = __webpack_require__(29);

// CONCATENATED MODULE: ./modules/auth/store/index.js







// EXTERNAL MODULE: ./modules/place/store/index.js + 3 modules
var place_store = __webpack_require__(85);

// EXTERNAL MODULE: ./modules/app/store/actionTypes.js
var app_store_actionTypes = __webpack_require__(91);

// CONCATENATED MODULE: ./modules/app/store/reducer.js


var reducer_myRecord = Object(external_immutable_["Record"])({
  errorData: undefined,
  pendingRequestCount: 0
});
var store_reducer_initialState = new reducer_myRecord({
  errorData: undefined,
  pendingRequestCount: 0
});
function appReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : store_reducer_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action && action.type) {
    if (action.type.endsWith("PENDING")) {
      var pendingRequestCount = state.get("pendingRequestCount") + 1;
      return state.merge({
        errorData: undefined,
        pendingRequestCount: pendingRequestCount
      });
    } else if (action.type.endsWith("SUCCESS") || action.type.endsWith("CANCEL")) {
      var _pendingRequestCount = state.get("pendingRequestCount") > 0 ? state.get("pendingRequestCount") - 1 : state.get("pendingRequestCount");

      return state.merge({
        pendingRequestCount: _pendingRequestCount
      });
    } else if (action.type.endsWith("ERROR")) {
      var _pendingRequestCount2 = state.get("pendingRequestCount") > 0 ? state.get("pendingRequestCount") - 1 : state.get("pendingRequestCount");

      return state.merge({
        pendingRequestCount: _pendingRequestCount2,
        errorData: action.error ? action.error : {
          status: "Unable to connect to server"
        }
      });
    } else if (action.type === app_store_actionTypes["a" /* RESET_ERROR */].ACTION) {
      return state.merge({
        errorData: undefined
      });
    }
  }

  return state;
}
// EXTERNAL MODULE: ./modules/app/store/constants.js
var store_constants = __webpack_require__(34);

// EXTERNAL MODULE: ./modules/app/store/selector.js
var store_selector = __webpack_require__(56);

// CONCATENATED MODULE: ./modules/app/store/index.js




// CONCATENATED MODULE: ./modules/store/rootReducer.js
var _Immutable$Record, _combineReducers;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var StateRecord = external_immutable_default.a.Record((_Immutable$Record = {}, _defineProperty(_Immutable$Record, constants.NAME, undefined), _defineProperty(_Immutable$Record, store_constants.NAME, undefined), _defineProperty(_Immutable$Record, place_store["a" /* constants */].NAME, undefined), _Immutable$Record));
/* harmony default export */ var rootReducer = (Object(external_redux_immutable_["combineReducers"])((_combineReducers = {}, _defineProperty(_combineReducers, constants.NAME, authReducer), _defineProperty(_combineReducers, store_constants.NAME, appReducer), _defineProperty(_combineReducers, place_store["a" /* constants */].NAME, place_store["c" /* reducer */]), _combineReducers), StateRecord));
// CONCATENATED MODULE: ./modules/store/rootSaga.js


var rootSaga_marked =
/*#__PURE__*/
regenerator_default.a.mark(rootSaga_saga);




function rootSaga_saga() {
  return regenerator_default.a.wrap(function saga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(effects_["all"])([saga(), Object(place_store["d" /* saga */])()]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, rootSaga_marked, this);
}
// CONCATENATED MODULE: ./modules/store/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






var sagaMiddleware = external_redux_saga_default()();
function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(external_immutable_["Map"])();
  var options = arguments.length > 1 ? arguments[1] : undefined;
  // The DEVTOOLS stuff will enable the redux devtools in Chrome
  var composeEnhancers = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : external_redux_["compose"];
  var enhancer = composeEnhancers(Object(external_redux_["applyMiddleware"])(sagaMiddleware));
  var store = Object(external_redux_["createStore"])(rootReducer, initialState, enhancer);

  store.runSagaTask = function () {
    store.sagaTask = sagaMiddleware.run(rootSaga_saga);
  }; // run the rootSaga initially


  store.runSagaTask();
  return store;
}
// CONCATENATED MODULE: ./lib/withReduxSaga.js




function withReduxSaga(BaseComponent) {
  return external_next_redux_wrapper_default()(configureStore, {
    serializeState: function serializeState(state) {
      return state.toJS();
    },
    deserializeState: function deserializeState(state) {
      return Object(external_immutable_["fromJS"])(state);
    }
  })(external_next_redux_saga_default()(BaseComponent));
}
// EXTERNAL MODULE: ./getPageContext.js
var getPageContext = __webpack_require__(99);

// EXTERNAL MODULE: ./lib/firebase/firebase.js
var firebase_firebase = __webpack_require__(9);

// CONCATENATED MODULE: ./modules/store/listeners.js

function handleAllStorageListener(e, dispatch) {
  place_store["b" /* localStorageListner */].handleStorageListener(e, dispatch);
}
// EXTERNAL MODULE: ./lib/localStore.js
var localStore = __webpack_require__(77);

// CONCATENATED MODULE: ./pages/_app.js


function _app_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _app_typeof = function _typeof(obj) { return typeof obj; }; } else { _app_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _app_typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_app_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }















var _app_MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  _createClass(MyApp, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;

                if (!Component.getInitialProps) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return Component.getInitialProps(ctx);

              case 4:
                _context.t0 = _context.sent;
                _context.next = 8;
                break;

              case 7:
                _context.t0 = {};

              case 8:
                pageProps = _context.t0;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 10:
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

  function MyApp(props) {
    var _this;

    _classCallCheck(this, MyApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyApp).call(this, props));
    _this.pageContext = Object(getPageContext["a" /* default */])();
    return _this;
  }

  _createClass(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      firebase_firebase["b" /* auth */].onAuthStateChanged(function (user) {
        if (user) {
          _this2.props.dispatch(Object(store_action["f" /* setToken */])());
        } else {
          _this2.props.dispatch(Object(store_action["c" /* logoutRequest */])());
        }
      });
      Object(localStore["c" /* checkAndClearAppData */])();
      window.addEventListener("storage", function (e) {
        handleAllStorageListener(e, _this2.props.dispatch);
      }); // Remove the server-side injected CSS.

      var jssStyles = document.querySelector("#jss-server-side");

      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return external_react_default.a.createElement(app_["Container"], null, external_react_default.a.createElement(JssProvider_default.a, {
        registry: this.pageContext.sheetsRegistry,
        generateClassName: this.pageContext.generateClassName
      }, external_react_default.a.createElement(styles_["MuiThemeProvider"], {
        theme: this.pageContext.theme,
        sheetsManager: this.pageContext.sheetsManager
      }, external_react_default.a.createElement(CssBaseline_default.a, null), external_react_default.a.createElement(external_react_redux_["Provider"], {
        store: store
      }, external_react_default.a.createElement(Component, _extends({
        pageContext: this.pageContext
      }, pageProps))))));
    }
  }]);

  return MyApp;
}(app_default.a);

/* harmony default export */ var _app = __webpack_exports__["default"] = (withReduxSaga(Object(external_react_redux_["connect"])()(_app_MyApp)));

/***/ })
/******/ ]);