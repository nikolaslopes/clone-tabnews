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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst specialNames = [\n    \"kiki\",\n    \"banuki\",\n    \"nuki\",\n    \"rebeca\",\n    \"beca\"\n];\nfunction Home() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleNameChange = (event)=>{\n        setName(event.target.value);\n    };\n    const handleClickButton = ()=>{\n        console.log(\"Voc\\xea n\\xe3o d\\xe1 brecha hein :D\");\n        if (specialNames.includes[name.toLowerCase()]) {\n            console.log(\"AAA\");\n            alert(\"TE AMO MEU AMOR DA MINHA VIDA \\uD83D\\uDDA4\");\n        } else {}\n        alert(\"\".concat(name, \", obrigado por ter me clicado XD. Good news are coming...\"));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().section),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                    value: name,\n                    onChange: handleNameChange,\n                    placeholder: !name ? \"Digite seu nome\" : \"\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            name ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                onClick: handleClickButton,\n                children: [\n                    name,\n                    \", por favor me clique :(\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"/PAWDgWx7+Y6BmsFMUKcdrcX5eM=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFFYztBQUUvQyxNQUFNRSxlQUFlO0lBQUM7SUFBUTtJQUFVO0lBQVE7SUFBVTtDQUFPO0FBRWpFLFNBQVNDLE9BQU87O0lBQ2QsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU1NLG1CQUFtQixDQUFDQyxRQUFVO1FBQ2xDRixRQUFRRSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDNUI7SUFFQSxNQUFNQyxvQkFBb0IsSUFBTTtRQUM5QkMsUUFBUUMsR0FBRyxDQUFDO1FBRVosSUFBSVYsYUFBYVcsUUFBUSxDQUFDVCxLQUFLVSxXQUFXLEdBQUcsRUFBRTtZQUM3Q0gsUUFBUUMsR0FBRyxDQUFDO1lBQ1pHLE1BQU07UUFDUixPQUFPLENBRVAsQ0FBQztRQUVEQSxNQUFNLEdBQVEsT0FBTFgsTUFBSztJQUNoQjtJQUVBLHFCQUNFLDhEQUFDWTtRQUFJQyxXQUFXaEIsd0VBQWM7OzBCQUM1Qiw4REFBQ2tCO2dCQUFRRixXQUFXaEIsd0VBQWM7MEJBQ2hDLDRFQUFDbUI7b0JBQ0NILFdBQVdoQixzRUFBWTtvQkFDdkJRLE9BQU9MO29CQUNQaUIsVUFBVWY7b0JBQ1ZnQixhQUFhLENBQUNsQixPQUFPLG9CQUFvQixFQUFFOzs7Ozs7Ozs7OztZQUk5Q0EscUJBQ0MsOERBQUNtQjtnQkFBT04sV0FBV2hCLHVFQUFhO2dCQUFFdUIsU0FBU2Q7O29CQUN4Q047b0JBQUs7Ozs7Ozt1QkFFTixJQUFJOzs7Ozs7O0FBR2Q7R0F0Q1NEO0tBQUFBO0FBd0NULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5cbmNvbnN0IHNwZWNpYWxOYW1lcyA9IFsna2lraScsICdiYW51a2knLCAnbnVraScsICdyZWJlY2EnLCAnYmVjYSddO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgaGFuZGxlTmFtZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGlja0J1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnVm9jw6ogbsOjbyBkw6EgYnJlY2hhIGhlaW4gOkQnKTtcblxuICAgIGlmIChzcGVjaWFsTmFtZXMuaW5jbHVkZXNbbmFtZS50b0xvd2VyQ2FzZSgpXSkge1xuICAgICAgY29uc29sZS5sb2coJ0FBQScpOyBcbiAgICAgIGFsZXJ0KCdURSBBTU8gTUVVIEFNT1IgREEgTUlOSEEgVklEQSDwn5akJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFxuICAgIH1cblxuICAgIGFsZXJ0KGAke25hbWV9LCBvYnJpZ2FkbyBwb3IgdGVyIG1lIGNsaWNhZG8gWEQuIEdvb2QgbmV3cyBhcmUgY29taW5nLi4uYCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbn0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVOYW1lQ2hhbmdlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXshbmFtZSA/ICdEaWdpdGUgc2V1IG5vbWUnIDogJyd9XG4gICAgICAgIC8+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHtuYW1lID8gKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17aGFuZGxlQ2xpY2tCdXR0b259PlxuICAgICAgICAgIHtuYW1lfSwgcG9yIGZhdm9yIG1lIGNsaXF1ZSA6KFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwic3BlY2lhbE5hbWVzIiwiSG9tZSIsIm5hbWUiLCJzZXROYW1lIiwiaGFuZGxlTmFtZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDbGlja0J1dHRvbiIsImNvbnNvbGUiLCJsb2ciLCJpbmNsdWRlcyIsInRvTG93ZXJDYXNlIiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJ3cmFwcGVyIiwic2VjdGlvbiIsImlucHV0Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});