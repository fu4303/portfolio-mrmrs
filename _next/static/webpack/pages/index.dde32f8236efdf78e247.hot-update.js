webpackHotUpdate_N_E("pages/index",{

/***/ "./components/video.js":
/*!*****************************!*\
  !*** ./components/video.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_mrmrs_p_mrmrs_new_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_mrmrs_p_mrmrs_new_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/home/mrmrs/p/mrmrs-new/components/video.js\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_mrmrs_p_mrmrs_new_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/** @jsxRuntime classic */\n\n/** @jsx jsx */\n\n\n\nvar Video = function Video(_ref) {\n  var filename = _ref.filename,\n      props = Object(_home_mrmrs_p_mrmrs_new_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"filename\"]);\n\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"video\", _objectSpread(_objectSpread({\n    muted: \"true\",\n    autoplay: \"true\",\n    loop: \"true\",\n    width: \"1920\",\n    sx: {\n      width: '100%',\n      maxWidth: '1920px',\n      mx: 'auto',\n      display: 'block'\n    }\n  }, props), {}, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"source\", {\n    src: \"https://dlu344star2bj.cloudfront.net/v/\" + filename + \".mp4\",\n    type: \"video/mp4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }));\n};\n\n_c = Video;\nVideo.defaultProps = {\n  filename: '0203a'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Video);\n\nvar _c;\n\n$RefreshReg$(_c, \"Video\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92aWRlby5qcz8wZjMxIl0sIm5hbWVzIjpbIlZpZGVvIiwiZmlsZW5hbWUiLCJwcm9wcyIsIndpZHRoIiwibWF4V2lkdGgiLCJteCIsImRpc3BsYXkiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBNEI7QUFBQSxNQUF6QkMsUUFBeUIsUUFBekJBLFFBQXlCO0FBQUEsTUFBWkMsS0FBWTs7QUFDeEMsU0FDRTtBQUFPLFNBQUssRUFBQyxNQUFiO0FBQW9CLFlBQVEsRUFBQyxNQUE3QjtBQUFvQyxRQUFJLEVBQUMsTUFBekM7QUFBZ0QsU0FBSyxFQUFDLE1BQXREO0FBQTZELE1BQUUsRUFBRTtBQUFFQyxXQUFLLEVBQUUsTUFBVDtBQUFpQkMsY0FBUSxFQUFFLFFBQTNCO0FBQXFDQyxRQUFFLEVBQUUsTUFBekM7QUFBaURDLGFBQU8sRUFBRTtBQUExRDtBQUFqRSxLQUEwSUosS0FBMUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNFO0FBQVEsT0FBRyxFQUFFLDRDQUEwQ0QsUUFBMUMsR0FBbUQsTUFBaEU7QUFBd0UsUUFBSSxFQUFDLFdBQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBS0QsQ0FORDs7S0FBTUQsSztBQVFOQSxLQUFLLENBQUNPLFlBQU4sR0FBcUI7QUFDbkJOLFVBQVEsRUFBRTtBQURTLENBQXJCO0FBSWVELG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy92aWRlby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBWaWRlbyA9ICh7IGZpbGVuYW1lLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHZpZGVvIG11dGVkPSd0cnVlJyBhdXRvcGxheT0ndHJ1ZScgbG9vcD0ndHJ1ZScgd2lkdGg9JzE5MjAnIHN4PXt7IHdpZHRoOiAnMTAwJScsIG1heFdpZHRoOiAnMTkyMHB4JywgbXg6ICdhdXRvJywgZGlzcGxheTogJ2Jsb2NrJyB9fSB7Li4ucHJvcHN9PlxuICAgICAgPHNvdXJjZSBzcmM9e1wiaHR0cHM6Ly9kbHUzNDRzdGFyMmJqLmNsb3VkZnJvbnQubmV0L3YvXCIrZmlsZW5hbWUrXCIubXA0XCJ9IHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxuICAgIDwvdmlkZW8+XG4gIClcbn1cblxuVmlkZW8uZGVmYXVsdFByb3BzID0ge1xuICBmaWxlbmFtZTogJzAyMDNhJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBWaWRlb1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/video.js\n");

/***/ })

})