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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/fdzPaginatorComponent.ts":
/*!**************************************!*\
  !*** ./src/fdzPaginatorComponent.ts ***!
  \**************************************/
/*! exports provided: FdzPaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FdzPaginatorComponent\", function() { return FdzPaginatorComponent; });\n/* harmony import */ var _fdzPaginatorComponentController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fdzPaginatorComponentController */ \"./src/fdzPaginatorComponentController.ts\");\n\nvar FdzPaginatorComponent = /** @class */ (function () {\n    function FdzPaginatorComponent() {\n        this.controller = _fdzPaginatorComponentController__WEBPACK_IMPORTED_MODULE_0__[\"FdzPaginatorComponentController\"];\n        this.bindings = {\n            options: '<',\n            onUpdate: '&?'\n        };\n        this.templateUrl = ['$attrs', function ($attrs) {\n                return $attrs['templateUrl'] || './fdzPaginatorTemplate.html';\n            }];\n    }\n    FdzPaginatorComponent.NAME = 'fdzPaginator';\n    return FdzPaginatorComponent;\n}());\n\n\n\n//# sourceURL=webpack:///./src/fdzPaginatorComponent.ts?");

/***/ }),

/***/ "./src/fdzPaginatorComponentController.ts":
/*!************************************************!*\
  !*** ./src/fdzPaginatorComponentController.ts ***!
  \************************************************/
/*! exports provided: FdzPaginatorComponentController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FdzPaginatorComponentController\", function() { return FdzPaginatorComponentController; });\nvar FdzPaginatorComponentController = /** @class */ (function () {\n    function FdzPaginatorComponentController() {\n    }\n    FdzPaginatorComponentController.prototype.$onInit = function () {\n    };\n    FdzPaginatorComponentController.prototype.previous = function () {\n        if (this.options.pageObject.page > 1) {\n            this.options.pageObject.page -= 1;\n        }\n        this.onUpdate({ $event: 'previous', $option: this.options });\n    };\n    ;\n    FdzPaginatorComponentController.prototype.next = function () {\n        if (this.options.pageObject.page < this.getPages()) {\n            this.options.pageObject.page += 1;\n        }\n        this.onUpdate({ $event: 'next', $option: this.options });\n    };\n    ;\n    FdzPaginatorComponentController.prototype.pageSize = function () {\n        this.options.pageObject.page = 1;\n        this.onUpdate({ $event: '', $option: this.options });\n        this.calculateCurrentPage();\n    };\n    FdzPaginatorComponentController.prototype.calculateCurrentPage = function () {\n        var currentPages = this.options.pageObject.page * this.options.pageObject.size;\n        // this.options.pageObject.page =1;\n        return (currentPages >= this.options.pageObject.totalHits) ? this.options.pageObject.totalHits : currentPages;\n    };\n    FdzPaginatorComponentController.prototype.getPages = function () {\n        return this.options.pageObject.totalHits / this.options.pageObject.size;\n    };\n    FdzPaginatorComponentController.NAME = 'fdzPaginatorController';\n    return FdzPaginatorComponentController;\n}());\n\n\n\n//# sourceURL=webpack:///./src/fdzPaginatorComponentController.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fdzPaginatorComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fdzPaginatorComponent */ \"./src/fdzPaginatorComponent.ts\");\n/// <reference path=\"./globals.d.ts\" />\n\n// @ts-ignore\nvar fdzPaginator = angular\n    .module('fdzPaginatorModule', [])\n    .component(_fdzPaginatorComponent__WEBPACK_IMPORTED_MODULE_0__[\"FdzPaginatorComponent\"].NAME, new _fdzPaginatorComponent__WEBPACK_IMPORTED_MODULE_0__[\"FdzPaginatorComponent\"]());\n/* harmony default export */ __webpack_exports__[\"default\"] = (fdzPaginator);\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });