/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"wrapper\": \"Home_wrapper__kA9A_\",\n\t\"section\": \"Home_section__taYTg\",\n\t\"input\": \"Home_input__ZarWZ\",\n\t\"button\": \"Home_button__Zs7A2\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xvbmUtdGFibmV3cy8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/YjE3MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwiSG9tZV93cmFwcGVyX19rQTlBX1wiLFxuXHRcInNlY3Rpb25cIjogXCJIb21lX3NlY3Rpb25fX3RhWVRnXCIsXG5cdFwiaW5wdXRcIjogXCJIb21lX2lucHV0X19aYXJXWlwiLFxuXHRcImJ1dHRvblwiOiBcIkhvbWVfYnV0dG9uX19aczdBMlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst specialNames = [\n    \"kiki\",\n    \"banuki\",\n    \"nuki\",\n    \"rebeca\",\n    \"beca\"\n];\nfunction Home() {\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleNameChange = (event)=>{\n        setName(event.target.value);\n    };\n    const handleClickButton = ()=>{\n        console.log(\"Voc\\xea n\\xe3o d\\xe1 brecha hein :D\");\n        if (specialNames.includes(name.toLowerCase())) {\n            return alert(\"TE AMO MEU AMOR DA MINHA VIDA \\uD83D\\uDDA4\");\n        }\n        alert(`${name}, obrigado por ter me clicado XD. Good news are coming...`);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().section),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                    value: name,\n                    onChange: handleNameChange,\n                    placeholder: !name ? \"Digite seu nome\" : \"\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            name ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                onClick: handleClickButton,\n                children: [\n                    name,\n                    \", por favor me clique :(\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUVjO0FBRS9DLE1BQU1FLGVBQWU7SUFBQztJQUFRO0lBQVU7SUFBUTtJQUFVO0NBQU87QUFFakUsU0FBU0MsT0FBTztJQUNkLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUVqQyxNQUFNTSxtQkFBbUIsQ0FBQ0MsUUFBVTtRQUNsQ0YsUUFBUUUsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQzVCO0lBRUEsTUFBTUMsb0JBQW9CLElBQU07UUFDOUJDLFFBQVFDLEdBQUcsQ0FBQztRQUVaLElBQUlWLGFBQWFXLFFBQVEsQ0FBQ1QsS0FBS1UsV0FBVyxLQUFLO1lBQzdDLE9BQU9DLE1BQU07UUFDZixDQUFDO1FBRURBLE1BQU0sQ0FBQyxFQUFFWCxLQUFLLHlEQUF5RCxDQUFDO0lBQzFFO0lBRUEscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVdoQix3RUFBYzs7MEJBQzVCLDhEQUFDa0I7Z0JBQVFGLFdBQVdoQix3RUFBYzswQkFDaEMsNEVBQUNtQjtvQkFDQ0gsV0FBV2hCLHNFQUFZO29CQUN2QlEsT0FBT0w7b0JBQ1BpQixVQUFVZjtvQkFDVmdCLGFBQWEsQ0FBQ2xCLE9BQU8sb0JBQW9CLEVBQUU7Ozs7Ozs7Ozs7O1lBSTlDQSxxQkFDQyw4REFBQ21CO2dCQUFPTixXQUFXaEIsdUVBQWE7Z0JBQUV1QixTQUFTZDs7b0JBQ3hDTjtvQkFBSzs7Ozs7O3VCQUVOLElBQUk7Ozs7Ozs7QUFHZDtBQUVBLGlFQUFlRCxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xvbmUtdGFibmV3cy8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5cbmNvbnN0IHNwZWNpYWxOYW1lcyA9IFsna2lraScsICdiYW51a2knLCAnbnVraScsICdyZWJlY2EnLCAnYmVjYSddO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgaGFuZGxlTmFtZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGlja0J1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnVm9jw6ogbsOjbyBkw6EgYnJlY2hhIGhlaW4gOkQnKTtcblxuICAgIGlmIChzcGVjaWFsTmFtZXMuaW5jbHVkZXMobmFtZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgcmV0dXJuIGFsZXJ0KCdURSBBTU8gTUVVIEFNT1IgREEgTUlOSEEgVklEQSDwn5akJyk7XG4gICAgfVxuXG4gICAgYWxlcnQoYCR7bmFtZX0sIG9icmlnYWRvIHBvciB0ZXIgbWUgY2xpY2FkbyBYRC4gR29vZCBuZXdzIGFyZSBjb21pbmcuLi5gKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU5hbWVDaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9eyFuYW1lID8gJ0RpZ2l0ZSBzZXUgbm9tZScgOiAnJ31cbiAgICAgICAgLz5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAge25hbWUgPyAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVDbGlja0J1dHRvbn0+XG4gICAgICAgICAge25hbWV9LCBwb3IgZmF2b3IgbWUgY2xpcXVlIDooXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJzcGVjaWFsTmFtZXMiLCJIb21lIiwibmFtZSIsInNldE5hbWUiLCJoYW5kbGVOYW1lQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNsaWNrQnV0dG9uIiwiY29uc29sZSIsImxvZyIsImluY2x1ZGVzIiwidG9Mb3dlckNhc2UiLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsIndyYXBwZXIiLCJzZWN0aW9uIiwiaW5wdXQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();