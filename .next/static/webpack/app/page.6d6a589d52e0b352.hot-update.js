"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/ProjectsSection.jsx":
/*!************************************************!*\
  !*** ./src/app/components/ProjectsSection.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectCard */ \"(app-pages-browser)/./src/app/components/ProjectCard.jsx\");\n/* harmony import */ var _ProjectTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectTag */ \"(app-pages-browser)/./src/app/components/ProjectTag.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-in-view.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst projectsData = [\n    {\n        id: 1,\n        title: \"SharkTool - 10 Cr\\xe9ditos - R$ 89,00\",\n        description: \"PEDIDO CONTA NOVA SHARK TOOL  10 CREDITO R$ 89,00\",\n        image: \"/images/projects/card.png\",\n        tag: [\n            \"Loja\"\n        ],\n        gitUrl: \"https://wa.me/17988101676?text=${Ol\\xe1, tenho interesse neste produto}`, '_blank'\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 2,\n        title: \"SharkTool - 10 Cr\\xe9ditos - R$ 59.00\",\n        description: \"PEDIDO CONTA  ANTIGA SHARK TOOL  10 CREDITO R$59,00\",\n        image: \"/images/projects/card.png\",\n        tag: [\n            \"Loja\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 3,\n        title: \"The Magic Tool - Desbloqueio Motorola - R$60,00\",\n        description: \"PEDIDO CONTA  DESBLOQUEIO  MOTOROLA  AQUI R$60,00\",\n        image: \"/images/projects/card.png\",\n        tag: [\n            \"Loja\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 4,\n        title: \"USB Redirector Client - R$65,00\",\n        description: \"USB Redirector Client FA\\xc7A SUA COMPRA \",\n        image: \"/images/projects/card.png\",\n        tag: [\n            \"Loja\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 5,\n        title: \"Criar Conta The Magic Tool\",\n        description: \"Assista o tutorial para cria sua conta no The Magic Tool\",\n        image: \"/images/projects/card.png\",\n        tag: [\n            \"Tutorial\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 6,\n        title: \"Aprenda desbloqueio via remoto PASSO A PASSO - R$ 123,00\",\n        description: \"APRENDA DESBLOQUEIO VIA REMOTO PASSO A PASSO \",\n        image: \"/images/projects/card.png\",\n        tag: [\n            \"Tutorial\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 7,\n        title: \"Aprenda desbloquear com a ferramenta - R$ 87,00\",\n        description: \"APRENDA DESBLOQUEAR COM A FERRAMENTA PASSO A PASSO \",\n        image: \"/images/projects/card.png\",\n        tag: [\n            \"Tutorial\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    }\n];\nconst ProjectsSection = ()=>{\n    _s();\n    const [tag, setTag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Loja\");\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView)(ref, {\n        once: true\n    });\n    const handleTagChange = (newTag)=>{\n        setTag(newTag);\n    };\n    const filteredProjects = projectsData.filter((project)=>project.tag.includes(tag));\n    const cardVariants = {\n        initial: {\n            y: 50,\n            opacity: 0\n        },\n        animate: {\n            y: 0,\n            opacity: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"projects\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12\",\n                children: \"Loja\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leona\\\\Documents\\\\project\\\\josiel\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white flex flex-row justify-center items-center gap-2 py-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Loja\",\n                        isSelected: tag === \"Loja\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leona\\\\Documents\\\\project\\\\josiel\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Tutorial\",\n                        isSelected: tag === \"Tutorial\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leona\\\\Documents\\\\project\\\\josiel\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\leona\\\\Documents\\\\project\\\\josiel\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                ref: ref,\n                className: \"grid md:grid-cols-3 gap-8 md:gap-12\",\n                children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {\n                        variants: cardVariants,\n                        initial: \"initial\",\n                        animate: isInView ? \"animate\" : \"initial\",\n                        transition: {\n                            duration: 0.3,\n                            delay: index * 0.4\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: project.title,\n                            description: project.description,\n                            imgUrl: project.image,\n                            gitUrl: project.gitUrl,\n                            previewUrl: project.previewUrl\n                        }, project.id, false, {\n                            fileName: \"C:\\\\Users\\\\leona\\\\Documents\\\\project\\\\josiel\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                            lineNumber: 119,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\leona\\\\Documents\\\\project\\\\josiel\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                        lineNumber: 112,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leona\\\\Documents\\\\project\\\\josiel\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\leona\\\\Documents\\\\project\\\\josiel\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectsSection, \"Z5U009nodb186STWKhfSstjICs4=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView\n    ];\n});\n_c = ProjectsSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsSection);\nvar _c;\n$RefreshReg$(_c, \"ProjectsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0c1NlY3Rpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDZ0Q7QUFDUjtBQUNGO0FBQ1k7QUFFbEQsTUFBTU8sZUFBZTtJQUNuQjtRQUNFQyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztTQUFPO1FBQ2JDLFFBQVE7UUFDUkMsWUFBWTtJQUNkO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxLQUFLO1lBQUM7U0FBTztRQUNiQyxRQUFRO1FBQ1JDLFlBQVk7SUFDZDtJQUNBO1FBQ0VOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsS0FBSztZQUFDO1NBQU87UUFDYkMsUUFBUTtRQUNSQyxZQUFZO0lBQ2Q7SUFDQTtRQUNFTixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztTQUFPO1FBQ2JDLFFBQVE7UUFDUkMsWUFBWTtJQUNkO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxLQUFLO1lBQUU7U0FBVztRQUNsQkMsUUFBUTtRQUNSQyxZQUFZO0lBQ2Q7SUFDQTtRQUNFTixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztTQUFXO1FBQ2pCQyxRQUFRO1FBQ1JDLFlBQVk7SUFDZDtJQUNBO1FBQ0VOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsS0FBSztZQUFDO1NBQVc7UUFDakJDLFFBQVE7UUFDUkMsWUFBWTtJQUNkO0NBRUQ7QUFFRCxNQUFNQyxrQkFBa0I7O0lBQ3RCLE1BQU0sQ0FBQ0gsS0FBS0ksT0FBTyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNZ0IsTUFBTWYsNkNBQU1BLENBQUM7SUFDbkIsTUFBTWdCLFdBQVdaLHdEQUFTQSxDQUFDVyxLQUFLO1FBQUVFLE1BQU07SUFBSztJQUU3QyxNQUFNQyxrQkFBa0IsQ0FBQ0M7UUFDdkJMLE9BQU9LO0lBQ1Q7SUFFQSxNQUFNQyxtQkFBbUJmLGFBQWFnQixNQUFNLENBQUMsQ0FBQ0MsVUFDNUNBLFFBQVFaLEdBQUcsQ0FBQ2EsUUFBUSxDQUFDYjtJQUd2QixNQUFNYyxlQUFlO1FBQ25CQyxTQUFTO1lBQUVDLEdBQUc7WUFBSUMsU0FBUztRQUFFO1FBQzdCQyxTQUFTO1lBQUVGLEdBQUc7WUFBR0MsU0FBUztRQUFFO0lBQzlCO0lBRUEscUJBQ0UsOERBQUNFO1FBQVF2QixJQUFHOzswQkFDViw4REFBQ3dCO2dCQUFHQyxXQUFVOzBCQUErRDs7Ozs7OzBCQUc3RSw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDN0IsbURBQVVBO3dCQUNUK0IsU0FBU2Y7d0JBQ1RnQixNQUFLO3dCQUNMQyxZQUFZekIsUUFBUTs7Ozs7O2tDQUV0Qiw4REFBQ1IsbURBQVVBO3dCQUNUK0IsU0FBU2Y7d0JBQ1RnQixNQUFLO3dCQUNMQyxZQUFZekIsUUFBUTs7Ozs7Ozs7Ozs7OzBCQUl4Qiw4REFBQzBCO2dCQUFHckIsS0FBS0E7Z0JBQUtnQixXQUFVOzBCQUNyQlgsaUJBQWlCaUIsR0FBRyxDQUFDLENBQUNmLFNBQVNnQixzQkFDOUIsOERBQUNuQyxpREFBTUEsQ0FBQ29DLEVBQUU7d0JBRVJDLFVBQVVoQjt3QkFDVkMsU0FBUTt3QkFDUkcsU0FBU1osV0FBVyxZQUFZO3dCQUNoQ3lCLFlBQVk7NEJBQUVDLFVBQVU7NEJBQUtDLE9BQU9MLFFBQVE7d0JBQUk7a0NBRWhELDRFQUFDckMsb0RBQVdBOzRCQUVWTSxPQUFPZSxRQUFRZixLQUFLOzRCQUNwQkMsYUFBYWMsUUFBUWQsV0FBVzs0QkFDaENvQyxRQUFRdEIsUUFBUWIsS0FBSzs0QkFDckJFLFFBQVFXLFFBQVFYLE1BQU07NEJBQ3RCQyxZQUFZVSxRQUFRVixVQUFVOzJCQUx6QlUsUUFBUWhCLEVBQUU7Ozs7O3VCQVBaZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQmpCO0dBMURNekI7O1FBR2FULG9EQUFTQTs7O0tBSHRCUztBQTRETiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvUHJvamVjdHNTZWN0aW9uLmpzeD8zNzBlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvamVjdENhcmQgZnJvbSBcIi4vUHJvamVjdENhcmRcIjtcclxuaW1wb3J0IFByb2plY3RUYWcgZnJvbSBcIi4vUHJvamVjdFRhZ1wiO1xyXG5pbXBvcnQgeyBtb3Rpb24sIHVzZUluVmlldyB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5jb25zdCBwcm9qZWN0c0RhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aXRsZTogXCJTaGFya1Rvb2wgLSAxMCBDcsOpZGl0b3MgLSBSJCA4OSwwMFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiUEVESURPIENPTlRBIE5PVkEgU0hBUksgVE9PTCAgMTAgQ1JFRElUTyBSJCA4OSwwMFwiLFxyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy9jYXJkLnBuZ1wiLFxyXG4gICAgdGFnOiBbXCJMb2phXCJdLFxyXG4gICAgZ2l0VXJsOiBcImh0dHBzOi8vd2EubWUvMTc5ODgxMDE2NzY/dGV4dD0ke09sw6EsIHRlbmhvIGludGVyZXNzZSBuZXN0ZSBwcm9kdXRvfWAsICdfYmxhbmsnXCIsXHJcbiAgICBwcmV2aWV3VXJsOiBcIi9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0bGU6IFwiU2hhcmtUb29sIC0gMTAgQ3LDqWRpdG9zIC0gUiQgNTkuMDBcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlBFRElETyBDT05UQSAgQU5USUdBIFNIQVJLIFRPT0wgIDEwIENSRURJVE8gUiQ1OSwwMFwiLFxyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy9jYXJkLnBuZ1wiLFxyXG4gICAgdGFnOiBbXCJMb2phXCJdLFxyXG4gICAgZ2l0VXJsOiBcIi9cIixcclxuICAgIHByZXZpZXdVcmw6IFwiL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICB0aXRsZTogXCJUaGUgTWFnaWMgVG9vbCAtIERlc2Jsb3F1ZWlvIE1vdG9yb2xhIC0gUiQ2MCwwMFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiUEVESURPIENPTlRBICBERVNCTE9RVUVJTyAgTU9UT1JPTEEgIEFRVUkgUiQ2MCwwMFwiLFxyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy9jYXJkLnBuZ1wiLFxyXG4gICAgdGFnOiBbXCJMb2phXCJdLFxyXG4gICAgZ2l0VXJsOiBcIi9cIixcclxuICAgIHByZXZpZXdVcmw6IFwiL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICB0aXRsZTogXCJVU0IgUmVkaXJlY3RvciBDbGllbnQgLSBSJDY1LDAwXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJVU0IgUmVkaXJlY3RvciBDbGllbnQgRkHDh0EgU1VBIENPTVBSQSBcIixcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvY2FyZC5wbmdcIixcclxuICAgIHRhZzogW1wiTG9qYVwiXSxcclxuICAgIGdpdFVybDogXCIvXCIsXHJcbiAgICBwcmV2aWV3VXJsOiBcIi9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgdGl0bGU6IFwiQ3JpYXIgQ29udGEgVGhlIE1hZ2ljIFRvb2xcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkFzc2lzdGEgbyB0dXRvcmlhbCBwYXJhIGNyaWEgc3VhIGNvbnRhIG5vIFRoZSBNYWdpYyBUb29sXCIsXHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzL2NhcmQucG5nXCIsXHJcbiAgICB0YWc6IFsgXCJUdXRvcmlhbFwiXSxcclxuICAgIGdpdFVybDogXCIvXCIsXHJcbiAgICBwcmV2aWV3VXJsOiBcIi9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2LFxyXG4gICAgdGl0bGU6IFwiQXByZW5kYSBkZXNibG9xdWVpbyB2aWEgcmVtb3RvIFBBU1NPIEEgUEFTU08gLSBSJCAxMjMsMDBcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkFQUkVOREEgREVTQkxPUVVFSU8gVklBIFJFTU9UTyBQQVNTTyBBIFBBU1NPIFwiLFxyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy9jYXJkLnBuZ1wiLFxyXG4gICAgdGFnOiBbXCJUdXRvcmlhbFwiXSxcclxuICAgIGdpdFVybDogXCIvXCIsXHJcbiAgICBwcmV2aWV3VXJsOiBcIi9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA3LFxyXG4gICAgdGl0bGU6IFwiQXByZW5kYSBkZXNibG9xdWVhciBjb20gYSBmZXJyYW1lbnRhIC0gUiQgODcsMDBcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkFQUkVOREEgREVTQkxPUVVFQVIgQ09NIEEgRkVSUkFNRU5UQSBQQVNTTyBBIFBBU1NPIFwiLFxyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy9jYXJkLnBuZ1wiLFxyXG4gICAgdGFnOiBbXCJUdXRvcmlhbFwiXSxcclxuICAgIGdpdFVybDogXCIvXCIsXHJcbiAgICBwcmV2aWV3VXJsOiBcIi9cIixcclxuICB9LFxyXG4gIFxyXG5dO1xyXG5cclxuY29uc3QgUHJvamVjdHNTZWN0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0YWcsIHNldFRhZ10gPSB1c2VTdGF0ZShcIkxvamFcIik7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGlzSW5WaWV3ID0gdXNlSW5WaWV3KHJlZiwgeyBvbmNlOiB0cnVlIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVUYWdDaGFuZ2UgPSAobmV3VGFnKSA9PiB7XHJcbiAgICBzZXRUYWcobmV3VGFnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmaWx0ZXJlZFByb2plY3RzID0gcHJvamVjdHNEYXRhLmZpbHRlcigocHJvamVjdCkgPT5cclxuICAgIHByb2plY3QudGFnLmluY2x1ZGVzKHRhZylcclxuICApO1xyXG5cclxuICBjb25zdCBjYXJkVmFyaWFudHMgPSB7XHJcbiAgICBpbml0aWFsOiB7IHk6IDUwLCBvcGFjaXR5OiAwIH0sXHJcbiAgICBhbmltYXRlOiB7IHk6IDAsIG9wYWNpdHk6IDEgfSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJwcm9qZWN0c1wiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC00eGwgZm9udC1ib2xkIHRleHQtd2hpdGUgbXQtNCBtYi04IG1kOm1iLTEyXCI+XHJcbiAgICAgICAgTG9qYVxyXG4gICAgICA8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTIgcHktNlwiPlxyXG4gICAgICAgIDxQcm9qZWN0VGFnXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUYWdDaGFuZ2V9XHJcbiAgICAgICAgICBuYW1lPVwiTG9qYVwiXHJcbiAgICAgICAgICBpc1NlbGVjdGVkPXt0YWcgPT09IFwiTG9qYVwifVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFByb2plY3RUYWdcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRhZ0NoYW5nZX1cclxuICAgICAgICAgIG5hbWU9XCJUdXRvcmlhbFwiXHJcbiAgICAgICAgICBpc1NlbGVjdGVkPXt0YWcgPT09IFwiVHV0b3JpYWxcIn1cclxuICAgICAgICAvPlxyXG4gICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dWwgcmVmPXtyZWZ9IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTggbWQ6Z2FwLTEyXCI+XHJcbiAgICAgICAge2ZpbHRlcmVkUHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPG1vdGlvbi5saVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICB2YXJpYW50cz17Y2FyZFZhcmlhbnRzfVxyXG4gICAgICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXHJcbiAgICAgICAgICAgIGFuaW1hdGU9e2lzSW5WaWV3ID8gXCJhbmltYXRlXCIgOiBcImluaXRpYWxcIn1cclxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zLCBkZWxheTogaW5kZXggKiAwLjQgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFByb2plY3RDYXJkXHJcbiAgICAgICAgICAgICAga2V5PXtwcm9qZWN0LmlkfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtwcm9qZWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9qZWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIGltZ1VybD17cHJvamVjdC5pbWFnZX1cclxuICAgICAgICAgICAgICBnaXRVcmw9e3Byb2plY3QuZ2l0VXJsfVxyXG4gICAgICAgICAgICAgIHByZXZpZXdVcmw9e3Byb2plY3QucHJldmlld1VybH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbW90aW9uLmxpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1NlY3Rpb247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiUHJvamVjdENhcmQiLCJQcm9qZWN0VGFnIiwibW90aW9uIiwidXNlSW5WaWV3IiwicHJvamVjdHNEYXRhIiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWciLCJnaXRVcmwiLCJwcmV2aWV3VXJsIiwiUHJvamVjdHNTZWN0aW9uIiwic2V0VGFnIiwicmVmIiwiaXNJblZpZXciLCJvbmNlIiwiaGFuZGxlVGFnQ2hhbmdlIiwibmV3VGFnIiwiZmlsdGVyZWRQcm9qZWN0cyIsImZpbHRlciIsInByb2plY3QiLCJpbmNsdWRlcyIsImNhcmRWYXJpYW50cyIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJzZWN0aW9uIiwiaDIiLCJjbGFzc05hbWUiLCJkaXYiLCJvbkNsaWNrIiwibmFtZSIsImlzU2VsZWN0ZWQiLCJ1bCIsIm1hcCIsImluZGV4IiwibGkiLCJ2YXJpYW50cyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5IiwiaW1nVXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ProjectsSection.jsx\n"));

/***/ })

});