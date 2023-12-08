"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Logo */ \"./components/Logo.js\");\n/* harmony import */ var _icon_github__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/icon/github */ \"./icon/github.js\");\n/* harmony import */ var _icon_google__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/icon/google */ \"./icon/google.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Layout(param) {\n    let { children  } = param;\n    _s();\n    const [showNav, setShowNav] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    console.log({\n        session,\n        data\n    });\n    if (!session) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-slate-900 w-screen h-screen flex items-center relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center w-full flex flex-col p-4 m-auto justify-evenly items-center text-white bg-slate-900\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-white w-auto overflow-hidden relative bg-slate-900 m-0 pt-9\",\n                            children: [\n                                \"Login to access the Admin Dashboard\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"./public/favicon.ico\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\Websits\\\\minted-gold-ecommerce\\\\minted-gold-admin\\\\components\\\\Layout.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\Websits\\\\minted-gold-ecommerce\\\\minted-gold-admin\\\\components\\\\Layout.js\",\n                            lineNumber: 17,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"github\"),\n                            className: \"bg-gray-600 w-auto m-3 flex items-center justify-evenly p-4 rounded-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon_github__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    width: \"2rem\",\n                                    height: \"2rem\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\Websits\\\\minted-gold-ecommerce\\\\minted-gold-admin\\\\components\\\\Layout.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"px-3.5\",\n                                    children: \"Login with GitHub\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\Websits\\\\minted-gold-ecommerce\\\\minted-gold-admin\\\\components\\\\Layout.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\Websits\\\\minted-gold-ecommerce\\\\minted-gold-admin\\\\components\\\\Layout.js\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"google\"),\n                            className: \"bg-white w-auto m-3 flex items-center justify-evenly text-black p-4 rounded-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon_google__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    width: \"2rem\",\n                                    height: \"2rem\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\Websits\\\\minted-gold-ecommerce\\\\minted-gold-admin\\\\components\\\\Layout.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"px-3.5\",\n                                    children: \"Login with Google\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\Websits\\\\minted-gold-ecommerce\\\\minted-gold-admin\\\\components\\\\Layout.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\Websits\\\\minted-gold-ecommerce\\\\minted-gold-admin\\\\components\\\\Layout.js\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\Websits\\\\minted-gold-ecommerce\\\\minted-gold-admin\\\\components\\\\Layout.js\",\n                    lineNumber: 16,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Websits\\\\minted-gold-ecommerce\\\\minted-gold-admin\\\\components\\\\Layout.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this)\n        }, void 0, false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-bgGray min-h-screen \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"block md:hidden flex items-center p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setShowNav(true),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            viewBox: \"0 0 24 24\",\n                            fill: \"currentColor\",\n                            className: \"w-6 h-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                fillRule: \"evenodd\",\n                                d: \"M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z\",\n                                clipRule: \"evenodd\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\Websits\\\\minted-gold-ecommerce\\\\minted-gold-admin\\\\components\\\\Layout.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\Websits\\\\minted-gold-ecommerce\\\\minted-gold-admin\\\\components\\\\Layout.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Websits\\\\minted-gold-ecommerce\\\\minted-gold-admin\\\\components\\\\Layout.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex grow justify-center mr-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\Websits\\\\minted-gold-ecommerce\\\\minted-gold-admin\\\\components\\\\Layout.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Websits\\\\minted-gold-ecommerce\\\\minted-gold-admin\\\\components\\\\Layout.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Websits\\\\minted-gold-ecommerce\\\\minted-gold-admin\\\\components\\\\Layout.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        show: showNav\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Websits\\\\minted-gold-ecommerce\\\\minted-gold-admin\\\\components\\\\Layout.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-grow p-4\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Websits\\\\minted-gold-ecommerce\\\\minted-gold-admin\\\\components\\\\Layout.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Websits\\\\minted-gold-ecommerce\\\\minted-gold-admin\\\\components\\\\Layout.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\Websits\\\\minted-gold-ecommerce\\\\minted-gold-admin\\\\components\\\\Layout.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Layout, \"CPsEDN7CvSqBxHFpdGxH4t+nxpk=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQThEO0FBQzNCO0FBQ0Y7QUFDSTtBQUNGO0FBQ0k7QUFFeEIsU0FBU1EsT0FBTyxLQUFZLEVBQUU7UUFBZCxFQUFFQyxTQUFRLEVBQUUsR0FBWjs7SUFDN0IsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDLEtBQUs7SUFDNUMsTUFBTSxFQUFFUSxNQUFNQyxRQUFPLEVBQUUsR0FBR2IsMkRBQVVBO0lBQ3BDYyxRQUFRQyxHQUFHLENBQUM7UUFBRUY7UUFBVUQ7SUFBSztJQUM3QixJQUFJLENBQUNDLFNBQVM7UUFDWixxQkFDRTtzQkFDRSw0RUFBQ0c7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUdELFdBQVU7O2dDQUFtRTs4Q0FFL0UsOERBQUNFO29DQUFJQyxLQUFJOzs7Ozs7Ozs7Ozs7c0NBRVgsOERBQUNDOzRCQUNDQyxTQUFTLElBQU1yQix1REFBTUEsQ0FBQzs0QkFDdEJnQixXQUFVOzs4Q0FFViw4REFBQ1gsb0RBQU1BO29DQUFDaUIsT0FBTztvQ0FBUUMsUUFBUTs7Ozs7OzhDQUMvQiw4REFBQ0M7b0NBQUtSLFdBQVU7OENBQVM7Ozs7Ozs7Ozs7OztzQ0FFM0IsOERBQUNJOzRCQUNDQyxTQUFTLElBQU1yQix1REFBTUEsQ0FBQzs0QkFDdEJnQixXQUFVOzs4Q0FFViw4REFBQ1Ysb0RBQVVBO29DQUFDZ0IsT0FBTztvQ0FBUUMsUUFBUTs7Ozs7OzhDQUNuQyw4REFBQ0M7b0NBQUtSLFdBQVU7OENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU1yQyxDQUFDO0lBRUQscUJBQ0UsOERBQUNEO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNJO3dCQUFPQyxTQUFTLElBQU1YLFdBQVcsSUFBSTtrQ0FDcEMsNEVBQUNlOzRCQUNDQyxPQUFNOzRCQUNOQyxTQUFROzRCQUNSQyxNQUFLOzRCQUNMWixXQUFVO3NDQUVWLDRFQUFDYTtnQ0FDQ0MsVUFBUztnQ0FDVEMsR0FBRTtnQ0FDRkMsVUFBUzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJZiw4REFBQ2pCO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDWix3REFBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR1QsOERBQUNXO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ2QsdURBQUdBO3dCQUFDK0IsTUFBTXhCOzs7Ozs7a0NBQ1gsOERBQUNNO3dCQUFJQyxXQUFVO2tDQUFpQlI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl4QyxDQUFDO0dBNUR1QkQ7O1FBRUlSLHVEQUFVQTs7O0tBRmRRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzUxNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCJAL2NvbXBvbmVudHMvTmF2XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCJAL2NvbXBvbmVudHMvTG9nb1wiO1xyXG5pbXBvcnQgR2l0SHViIGZyb20gXCJAL2ljb24vZ2l0aHViXCI7XHJcbmltcG9ydCBHb29nbGVJY29uIGZyb20gXCJAL2ljb24vZ29vZ2xlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW3Nob3dOYXYsIHNldFNob3dOYXZdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xyXG4gIGNvbnNvbGUubG9nKHsgc2Vzc2lvbiAsIGRhdGEgfSk7XHJcbiAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2xhdGUtOTAwIHctc2NyZWVuIGgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHctZnVsbCBmbGV4IGZsZXgtY29sIHAtNCBtLWF1dG8ganVzdGlmeS1ldmVubHkgaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgYmctc2xhdGUtOTAwXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHctYXV0byBvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmUgYmctc2xhdGUtOTAwIG0tMCBwdC05XCI+XHJcbiAgICAgICAgICAgICAgTG9naW4gdG8gYWNjZXNzIHRoZSBBZG1pbiBEYXNoYm9hcmRcclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vcHVibGljL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNpZ25JbihcImdpdGh1YlwiKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTYwMCB3LWF1dG8gbS0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZXZlbmx5IHAtNCByb3VuZGVkLWxnXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxHaXRIdWIgd2lkdGg9e1wiMnJlbVwifSBoZWlnaHQ9e1wiMnJlbVwifSAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTMuNVwiPkxvZ2luIHdpdGggR2l0SHViPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNpZ25JbihcImdvb2dsZVwiKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSB3LWF1dG8gbS0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZXZlbmx5IHRleHQtYmxhY2sgcC00IHJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEdvb2dsZUljb24gd2lkdGg9e1wiMnJlbVwifSBoZWlnaHQ9e1wiMnJlbVwifSAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTMuNVwiPkxvZ2luIHdpdGggR29vZ2xlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1iZ0dyYXkgbWluLWgtc2NyZWVuIFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIG1kOmhpZGRlbiBmbGV4IGl0ZW1zLWNlbnRlciBwLTRcIj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNob3dOYXYodHJ1ZSl9PlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgIGQ9XCJNMyA2Ljc1QS43NS43NSAwIDAxMy43NSA2aDE2LjVhLjc1Ljc1IDAgMDEwIDEuNUgzLjc1QS43NS43NSAwIDAxMyA2Ljc1ek0zIDEyYS43NS43NSAwIDAxLjc1LS43NWgxNi41YS43NS43NSAwIDAxMCAxLjVIMy43NUEuNzUuNzUgMCAwMTMgMTJ6bTAgNS4yNWEuNzUuNzUgMCAwMS43NS0uNzVoMTYuNWEuNzUuNzUgMCAwMTAgMS41SDMuNzVhLjc1Ljc1IDAgMDEtLjc1LS43NXpcIlxyXG4gICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ3JvdyBqdXN0aWZ5LWNlbnRlciBtci02XCI+XHJcbiAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgPE5hdiBzaG93PXtzaG93TmF2fSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93IHAtNFwiPntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTZXNzaW9uIiwic2lnbkluIiwic2lnbk91dCIsIk5hdiIsInVzZVN0YXRlIiwiTG9nbyIsIkdpdEh1YiIsIkdvb2dsZUljb24iLCJMYXlvdXQiLCJjaGlsZHJlbiIsInNob3dOYXYiLCJzZXRTaG93TmF2IiwiZGF0YSIsInNlc3Npb24iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJpbWciLCJzcmMiLCJidXR0b24iLCJvbkNsaWNrIiwid2lkdGgiLCJoZWlnaHQiLCJzcGFuIiwic3ZnIiwieG1sbnMiLCJ2aWV3Qm94IiwiZmlsbCIsInBhdGgiLCJmaWxsUnVsZSIsImQiLCJjbGlwUnVsZSIsInNob3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n"));

/***/ })

});