"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/customize/[index]",{

/***/ "./components/customization/customization.js":
/*!***************************************************!*\
  !*** ./components/customization/customization.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _customization_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customization.module.css */ \"./components/customization/customization.module.css\");\n/* harmony import */ var _customization_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_customization_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Data_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Data/db */ \"./Data/db.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Customization() {\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var index = router.query.index;\n    var item = _Data_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find(function(item) {\n        return item.index === parseInt(index);\n    });\n    if (!item) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/quinten/Documents/artsy/components/customization/customization.js\",\n            lineNumber: 11,\n            columnNumber: 12\n        }, this);\n    }\n    var imageFolder = \"/basketballs\";\n    var images = Array.from({\n        length: 15\n    }, function(_, index) {\n        return \"\".concat(imageFolder, \"/basketball\").concat(index + 1, \".png\");\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_customization_module_css__WEBPACK_IMPORTED_MODULE_3___default().customizeBox),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: item.imageUrl,\n                alt: \"Item \".concat(index)\n            }, void 0, false, {\n                fileName: \"/Users/quinten/Documents/artsy/components/customization/customization.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_customization_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageScrollBox),\n                children: images.map(function(image, index) {\n                    return(// eslint-disable-next-line jsx-a11y/img-redundant-alt\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: (_customization_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageItem),\n                        src: image,\n                        alt: \"Image \".concat(index)\n                    }, index, false, {\n                        fileName: \"/Users/quinten/Documents/artsy/components/customization/customization.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, _this));\n                })\n            }, void 0, false, {\n                fileName: \"/Users/quinten/Documents/artsy/components/customization/customization.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_customization_module_css__WEBPACK_IMPORTED_MODULE_3___default().orderBox),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: item.description\n                    }, void 0, false, {\n                        fileName: \"/Users/quinten/Documents/artsy/components/customization/customization.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: item.price\n                    }, void 0, false, {\n                        fileName: \"/Users/quinten/Documents/artsy/components/customization/customization.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"ADD TO CART\"\n                            }, void 0, false, {\n                                fileName: \"/Users/quinten/Documents/artsy/components/customization/customization.js\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"WISHLIST\"\n                            }, void 0, false, {\n                                fileName: \"/Users/quinten/Documents/artsy/components/customization/customization.js\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/quinten/Documents/artsy/components/customization/customization.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/quinten/Documents/artsy/components/customization/customization.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/quinten/Documents/artsy/components/customization/customization.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Customization, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Customization;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Customization);\nvar _c;\n$RefreshReg$(_c, \"Customization\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2N1c3RvbWl6YXRpb24vY3VzdG9taXphdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdEO0FBQ1I7QUFDTjtBQUVsQyxTQUFTRzs7O0lBQ1AsSUFBTUMsU0FBU0gsc0RBQVNBO0lBQ3hCLElBQU0sUUFBWUcsT0FBT0UsS0FBSyxDQUF0QkQ7SUFFUixJQUFNRSxPQUFPTCxxREFBVSxDQUFDLFNBQUNLO2VBQVNBLEtBQUtGLEtBQUssS0FBS0ksU0FBU0o7O0lBQzFELElBQUksQ0FBQ0UsTUFBTTtRQUNULHFCQUFPLDhEQUFDRztzQkFBSTs7Ozs7O0lBQ2Q7SUFFQSxJQUFNQyxjQUFjO0lBRXBCLElBQU1DLFNBQVNDLE1BQU1DLElBQUksQ0FBQztRQUFFQyxRQUFRO0lBQUcsR0FBRyxTQUFDQyxHQUFHWDtlQUFVLEdBQTRCQSxPQUF6Qk0sYUFBWSxlQUF1QixPQUFWTixRQUFRLEdBQUU7O0lBRTlGLHFCQUNFLDhEQUFDSztRQUFJTyxXQUFXakIsK0VBQW1COzswQkFDakMsOERBQUNtQjtnQkFBSUMsS0FBS2IsS0FBS2MsUUFBUTtnQkFBRUMsS0FBSyxRQUFjLE9BQU5qQjs7Ozs7OzBCQUN0Qyw4REFBQ0s7Z0JBQUlPLFdBQVdqQixpRkFBcUI7MEJBQ2xDWSxPQUFPWSxHQUFHLENBQUMsU0FBQ0MsT0FBT3BCOzJCQUNsQixzREFBc0Q7a0NBQ3RELDhEQUFDYzt3QkFFQ0YsV0FBV2pCLDRFQUFnQjt3QkFDM0JvQixLQUFLSzt3QkFDTEgsS0FBSyxTQUFlLE9BQU5qQjt1QkFIVEE7Ozs7Ozs7Ozs7OzBCQU9YLDhEQUFDSztnQkFBSU8sV0FBV2pCLDJFQUFlOztrQ0FDN0IsOERBQUM0QjtrQ0FBSXJCLEtBQUtzQixXQUFXOzs7Ozs7a0NBQ3JCLDhEQUFDQztrQ0FBR3ZCLEtBQUt3QixLQUFLOzs7Ozs7a0NBQ2QsOERBQUNyQjs7MENBQ0MsOERBQUNzQjswQ0FBTzs7Ozs7OzBDQUNSLDhEQUFDQTswQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2xCO0dBdkNTN0I7O1FBQ1FGLGtEQUFTQTs7O0tBRGpCRTtBQXlDVCwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2N1c3RvbWl6YXRpb24vY3VzdG9taXphdGlvbi5qcz85ZDExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9jdXN0b21pemF0aW9uLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGl0ZW1zIGZyb20gJy4uLy4uL0RhdGEvZGInO1xuXG5mdW5jdGlvbiBDdXN0b21pemF0aW9uKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpbmRleCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnN0IGl0ZW0gPSBpdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLmluZGV4ID09PSBwYXJzZUludChpbmRleCkpO1xuICBpZiAoIWl0ZW0pIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+OyBcbiAgfVxuXG4gIGNvbnN0IGltYWdlRm9sZGVyID0gJy9iYXNrZXRiYWxscyc7IFxuXG4gIGNvbnN0IGltYWdlcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDE1IH0sIChfLCBpbmRleCkgPT4gYCR7aW1hZ2VGb2xkZXJ9L2Jhc2tldGJhbGwke2luZGV4ICsgMX0ucG5nYCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmN1c3RvbWl6ZUJveH0+XG4gICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZVVybH0gYWx0PXtgSXRlbSAke2luZGV4fWB9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlU2Nyb2xsQm94fT5cbiAgICAgICAge2ltYWdlcy5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9pbWctcmVkdW5kYW50LWFsdFxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUl0ZW19XG4gICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgYWx0PXtgSW1hZ2UgJHtpbmRleH1gfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyQm94fT5cbiAgICAgICAgPGgyPntpdGVtLmRlc2NyaXB0aW9ufTwvaDI+XG4gICAgICAgIDxwPntpdGVtLnByaWNlfTwvcD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uPkFERCBUTyBDQVJUPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbj5XSVNITElTVDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21pemF0aW9uO1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVJvdXRlciIsIml0ZW1zIiwiQ3VzdG9taXphdGlvbiIsInJvdXRlciIsImluZGV4IiwicXVlcnkiLCJpdGVtIiwiZmluZCIsInBhcnNlSW50IiwiZGl2IiwiaW1hZ2VGb2xkZXIiLCJpbWFnZXMiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiY2xhc3NOYW1lIiwiY3VzdG9taXplQm94IiwiaW1nIiwic3JjIiwiaW1hZ2VVcmwiLCJhbHQiLCJpbWFnZVNjcm9sbEJveCIsIm1hcCIsImltYWdlIiwiaW1hZ2VJdGVtIiwib3JkZXJCb3giLCJoMiIsImRlc2NyaXB0aW9uIiwicCIsInByaWNlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/customization/customization.js\n"));

/***/ })

});