"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst specialNames = [\n    \"kiki\",\n    \"banuki\",\n    \"nuki\",\n    \"\"\n];\nfunction Home() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleNameChange = (event)=>{\n        setName(event.target.value);\n    };\n    const handleClickButton = ()=>{\n        console.log(\"Voc\\xea n\\xe3o d\\xe1 brecha hein :D\");\n        alert(\"\".concat(name, \", obrigado por ter me clicado XD. Good news are coming...\"));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().section),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                    value: name,\n                    onChange: handleNameChange,\n                    placeholder: !name ? \"Digite seu nome\" : \"\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            name ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                onClick: handleClickButton,\n                children: [\n                    name,\n                    \", por favor me clique :(\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"/PAWDgWx7+Y6BmsFMUKcdrcX5eM=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFFYztBQUUvQyxNQUFNRSxlQUFlO0lBQUM7SUFBUTtJQUFVO0lBQVE7Q0FBRztBQUVuRCxTQUFTQyxPQUFPOztJQUNkLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUVqQyxNQUFNTSxtQkFBbUIsQ0FBQ0MsUUFBVTtRQUNsQ0YsUUFBUUUsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQzVCO0lBRUEsTUFBTUMsb0JBQW9CLElBQU07UUFDOUJDLFFBQVFDLEdBQUcsQ0FBQztRQUVaQyxNQUFNLEdBQVEsT0FBTFQsTUFBSztJQUNoQjtJQUVBLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFXZCx3RUFBYzs7MEJBQzVCLDhEQUFDZ0I7Z0JBQVFGLFdBQVdkLHdFQUFjOzBCQUNoQyw0RUFBQ2lCO29CQUNDSCxXQUFXZCxzRUFBWTtvQkFDdkJRLE9BQU9MO29CQUNQZSxVQUFVYjtvQkFDVmMsYUFBYSxDQUFDaEIsT0FBTyxvQkFBb0IsRUFBRTs7Ozs7Ozs7Ozs7WUFJOUNBLHFCQUNDLDhEQUFDaUI7Z0JBQU9OLFdBQVdkLHVFQUFhO2dCQUFFcUIsU0FBU1o7O29CQUN4Q047b0JBQUs7Ozs7Ozt1QkFFTixJQUFJOzs7Ozs7O0FBR2Q7R0EvQlNEO0tBQUFBO0FBaUNULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5cbmNvbnN0IHNwZWNpYWxOYW1lcyA9IFsna2lraScsICdiYW51a2knLCAnbnVraScsICcnXTtcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGhhbmRsZU5hbWVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1ZvY8OqIG7Do28gZMOhIGJyZWNoYSBoZWluIDpEJyk7XG5cbiAgICBhbGVydChgJHtuYW1lfSwgb2JyaWdhZG8gcG9yIHRlciBtZSBjbGljYWRvIFhELiBHb29kIG5ld3MgYXJlIGNvbWluZy4uLmApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb259PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTmFtZUNoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17IW5hbWUgPyAnRGlnaXRlIHNldSBub21lJyA6ICcnfVxuICAgICAgICAvPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7bmFtZSA/IChcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e2hhbmRsZUNsaWNrQnV0dG9ufT5cbiAgICAgICAgICB7bmFtZX0sIHBvciBmYXZvciBtZSBjbGlxdWUgOihcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlcyIsInNwZWNpYWxOYW1lcyIsIkhvbWUiLCJuYW1lIiwic2V0TmFtZSIsImhhbmRsZU5hbWVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2xpY2tCdXR0b24iLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJ3cmFwcGVyIiwic2VjdGlvbiIsImlucHV0Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});