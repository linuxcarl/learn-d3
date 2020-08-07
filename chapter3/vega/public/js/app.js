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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/interopRequireDefault.js?");

/***/ }),

/***/ "./public/mocks/data.json":
/*!********************************!*\
  !*** ./public/mocks/data.json ***!
  \********************************/
/*! exports provided: $schema, width, height, padding, data, signals, scales, axes, marks, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"$schema\\\":\\\"https://vega.github.io/schema/vega/v5.json\\\",\\\"width\\\":800,\\\"height\\\":400,\\\"padding\\\":10,\\\"data\\\":[{\\\"name\\\":\\\"table\\\",\\\"values\\\":[{\\\"letter\\\":\\\"A\\\",\\\"frequency\\\":0.08167},{\\\"letter\\\":\\\"B\\\",\\\"frequency\\\":0.01492},{\\\"letter\\\":\\\"C\\\",\\\"frequency\\\":0.02782},{\\\"letter\\\":\\\"D\\\",\\\"frequency\\\":0.04253},{\\\"letter\\\":\\\"E\\\",\\\"frequency\\\":0.12702},{\\\"letter\\\":\\\"F\\\",\\\"frequency\\\":0.02288},{\\\"letter\\\":\\\"G\\\",\\\"frequency\\\":0.02015},{\\\"letter\\\":\\\"H\\\",\\\"frequency\\\":0.06094},{\\\"letter\\\":\\\"I\\\",\\\"frequency\\\":0.06966},{\\\"letter\\\":\\\"J\\\",\\\"frequency\\\":0.00153},{\\\"letter\\\":\\\"K\\\",\\\"frequency\\\":0.00772},{\\\"letter\\\":\\\"L\\\",\\\"frequency\\\":0.04025},{\\\"letter\\\":\\\"M\\\",\\\"frequency\\\":0.02406},{\\\"letter\\\":\\\"N\\\",\\\"frequency\\\":0.06749},{\\\"letter\\\":\\\"O\\\",\\\"frequency\\\":0.07507},{\\\"letter\\\":\\\"P\\\",\\\"frequency\\\":0.01929},{\\\"letter\\\":\\\"Q\\\",\\\"frequency\\\":0.00095},{\\\"letter\\\":\\\"R\\\",\\\"frequency\\\":0.05987},{\\\"letter\\\":\\\"S\\\",\\\"frequency\\\":0.06327},{\\\"letter\\\":\\\"T\\\",\\\"frequency\\\":0.09056},{\\\"letter\\\":\\\"U\\\",\\\"frequency\\\":0.02758},{\\\"letter\\\":\\\"V\\\",\\\"frequency\\\":0.00978},{\\\"letter\\\":\\\"W\\\",\\\"frequency\\\":0.0236},{\\\"letter\\\":\\\"X\\\",\\\"frequency\\\":0.0015},{\\\"letter\\\":\\\"Y\\\",\\\"frequency\\\":0.01974},{\\\"letter\\\":\\\"Z\\\",\\\"frequency\\\":0.00074}]}],\\\"signals\\\":[{\\\"name\\\":\\\"tooltip\\\",\\\"value\\\":{},\\\"on\\\":[{\\\"events\\\":\\\"rect:mouseover\\\",\\\"update\\\":\\\"datum\\\"},{\\\"events\\\":\\\"rect:mouseout\\\",\\\"update\\\":\\\"{}\\\"}]}],\\\"scales\\\":[{\\\"name\\\":\\\"xscale\\\",\\\"type\\\":\\\"band\\\",\\\"domain\\\":{\\\"data\\\":\\\"table\\\",\\\"field\\\":\\\"letter\\\"},\\\"range\\\":\\\"width\\\",\\\"padding\\\":0.1,\\\"round\\\":true},{\\\"name\\\":\\\"yscale\\\",\\\"domain\\\":{\\\"data\\\":\\\"table\\\",\\\"field\\\":\\\"frequency\\\"},\\\"nice\\\":true,\\\"range\\\":\\\"height\\\"}],\\\"axes\\\":[{\\\"orient\\\":\\\"bottom\\\",\\\"scale\\\":\\\"xscale\\\"},{\\\"orient\\\":\\\"left\\\",\\\"scale\\\":\\\"yscale\\\"}],\\\"marks\\\":[{\\\"type\\\":\\\"rect\\\",\\\"from\\\":{\\\"data\\\":\\\"table\\\"},\\\"encode\\\":{\\\"enter\\\":{\\\"x\\\":{\\\"scale\\\":\\\"xscale\\\",\\\"field\\\":\\\"letter\\\",\\\"offset\\\":1},\\\"width\\\":{\\\"scale\\\":\\\"xscale\\\",\\\"band\\\":1,\\\"offset\\\":-1},\\\"y\\\":{\\\"scale\\\":\\\"yscale\\\",\\\"field\\\":\\\"frequency\\\"},\\\"y2\\\":{\\\"scale\\\":\\\"yscale\\\",\\\"value\\\":0}},\\\"update\\\":{\\\"fill\\\":{\\\"value\\\":\\\"steelblue\\\"}},\\\"hover\\\":{\\\"fill\\\":{\\\"value\\\":\\\"red\\\"}}}},{\\\"type\\\":\\\"text\\\",\\\"encode\\\":{\\\"enter\\\":{\\\"align\\\":{\\\"value\\\":\\\"center\\\"},\\\"baseline\\\":{\\\"value\\\":\\\"bottom\\\"},\\\"fill\\\":{\\\"value\\\":\\\"#333\\\"}},\\\"update\\\":{\\\"x\\\":{\\\"scale\\\":\\\"xscale\\\",\\\"signal\\\":\\\"tooltip.letter\\\",\\\"band\\\":0.5},\\\"y\\\":{\\\"scale\\\":\\\"yscale\\\",\\\"signal\\\":\\\"tooltip.frequency\\\",\\\"offset\\\":-2},\\\"text\\\":{\\\"signal\\\":\\\"tooltip.frequency\\\"},\\\"fillOpacity\\\":[{\\\"test\\\":\\\"datum === tooltip\\\",\\\"value\\\":0},{\\\"value\\\":1}]}}}]}\");\n\n//# sourceURL=webpack:///./public/mocks/data.json?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../../public/mocks/data.json */ \"./public/mocks/data.json\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_data) {\n  \"use strict\";\n\n  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\n  _data = _interopRequireDefault(_data);\n\n  (function () {\n    vegaEmbed(\"#barChart\", _data[\"default\"]) // result.view provides access to the Vega View API\n    .then(function (result) {\n      return console.log(result);\n    })[\"catch\"](console.warn);\n  })();\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ })

/******/ });