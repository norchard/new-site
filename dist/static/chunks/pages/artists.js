/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/artists"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fnicoleorchard%2FDesktop%2Fzoya-next%2Fsrc%2Fpages%2Fartists%2Findex.js&page=%2Fartists!":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fnicoleorchard%2FDesktop%2Fzoya-next%2Fsrc%2Fpages%2Fartists%2Findex.js&page=%2Fartists! ***!
  \******************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/artists\",\n      function () {\n        return __webpack_require__(/*! ./src/pages/artists/index.js */ \"./src/pages/artists/index.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/artists\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRm5pY29sZW9yY2hhcmQlMkZEZXNrdG9wJTJGem95YS1uZXh0JTJGc3JjJTJGcGFnZXMlMkZhcnRpc3RzJTJGaW5kZXguanMmcGFnZT0lMkZhcnRpc3RzISIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLGtFQUE4QjtBQUNyRDtBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/NGRkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL2FydGlzdHNcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3NyYy9wYWdlcy9hcnRpc3RzL2luZGV4LmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9hcnRpc3RzXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fnicoleorchard%2FDesktop%2Fzoya-next%2Fsrc%2Fpages%2Fartists%2Findex.js&page=%2Fartists!\n"));

/***/ }),

/***/ "./src/components/ArtistTile.js":
/*!**************************************!*\
  !*** ./src/components/ArtistTile.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArtistTile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction ArtistTile(props) {\n    const artistSlug = props.artist.toLowerCase().split(\" \").join(\"-\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"/artists/\".concat(artistSlug),\n        className: \"rounded-lg bg-slate-200 w-200 grid m-5 p-5 justify-center content-center hover:shadow-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"block\",\n                width: \"400\",\n                height: \"400\",\n                alt: props.artist,\n                src: props.image\n            }, void 0, false, {\n                fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/components/ArtistTile.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"pt-4 text-black text-xl text-center\",\n                children: props.artist\n            }, void 0, false, {\n                fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/components/ArtistTile.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/components/ArtistTile.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = ArtistTile;\nvar _c;\n$RefreshReg$(_c, \"ArtistTile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BcnRpc3RUaWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDTDtBQUNHO0FBRWQsU0FBU0csV0FBV0MsS0FBSztJQUN0QyxNQUFNQyxhQUFhRCxNQUFNRSxNQUFNLENBQUNDLFdBQVcsR0FBR0MsS0FBSyxDQUFDLEtBQUtDLElBQUksQ0FBQztJQUU5RCxxQkFDRSw4REFBQ1Asa0RBQUlBO1FBQ0hRLE1BQU0sWUFBdUIsT0FBWEw7UUFDbEJNLFdBQVU7OzBCQUVWLDhEQUFDWCxtREFBS0E7Z0JBQ0pXLFdBQVU7Z0JBQ1ZDLE9BQU07Z0JBQ05DLFFBQU87Z0JBQ1BDLEtBQUtWLE1BQU1FLE1BQU07Z0JBQ2pCUyxLQUFLWCxNQUFNWSxLQUFLOzs7Ozs7MEJBRWxCLDhEQUFDQztnQkFBR04sV0FBVTswQkFBdUNQLE1BQU1FLE1BQU07Ozs7Ozs7Ozs7OztBQUd2RTtLQWxCd0JIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FydGlzdFRpbGUuanM/MjMzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJ0aXN0VGlsZShwcm9wcykge1xuICBjb25zdCBhcnRpc3RTbHVnID0gcHJvcHMuYXJ0aXN0LnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIGhyZWY9e2AvYXJ0aXN0cy8ke2FydGlzdFNsdWd9YH1cbiAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctc2xhdGUtMjAwIHctMjAwIGdyaWQgbS01IHAtNSBqdXN0aWZ5LWNlbnRlciBjb250ZW50LWNlbnRlciBob3ZlcjpzaGFkb3ctbWRcIlxuICAgID5cbiAgICAgIDxJbWFnZVxuICAgICAgICBjbGFzc05hbWU9XCJibG9ja1wiXG4gICAgICAgIHdpZHRoPVwiNDAwXCJcbiAgICAgICAgaGVpZ2h0PVwiNDAwXCJcbiAgICAgICAgYWx0PXtwcm9wcy5hcnRpc3R9XG4gICAgICAgIHNyYz17cHJvcHMuaW1hZ2V9XG4gICAgICAvPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInB0LTQgdGV4dC1ibGFjayB0ZXh0LXhsIHRleHQtY2VudGVyXCI+e3Byb3BzLmFydGlzdH08L2gxPlxuICAgIDwvTGluaz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwiTGluayIsIkFydGlzdFRpbGUiLCJwcm9wcyIsImFydGlzdFNsdWciLCJhcnRpc3QiLCJ0b0xvd2VyQ2FzZSIsInNwbGl0Iiwiam9pbiIsImhyZWYiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInNyYyIsImltYWdlIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ArtistTile.js\n"));

/***/ }),

