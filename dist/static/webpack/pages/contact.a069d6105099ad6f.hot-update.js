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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Map = ()=>{\n    _s();\n    const [map, setMap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        mapboxgl.accessToken = \"pk.eyJ1Ijoibm9yY2gyIiwiYSI6ImNsbnBjeWoxOTBscGwyb3FtODUyMmJvODUifQ.MyQTyeDY3IUX7ivhEKpzGw\";\n        const map = new mapboxgl.Map({\n            container: \"map\",\n            // Choose from Mapbox's core styles, or make your own style with Mapbox Studio\n            style: \"mapbox://styles/mapbox/streets-v12\",\n            center: [\n                -95.3825,\n                29.7719444\n            ],\n            zoom: 8\n        });\n        var popup = new mapboxgl.Popup().setText(\"Description\").addTo(map);\n        // Create a default Marker and add it to the map.\n        const marker1 = new mapboxgl.Marker().setLngLat([\n            -95.3825,\n            29.7719444\n        ]).addTo(map).setPopup(popup);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"map\",\n        style: {\n            height: \"500px\",\n            width: \"500px\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/components/Map.js\",\n        lineNumber: 25,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Map, \"4bJBv0PO2rrDzFRchWWuXyIru0A=\");\n_c = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QztBQUU1QyxNQUFNRSxNQUFNOztJQUNWLE1BQU0sQ0FBQ0MsS0FBS0MsT0FBTyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUMvQkMsZ0RBQVNBLENBQUM7UUFDUkksU0FBU0MsV0FBVyxHQUNsQjtRQUNGLE1BQU1ILE1BQU0sSUFBSUUsU0FBU0gsR0FBRyxDQUFDO1lBQzNCSyxXQUFXO1lBQ1gsOEVBQThFO1lBQzlFQyxPQUFPO1lBQ1BDLFFBQVE7Z0JBQUMsQ0FBQztnQkFBUzthQUFXO1lBQzlCQyxNQUFNO1FBQ1I7UUFFQSxJQUFJQyxRQUFRLElBQUlOLFNBQVNPLEtBQUssR0FBR0MsT0FBTyxDQUFDLGVBQWVDLEtBQUssQ0FBQ1g7UUFFOUQsaURBQWlEO1FBQ2pELE1BQU1ZLFVBQVUsSUFBSVYsU0FBU1csTUFBTSxHQUNoQ0MsU0FBUyxDQUFDO1lBQUMsQ0FBQztZQUFTO1NBQVcsRUFDaENILEtBQUssQ0FBQ1gsS0FDTmUsUUFBUSxDQUFDUDtJQUNkLEdBQUcsRUFBRTtJQUVMLHFCQUFPLDhEQUFDUTtRQUFJQyxJQUFHO1FBQU1aLE9BQU87WUFBRWEsUUFBUTtZQUFTQyxPQUFPO1FBQVE7Ozs7OztBQUNoRTtHQXZCTXBCO0tBQUFBO0FBd0JOLCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01hcC5qcz8yNGUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTWFwID0gKCkgPT4ge1xuICBjb25zdCBbbWFwLCBzZXRNYXBdID0gdXNlU3RhdGUobnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbWFwYm94Z2wuYWNjZXNzVG9rZW4gPVxuICAgICAgXCJway5leUoxSWpvaWJtOXlZMmd5SWl3aVlTSTZJbU5zYm5CamVXb3hPVEJzY0d3eWIzRnRPRFV5TW1Kdk9EVWlmUS5NeVFUeWVEWTNJVVg3aXZoRUtwekd3XCI7XG4gICAgY29uc3QgbWFwID0gbmV3IG1hcGJveGdsLk1hcCh7XG4gICAgICBjb250YWluZXI6IFwibWFwXCIsXG4gICAgICAvLyBDaG9vc2UgZnJvbSBNYXBib3gncyBjb3JlIHN0eWxlcywgb3IgbWFrZSB5b3VyIG93biBzdHlsZSB3aXRoIE1hcGJveCBTdHVkaW9cbiAgICAgIHN0eWxlOiBcIm1hcGJveDovL3N0eWxlcy9tYXBib3gvc3RyZWV0cy12MTJcIixcbiAgICAgIGNlbnRlcjogWy05NS4zODI1LCAyOS43NzE5NDQ0XSxcbiAgICAgIHpvb206IDgsXG4gICAgfSk7XG5cbiAgICB2YXIgcG9wdXAgPSBuZXcgbWFwYm94Z2wuUG9wdXAoKS5zZXRUZXh0KFwiRGVzY3JpcHRpb25cIikuYWRkVG8obWFwKTtcblxuICAgIC8vIENyZWF0ZSBhIGRlZmF1bHQgTWFya2VyIGFuZCBhZGQgaXQgdG8gdGhlIG1hcC5cbiAgICBjb25zdCBtYXJrZXIxID0gbmV3IG1hcGJveGdsLk1hcmtlcigpXG4gICAgICAuc2V0TG5nTGF0KFstOTUuMzgyNSwgMjkuNzcxOTQ0NF0pXG4gICAgICAuYWRkVG8obWFwKVxuICAgICAgLnNldFBvcHVwKHBvcHVwKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8ZGl2IGlkPVwibWFwXCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjUwMHB4XCIsIHdpZHRoOiBcIjUwMHB4XCIgfX0+PC9kaXY+O1xufTtcbmV4cG9ydCBkZWZhdWx0IE1hcDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1hcCIsIm1hcCIsInNldE1hcCIsIm1hcGJveGdsIiwiYWNjZXNzVG9rZW4iLCJjb250YWluZXIiLCJzdHlsZSIsImNlbnRlciIsInpvb20iLCJwb3B1cCIsIlBvcHVwIiwic2V0VGV4dCIsImFkZFRvIiwibWFya2VyMSIsIk1hcmtlciIsInNldExuZ0xhdCIsInNldFBvcHVwIiwiZGl2IiwiaWQiLCJoZWlnaHQiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Map.js\n"));

/***/ })

});