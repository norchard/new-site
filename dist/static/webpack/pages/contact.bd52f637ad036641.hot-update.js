"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./src/components/Map.js":
/*!*******************************!*\
  !*** ./src/components/Map.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Map = ()=>{\n    _s();\n    const [map, setMap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        mapboxgl.accessToken = \"pk.eyJ1Ijoibm9yY2gyIiwiYSI6ImNsbnBjeWoxOTBscGwyb3FtODUyMmJvODUifQ.MyQTyeDY3IUX7ivhEKpzGw\";\n        const map = new mapboxgl.Map({\n            container: \"map\",\n            // Choose from Mapbox's core styles, or make your own style with Mapbox Studio\n            style: \"mapbox://styles/mapbox/streets-v12\",\n            center: [\n                12.550343,\n                55.665957\n            ],\n            zoom: 8\n        });\n        // Create a default Marker and add it to the map.\n        const marker1 = new mapboxgl.Marker().setLngLat([\n            12.554729,\n            55.70651\n        ]).addTo(map);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"map\",\n        className: \"w-max\"\n    }, void 0, false, {\n        fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/components/Map.js\",\n        lineNumber: 22,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Map, \"4bJBv0PO2rrDzFRchWWuXyIru0A=\");\n_c = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QztBQUU1QyxNQUFNRSxNQUFNOztJQUNWLE1BQU0sQ0FBQ0MsS0FBS0MsT0FBTyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUMvQkMsZ0RBQVNBLENBQUM7UUFDUkksU0FBU0MsV0FBVyxHQUNsQjtRQUNGLE1BQU1ILE1BQU0sSUFBSUUsU0FBU0gsR0FBRyxDQUFDO1lBQzNCSyxXQUFXO1lBQ1gsOEVBQThFO1lBQzlFQyxPQUFPO1lBQ1BDLFFBQVE7Z0JBQUM7Z0JBQVc7YUFBVTtZQUM5QkMsTUFBTTtRQUNSO1FBRUEsaURBQWlEO1FBQ2pELE1BQU1DLFVBQVUsSUFBSU4sU0FBU08sTUFBTSxHQUNoQ0MsU0FBUyxDQUFDO1lBQUM7WUFBVztTQUFTLEVBQy9CQyxLQUFLLENBQUNYO0lBQ1gsR0FBRyxFQUFFO0lBRUwscUJBQU8sOERBQUNZO1FBQUlDLElBQUc7UUFBTUMsV0FBVTs7Ozs7O0FBQ2pDO0dBcEJNZjtLQUFBQTtBQXFCTiwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NYXAuanM/MjRlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IE1hcCA9ICgpID0+IHtcbiAgY29uc3QgW21hcCwgc2V0TWFwXSA9IHVzZVN0YXRlKG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG1hcGJveGdsLmFjY2Vzc1Rva2VuID1cbiAgICAgIFwicGsuZXlKMUlqb2libTl5WTJneUlpd2lZU0k2SW1Oc2JuQmplV294T1RCc2NHd3liM0Z0T0RVeU1tSnZPRFVpZlEuTXlRVHllRFkzSVVYN2l2aEVLcHpHd1wiO1xuICAgIGNvbnN0IG1hcCA9IG5ldyBtYXBib3hnbC5NYXAoe1xuICAgICAgY29udGFpbmVyOiBcIm1hcFwiLFxuICAgICAgLy8gQ2hvb3NlIGZyb20gTWFwYm94J3MgY29yZSBzdHlsZXMsIG9yIG1ha2UgeW91ciBvd24gc3R5bGUgd2l0aCBNYXBib3ggU3R1ZGlvXG4gICAgICBzdHlsZTogXCJtYXBib3g6Ly9zdHlsZXMvbWFwYm94L3N0cmVldHMtdjEyXCIsXG4gICAgICBjZW50ZXI6IFsxMi41NTAzNDMsIDU1LjY2NTk1N10sXG4gICAgICB6b29tOiA4LFxuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIGEgZGVmYXVsdCBNYXJrZXIgYW5kIGFkZCBpdCB0byB0aGUgbWFwLlxuICAgIGNvbnN0IG1hcmtlcjEgPSBuZXcgbWFwYm94Z2wuTWFya2VyKClcbiAgICAgIC5zZXRMbmdMYXQoWzEyLjU1NDcyOSwgNTUuNzA2NTFdKVxuICAgICAgLmFkZFRvKG1hcCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPGRpdiBpZD1cIm1hcFwiIGNsYXNzTmFtZT1cInctbWF4XCI+PC9kaXY+O1xufTtcbmV4cG9ydCBkZWZhdWx0IE1hcDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1hcCIsIm1hcCIsInNldE1hcCIsIm1hcGJveGdsIiwiYWNjZXNzVG9rZW4iLCJjb250YWluZXIiLCJzdHlsZSIsImNlbnRlciIsInpvb20iLCJtYXJrZXIxIiwiTWFya2VyIiwic2V0TG5nTGF0IiwiYWRkVG8iLCJkaXYiLCJpZCIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Map.js\n"));

/***/ })

});