/***/ "./src/pages/artists/index.js":
/*!************************************!*\
  !*** ./src/pages/artists/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Artists; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ArtistTile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ArtistTile */ \"./src/components/ArtistTile.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Artists() {\n    _s();\n    const [artists, setArtists] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    let PROJECT_ID = \"5a2xr1ig\";\n    let DATASET = \"production\";\n    let QUERY = encodeURIComponent('*[_type == \"artist\"]{ name, \"imageUrl\": thumbnail.asset->url}');\n    // Compose the URL for your project's endpoint and add the query\n    let URL = \"https://\".concat(PROJECT_ID, \".api.sanity.io/v2021-10-21/data/query/\").concat(DATASET, \"?query=\").concat(QUERY);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(URL).then((res)=>res.json()).then((res)=>{\n            const artists = res.result.map((entry)=>{\n                // console.log(entry.imageUrl);\n                return {\n                    name: entry.name,\n                    image: entry.imageUrl\n                };\n            });\n            setArtists(artists);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Artists | Zoya\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/pages/artists/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/pages/artists/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/pages/artists/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-12 flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"typeface-seasons text-7xl m-auto\",\n                    children: \"Our Artists\"\n                }, void 0, false, {\n                    fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/pages/artists/index.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/pages/artists/index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-32 pt-12 grid sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6\",\n                children: artists.map((artist, id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArtistTile__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        artist: artist.name,\n                        image: artist.image\n                    }, id, false, {\n                        fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/pages/artists/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/pages/artists/index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/pages/artists/index.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Artists, \"myO3VIklrIMVqFD52MxwExKe+k4=\");\n_c = Artists;\nvar _c;\n$RefreshReg$(_c, \"Artists\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXJ0aXN0cy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkQ7QUFDOUI7QUFFa0I7QUFDcEI7QUFFZCxTQUFTTzs7SUFDdEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDekMsSUFBSVEsYUFBYTtJQUNqQixJQUFJQyxVQUFVO0lBQ2QsSUFBSUMsUUFBUUMsbUJBQ1Y7SUFHRixnRUFBZ0U7SUFDaEUsSUFBSUMsTUFBTSxXQUE4REgsT0FBbkRELFlBQVcsMENBQXlERSxPQUFqQkQsU0FBUSxXQUFlLE9BQU5DO0lBRXpGVCxnREFBU0EsQ0FBQztRQUNSWSxNQUFNRCxLQUNIRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxJQUN0QkYsSUFBSSxDQUFDLENBQUNDO1lBQ0wsTUFBTVQsVUFBVVMsSUFBSUUsTUFBTSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0M7Z0JBQzlCLCtCQUErQjtnQkFDL0IsT0FBTztvQkFBRUMsTUFBTUQsTUFBTUMsSUFBSTtvQkFBRUMsT0FBT0YsTUFBTUcsUUFBUTtnQkFBQztZQUNuRDtZQUNBZixXQUFXRDtRQUNiO0lBQ0osR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNQLDJDQUFRQTs7MEJBQ1AsOERBQUNLLGtEQUFJQTs7a0NBQ0gsOERBQUNtQjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0osTUFBSzt3QkFBV0ssU0FBUTs7Ozs7Ozs7Ozs7OzBCQUVoQyw4REFBQ0M7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFHRCxXQUFVOzhCQUFtQzs7Ozs7Ozs7Ozs7MEJBRW5ELDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWnJCLFFBQVFZLEdBQUcsQ0FBQyxDQUFDVyxRQUFRQyxtQkFDcEIsOERBQUMzQiw4REFBVUE7d0JBQVUwQixRQUFRQSxPQUFPVCxJQUFJO3dCQUFFQyxPQUFPUSxPQUFPUixLQUFLO3VCQUE1Q1M7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0I7R0F2Q3dCekI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FydGlzdHMvaW5kZXguanM/ODM5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IEFydGlzdFRpbGUgZnJvbSBcIkAvY29tcG9uZW50cy9BcnRpc3RUaWxlXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFydGlzdHMoKSB7XG4gIGNvbnN0IFthcnRpc3RzLCBzZXRBcnRpc3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgbGV0IFBST0pFQ1RfSUQgPSBcIjVhMnhyMWlnXCI7XG4gIGxldCBEQVRBU0VUID0gXCJwcm9kdWN0aW9uXCI7XG4gIGxldCBRVUVSWSA9IGVuY29kZVVSSUNvbXBvbmVudChcbiAgICAnKltfdHlwZSA9PSBcImFydGlzdFwiXXsgbmFtZSwgXCJpbWFnZVVybFwiOiB0aHVtYm5haWwuYXNzZXQtPnVybH0nXG4gICk7XG5cbiAgLy8gQ29tcG9zZSB0aGUgVVJMIGZvciB5b3VyIHByb2plY3QncyBlbmRwb2ludCBhbmQgYWRkIHRoZSBxdWVyeVxuICBsZXQgVVJMID0gYGh0dHBzOi8vJHtQUk9KRUNUX0lEfS5hcGkuc2FuaXR5LmlvL3YyMDIxLTEwLTIxL2RhdGEvcXVlcnkvJHtEQVRBU0VUfT9xdWVyeT0ke1FVRVJZfWA7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChVUkwpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zdCBhcnRpc3RzID0gcmVzLnJlc3VsdC5tYXAoKGVudHJ5KSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZW50cnkuaW1hZ2VVcmwpO1xuICAgICAgICAgIHJldHVybiB7IG5hbWU6IGVudHJ5Lm5hbWUsIGltYWdlOiBlbnRyeS5pbWFnZVVybCB9O1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0QXJ0aXN0cyhhcnRpc3RzKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFydGlzdHMgfCBab3lhPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xMiBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0eXBlZmFjZS1zZWFzb25zIHRleHQtN3hsIG0tYXV0b1wiPk91ciBBcnRpc3RzPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMyIHB0LTEyIGdyaWQgc206Z3JpZC1jb2xzLTIgc206Z2FwLTIgbWQ6Z3JpZC1jb2xzLTMgbWQ6Z2FwLTQgbGc6Z3JpZC1jb2xzLTQgbGc6Z2FwLTZcIj5cbiAgICAgICAge2FydGlzdHMubWFwKChhcnRpc3QsIGlkKSA9PiAoXG4gICAgICAgICAgPEFydGlzdFRpbGUga2V5PXtpZH0gYXJ0aXN0PXthcnRpc3QubmFtZX0gaW1hZ2U9e2FydGlzdC5pbWFnZX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRnJhZ21lbnQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwiQXJ0aXN0VGlsZSIsIkhlYWQiLCJBcnRpc3RzIiwiYXJ0aXN0cyIsInNldEFydGlzdHMiLCJQUk9KRUNUX0lEIiwiREFUQVNFVCIsIlFVRVJZIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiVVJMIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3VsdCIsIm1hcCIsImVudHJ5IiwibmFtZSIsImltYWdlIiwiaW1hZ2VVcmwiLCJ0aXRsZSIsIm1ldGEiLCJjb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJhcnRpc3QiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/artists/index.js\n"));

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlIQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzPzg4NDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fnicoleorchard%2FDesktop%2Fzoya-next%2Fsrc%2Fpages%2Fartists%2Findex.js&page=%2Fartists!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);