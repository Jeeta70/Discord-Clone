"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(main)/(routes)/layout",{

/***/ "(app-pages-browser)/./components/navigation/navigation-action.tsx":
/*!*****************************************************!*\
  !*** ./components/navigation/navigation-action.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NavigationAction: function() { return /* binding */ NavigationAction; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=Plus!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/plus.js\");\n/* __next_internal_client_entry_do_not_use__ NavigationAction auto */ \n\nconst NavigationAction = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"group-hover:text-white transition text-emerald-500\",\n                    size: 25\n                }, void 0, false, {\n                    fileName: \"/home/sics/Desktop/Ajeet/Dummy/Discord-Clone/components/navigation/navigation-action.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/sics/Desktop/Ajeet/Dummy/Discord-Clone/components/navigation/navigation-action.tsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/sics/Desktop/Ajeet/Dummy/Discord-Clone/components/navigation/navigation-action.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/sics/Desktop/Ajeet/Dummy/Discord-Clone/components/navigation/navigation-action.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = NavigationAction;\nvar _c;\n$RefreshReg$(_c, \"NavigationAction\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLWFjdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVvQztBQUU3QixNQUFNQyxtQkFBbUI7SUFDOUIscUJBQ0UsOERBQUNDO2tCQUNDLDRFQUFDQztzQkFDQyw0RUFBQ0Q7Z0JBQUlFLFdBQVU7MEJBQ2IsNEVBQUNKLGdGQUFJQTtvQkFDSEksV0FBVTtvQkFDVkMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxCLEVBQUU7S0FiV0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24tYWN0aW9uLnRzeD9hNDI0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBQbHVzIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgTmF2aWdhdGlvbkFjdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG14LTMgaC1bNDhweF0gdy1bNDhweF0gcm91bmRlZC1bMjRweF0gZ3JvdXAtaG92ZXI6cm91bmRlZC1bMTZweF0gdHJhbnNpdGlvbi1hbGwgb3ZlcmZsb3ctaGlkZGVuIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1iYWNrZ3JvdW5kIGRhcms6YmctbmV1dHJhbC03MDAgZ3JvdXAtaG92ZXI6YmctZW1lcmFsZC01MDBcIj5cbiAgICAgICAgICA8UGx1c1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAtaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uIHRleHQtZW1lcmFsZC01MDBcIlxuICAgICAgICAgICAgc2l6ZT17MjV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUGx1cyIsIk5hdmlnYXRpb25BY3Rpb24iLCJkaXYiLCJidXR0b24iLCJjbGFzc05hbWUiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/navigation/navigation-action.tsx\n"));

/***/ })

});