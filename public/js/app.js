/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//Fetches base sass file to build style.css file to /public
	__webpack_require__(1);
	//Fetches base js file to build app.js file to /public
	__webpack_require__(5);

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Webpack will resolve these dependencies
	var add = __webpack_require__(6);
	var del = __webpack_require__(7);

	// ES6 will be transpiled, so string literal syntax here will be converted to string concatenation syntax
	document.getElementById('body-text').innerHTML = 'Red text is great. Maths is great, for example 6 + 8 = ' + add(6, 8) + ' and 5 - 2 = ' + del(5, 2);

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	/* Will be resolved and transpiled */
	module.exports = function (x, y) {
	  return x + y;
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	/* Will be resolved and transpiled */
	module.exports = function (x, y) {
	  return x - y;
	};

/***/ }
/******/ ]);