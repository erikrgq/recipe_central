/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/style.scss */ \"./src/style.scss\");\n/* harmony import */ var _src_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n//Global Controller\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nReferenceError: window is not defined\\n    at eval (webpack:///./node_modules/style-loader/lib/addStyles.js?:23:2)\\n    at eval (webpack:///./node_modules/style-loader/lib/addStyles.js?:12:46)\\n    at module.exports (webpack:///./node_modules/style-loader/lib/addStyles.js?:80:88)\\n    at eval (webpack:///./src/style.scss?./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js:16:134)\\n    at Object../node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/style.scss (c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\style-loader\\\\index.js!c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\css-loader\\\\dist\\\\cjs.js!c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\sass-loader\\\\lib\\\\loader.js!c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\src\\\\style.scss:120:1)\\n    at __webpack_require__ (c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\style-loader\\\\index.js!c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\css-loader\\\\dist\\\\cjs.js!c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\sass-loader\\\\lib\\\\loader.js!c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\src\\\\style.scss:21:30)\\n    at c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\style-loader\\\\index.js!c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\css-loader\\\\dist\\\\cjs.js!c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\sass-loader\\\\lib\\\\loader.js!c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\src\\\\style.scss:85:18\\n    at Object.<anonymous> (c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\style-loader\\\\index.js!c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\css-loader\\\\dist\\\\cjs.js!c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\sass-loader\\\\lib\\\\loader.js!c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\src\\\\style.scss:88:10)\\n    at Module._compile (c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\v8-compile-cache\\\\v8-compile-cache.js:192:30)\\n    at exec (c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\mini-css-extract-plugin\\\\dist\\\\loader.js:60:10)\\n    at childCompiler.runAsChild (c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\mini-css-extract-plugin\\\\dist\\\\loader.js:153:14)\\n    at compile (c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:306:11)\\n    at hooks.afterCompile.callAsync.err (c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:631:15)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:24:1)\\n    at AsyncSeriesHook.lazyCompileHook (c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at compilation.seal.err (c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:628:31)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at hooks.optimizeAssets.callAsync.err (c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:1325:35)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at hooks.optimizeChunkAssets.callAsync.err (c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:1316:32)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at hooks.additionalAssets.callAsync.err (c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:1311:36)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at hooks.optimizeTree.callAsync.err (c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:1307:32)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (c:\\\\Users\\\\erik1\\\\Desktop\\\\Projects\\\\Recipe-Central\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\");\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });