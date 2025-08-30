(() => { // webpackBootstrap
"use strict";
var __webpack_modules__ = ({
"./src/browser/dashboard/css/style.css": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1756578795525
        var cssReload = (__webpack_require__("./node_modules/.pnpm/@rspack+core@1.3.12_@swc+helpers@0.5.17/node_modules/@rspack/core/dist/cssExtractHmr.js")/* .cssReload */.cssReload)(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

}),
"./src/browser/dashboard/components/DashboardThemeProvider.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DashboardThemeProvider: () => (DashboardThemeProvider)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js");
/* ESM import */var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/.pnpm/@mui+material@5.13.4_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.0.37_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/createTheme.js");
/* ESM import */var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/.pnpm/@mui+material@5.13.4_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.0.37_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/ThemeProvider.js");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.4.3_react-refresh@0.17.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


const DashboardThemeProvider = (param)=>{
    let { children } = param;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"])({
        palette: {
            mode: 'dark'
        }
    });
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
        theme: theme,
        children: children
    }, void 0, false, {
        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\components\\DashboardThemeProvider.tsx",
        lineNumber: 15,
        columnNumber: 10
    }, undefined);
};
_c = DashboardThemeProvider;
var _c;
$RefreshReg$(_c, "DashboardThemeProvider");

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),
"./src/browser/dashboard/example.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js");
/* ESM import */var _mui_material_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/.pnpm/@mui+material@5.13.4_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.0.37_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Button/Button.js");
/* ESM import */var _nodecg_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/.pnpm/@nodecg+react-hooks@1.0.3_@types+express@5.0.3_reflect-metadata@0.2.2_typescript@5.6.2/node_modules/@nodecg/react-hooks/esm/index.js");
/* ESM import */var _components_DashboardThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/browser/dashboard/components/DashboardThemeProvider.tsx");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* ESM import */var react_countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/.pnpm/react-countdown@2.3.6_react-dom@18.2.0_react@18.2.0/node_modules/react-countdown/dist/index.es.js");
/* ESM import */var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/.pnpm/framer-motion@12.23.12_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs");
/* ESM import */var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/.pnpm/framer-motion@12.23.12_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs");
/* ESM import */var _render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/browser/render.ts");
/* ESM import */var _css_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/browser/dashboard/css/style.css");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.4.3_react-refresh@0.17.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();








const MOONSHOT_CORE_DARK = '#040328';
const MOONSHOT_CORE_PINK = '#D50078';
const MOONSHOT_CORE_YELLOW = '#FFEE83';
const MOONSHOT_EXTRA_DARK_BLUE = '#1B1971';
const MOONSHOT_EXTRA_BLUE = '#467BF8';
const MOONSHOT_EXTRA_LIGHT_BLUE = '#A8BDF0';
const MOONSHOT_EXTRA_BURGUNDY = '#990066';
const MOONSHOT_EXTRA_PINK = '#FCACC7';
const MOONSHOT_EXTRA_ORANGE = '#E68600';
const MOONSHOT_EXTRA_GOLD = '#FFC022';
const initRowItem = {
    opacity: 0,
    y: 16,
    scale: 0.98,
    filter: 'blur(4px)',
    boxShadow: `0 0 0 0 transparent`
};
const animateRowItem = {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    boxShadow: `0 0 0 0 transparent`
};
const exitRowItem = {
    opacity: 0,
    y: -16,
    scale: 0.98,
    filter: 'blur(4px)',
    boxShadow: `0 0 0 0 transparent`
};
const transitionRowItem = {
    duration: 0.5,
    ease: "easeOut"
};
const App = ()=>{
    _s();
    const [queuedDonations, _] = (0,_nodecg_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useReplicant)('queueddonations');
    const [dispensing, setDispensing] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(undefined);
    const [nondispensing, setNondispensing] = react__WEBPACK_IMPORTED_MODULE_3___default().useState([]);
    const [twitchSubs, setTwitchSubs] = (0,_nodecg_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useReplicant)("twitchsubs");
    const [manualDonoName, setManualDonoName] = react__WEBPACK_IMPORTED_MODULE_3___default().useState("");
    const [manualDonoAmount, setManualDonoAmount] = react__WEBPACK_IMPORTED_MODULE_3___default().useState("");
    const [overriddenTotal, setOverriddenTotal] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(0);
    const [overriddenTotalOut, setOverriddenTotalOut] = (0,_nodecg_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useReplicant)("overriddentotal");
    react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(()=>{
        if (queuedDonations == undefined || queuedDonations.length == 0) {
            setDispensing(undefined);
            setNondispensing([]);
            return;
        }
        setDispensing(queuedDonations[0]);
        setNondispensing(queuedDonations.slice(1));
    }, [
        queuedDonations
    ]);
    const dispensingCountdown = react__WEBPACK_IMPORTED_MODULE_3___default().useMemo(()=>{
        if (dispensing == undefined) {
            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);
        }
        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_countdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
            date: Date.now() + donationToSeconds(dispensing.amountDisplay) * 1000,
            intervalDelay: 0,
            precision: 2,
            renderer: (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: [
                        (Math.floor(props.total) / 1000).toFixed(2),
                        "s"
                    ]
                }, void 0, true, {
                    fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                    lineNumber: 82,
                    columnNumber: 28
                }, void 0)
        }, void 0, false, {
            fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
            lineNumber: 78,
            columnNumber: 12
        }, undefined);
    }, [
        dispensing === null || dispensing === void 0 ? void 0 : dispensing.id
    ]);
    const manualEntry = ()=>{
        let numAmount = parseFloat(manualDonoAmount);
        if (isNaN(numAmount)) {
            numAmount = 0;
        }
        const manualDono = {
            id: String(Math.floor(Math.random() * 100000)),
            donor_name: manualDonoName,
            amountDisplay: numAmount
        };
        nodecg.sendMessage("manualdono", manualDono);
        setManualDonoName("");
        setManualDonoAmount("");
    };
    const manualTotal = ()=>{
        setOverriddenTotalOut(overriddenTotal);
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DashboardThemeProvider__WEBPACK_IMPORTED_MODULE_2__.DashboardThemeProvider, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                    backgroundColor: MOONSHOT_CORE_DARK,
                    width: "100%",
                    maxWidth: "400px",
                    minHeight: "200px",
                    padding: "14px",
                    borderRadius: "10px",
                    border: `solid 3px ${MOONSHOT_CORE_PINK}`,
                    color: MOONSHOT_CORE_PINK,
                    fontFamily: "Exo2",
                    marginBottom: 20
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        style: {
                            width: "100%",
                            borderBottom: `solid 3px ${MOONSHOT_CORE_PINK}`,
                            fontWeight: 600
                        },
                        children: "Twitch Subs"
                    }, void 0, false, {
                        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                        lineNumber: 122,
                        columnNumber: 7
                    }, undefined),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            maxHeight: "400px",
                            overflowY: "hidden"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.AnimatePresence, {
                            children: twitchSubs === null || twitchSubs === void 0 ? void 0 : twitchSubs.map((sub, idx)=>{
                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
                                    initial: {
                                        height: 0,
                                        opacity: 0
                                    },
                                    animate: {
                                        height: 'auto',
                                        opacity: 1
                                    },
                                    exit: {
                                        height: 0,
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0.2,
                                        ease: 'easeOut'
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
                                        style: {
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "flex-end",
                                            gap: "10px",
                                            width: "100%",
                                            maxWidth: "400px",
                                            backgroundColor: idx % 2 == 0 ? "inherit" : '#040348'
                                        },
                                        initial: initRowItem,
                                        animate: {
                                            ...animateRowItem
                                        },
                                        exit: exitRowItem,
                                        transition: transitionRowItem,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                style: {
                                                    textOverflow: "ellipsis",
                                                    overflowX: "hidden",
                                                    whiteSpace: "nowrap",
                                                    flexGrow: 1
                                                },
                                                children: sub.user_name
                                            }, void 0, false, {
                                                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                                lineNumber: 153,
                                                columnNumber: 11
                                            }, undefined),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                                style: {
                                                    minWidth: "80px",
                                                    width: "80px",
                                                    height: "80%",
                                                    flex: "0 0 80px",
                                                    backgroundColor: "red",
                                                    color: "white"
                                                },
                                                onClick: ()=>setTwitchSubs(twitchSubs === null || twitchSubs === void 0 ? void 0 : twitchSubs.filter((arbSub)=>arbSub.user_id != sub.user_id)),
                                                children: "\xd7"
                                            }, void 0, false, {
                                                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                                lineNumber: 159,
                                                columnNumber: 11
                                            }, undefined)
                                        ]
                                    }, `twitch-sub-row-${sub.user_id}`, true, {
                                        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                        lineNumber: 139,
                                        columnNumber: 11
                                    }, undefined)
                                }, `twitch-sub-hbox-${sub.user_id}`, false, {
                                    fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                    lineNumber: 133,
                                    columnNumber: 18
                                }, undefined);
                            })
                        }, void 0, false, {
                            fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                            lineNumber: 130,
                            columnNumber: 9
                        }, undefined)
                    }, void 0, false, {
                        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                        lineNumber: 123,
                        columnNumber: 7
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                    backgroundColor: MOONSHOT_CORE_DARK,
                    width: "100%",
                    maxWidth: "400px",
                    minHeight: "200px",
                    maxHeight: "600px",
                    overflowY: "hidden",
                    padding: "14px",
                    borderRadius: "10px",
                    border: `solid 3px ${MOONSHOT_CORE_YELLOW}`,
                    fontFamily: "Exo2"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        style: {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            fontWeight: 600,
                            gap: "10px",
                            borderBottom: `solid 3px ${MOONSHOT_CORE_YELLOW}`,
                            marginBottom: "10px",
                            color: MOONSHOT_CORE_YELLOW
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                style: {
                                    flex: "1 1 auto"
                                },
                                children: "Donor"
                            }, void 0, false, {
                                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                lineNumber: 198,
                                columnNumber: 9
                            }, undefined),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                style: {
                                    width: "80px",
                                    minWidth: "80px",
                                    flex: "0 0 80px"
                                },
                                children: "Amount"
                            }, void 0, false, {
                                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                lineNumber: 202,
                                columnNumber: 9
                            }, undefined),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                style: {
                                    width: "80px",
                                    minWidth: "80px",
                                    flex: "0 0 80px"
                                },
                                children: "Time"
                            }, void 0, false, {
                                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                lineNumber: 207,
                                columnNumber: 9
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                        lineNumber: 188,
                        columnNumber: 7
                    }, undefined),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.AnimatePresence, {
                            children: [
                                dispensing && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
                                    initial: {
                                        height: 0,
                                        opacity: 0
                                    },
                                    animate: {
                                        height: 'auto',
                                        opacity: 1
                                    },
                                    exit: {
                                        height: 0,
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0.7,
                                        ease: 'easeOut'
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
                                        style: {
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "flex-end",
                                            gap: "10px",
                                            width: "100%",
                                            maxWidth: "400px",
                                            borderRadius: "7px",
                                            padding: "2px",
                                            transformOrigin: "center left"
                                        },
                                        initial: initRowItem,
                                        animate: {
                                            ...animateRowItem,
                                            boxShadow: `0 0 0 3px ${MOONSHOT_CORE_PINK}`,
                                            fontSize: "22px",
                                            fontWeight: 600,
                                            backgroundColor: MOONSHOT_EXTRA_DARK_BLUE,
                                            color: MOONSHOT_EXTRA_GOLD
                                        },
                                        exit: exitRowItem,
                                        transition: transitionRowItem,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                style: {
                                                    textOverflow: "ellipsis",
                                                    overflowX: "hidden",
                                                    whiteSpace: "nowrap",
                                                    flexGrow: 1
                                                },
                                                children: dispensing.donor_name
                                            }, void 0, false, {
                                                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                                lineNumber: 242,
                                                columnNumber: 11
                                            }, undefined),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                style: {
                                                    minWidth: "80px",
                                                    width: "80px",
                                                    flex: "0 0 80px"
                                                },
                                                children: [
                                                    "$",
                                                    dispensing.amountDisplay.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                                lineNumber: 248,
                                                columnNumber: 11
                                            }, undefined),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                style: {
                                                    minWidth: "80px",
                                                    width: "80px",
                                                    flex: "0 0 80px",
                                                    fontVariantNumeric: "tabular-nums"
                                                },
                                                children: dispensingCountdown
                                            }, void 0, false, {
                                                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                                lineNumber: 253,
                                                columnNumber: 11
                                            }, undefined)
                                        ]
                                    }, `donation-row-${dispensing.id}`, true, {
                                        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                        lineNumber: 226,
                                        columnNumber: 11
                                    }, undefined)
                                }, `donation-row-hbox-${dispensing.id}`, false, {
                                    fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                    lineNumber: 220,
                                    columnNumber: 25
                                }, undefined),
                                nondispensing === null || nondispensing === void 0 ? void 0 : nondispensing.map((donation, idx)=>{
                                    const time = Math.floor(donationToSeconds(donation.amountDisplay) * 100) / 100;
                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
                                        initial: {
                                            height: 0,
                                            opacity: 0
                                        },
                                        animate: {
                                            height: 'auto',
                                            opacity: 1
                                        },
                                        exit: {
                                            height: 0,
                                            opacity: 0
                                        },
                                        transition: {
                                            duration: 0.2,
                                            ease: 'easeOut'
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
                                            style: {
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "flex-end",
                                                gap: "10px",
                                                width: "100%",
                                                maxWidth: "400px",
                                                backgroundColor: idx % 2 == 0 ? "inherit" : '#040348'
                                            },
                                            initial: initRowItem,
                                            animate: {
                                                ...animateRowItem
                                            },
                                            exit: exitRowItem,
                                            transition: transitionRowItem,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                    style: {
                                                        textOverflow: "ellipsis",
                                                        overflowX: "hidden",
                                                        whiteSpace: "nowrap",
                                                        flexGrow: 1
                                                    },
                                                    children: donation.donor_name
                                                }, void 0, false, {
                                                    fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 11
                                                }, undefined),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                    style: {
                                                        minWidth: "80px",
                                                        width: "80px",
                                                        flex: "0 0 80px"
                                                    },
                                                    children: [
                                                        "$",
                                                        donation.amountDisplay.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 11
                                                }, undefined),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                    style: {
                                                        minWidth: "80px",
                                                        width: "80px",
                                                        flex: "0 0 80px",
                                                        fontVariantNumeric: "tabular-nums"
                                                    },
                                                    children: [
                                                        time.toFixed(2),
                                                        "s"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 11
                                                }, undefined)
                                            ]
                                        }, `donation-row-${donation.id}`, true, {
                                            fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                            lineNumber: 272,
                                            columnNumber: 11
                                        }, undefined)
                                    }, `donation-row-hbox-${donation.id}`, false, {
                                        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                        lineNumber: 266,
                                        columnNumber: 18
                                    }, undefined);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                            lineNumber: 218,
                            columnNumber: 9
                        }, undefined)
                    }, void 0, false, {
                        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                        lineNumber: 213,
                        columnNumber: 7
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "20px"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                        children: "Manual Donation Input"
                    }, void 0, false, {
                        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                        lineNumber: 313,
                        columnNumber: 7
                    }, undefined),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                children: "Name:\xa0"
                            }, void 0, false, {
                                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                lineNumber: 314,
                                columnNumber: 14
                            }, undefined),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                                style: {
                                    width: 200
                                },
                                value: manualDonoName,
                                onChange: (e)=>setManualDonoName(e.currentTarget.value)
                            }, void 0, false, {
                                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                lineNumber: 314,
                                columnNumber: 38
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                        lineNumber: 314,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                children: "Amount:\xa0"
                            }, void 0, false, {
                                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                lineNumber: 315,
                                columnNumber: 14
                            }, undefined),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                                style: {
                                    width: 200
                                },
                                value: manualDonoAmount,
                                onChange: (e)=>setManualDonoAmount(e.currentTarget.value)
                            }, void 0, false, {
                                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                lineNumber: 315,
                                columnNumber: 40
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                        type: "submit",
                        style: {
                            width: 100
                        },
                        onClick: ()=>manualEntry(),
                        children: "Submit"
                    }, void 0, false, {
                        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                        lineNumber: 316,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                lineNumber: 308,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "20px"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                        children: "Manual Total Input"
                    }, void 0, false, {
                        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                        lineNumber: 323,
                        columnNumber: 7
                    }, undefined),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                children: "Total:\xa0"
                            }, void 0, false, {
                                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                lineNumber: 324,
                                columnNumber: 14
                            }, undefined),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                                type: "number",
                                style: {
                                    width: 200
                                },
                                value: overriddenTotal,
                                onChange: (e)=>setOverriddenTotal(Number(e.currentTarget.value))
                            }, void 0, false, {
                                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                lineNumber: 324,
                                columnNumber: 39
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                        lineNumber: 324,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                        type: "submit",
                        style: {
                            width: 100
                        },
                        onClick: ()=>manualTotal(),
                        children: "Submit"
                    }, void 0, false, {
                        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                lineNumber: 318,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, undefined);
};
_s(App, "t+ue4WrYibK8xqvAGgMp6Y181Qk=", false, function() {
    return [
        _nodecg_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useReplicant,
        _nodecg_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useReplicant,
        _nodecg_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useReplicant
    ];
});
_c = App;
function donationToSeconds(donationAmount) {
    const WATER_RATE = nodecg.bundleConfig["MOONDUNK_RATE"] ?? 1; // estimated gallons_per_second
    const BUCKET_VOLUME = nodecg.bundleConfig["MOONDUNK_VOLUME"] ?? 1; // estemated gallons
    const DOLLAR_GOAL = nodecg.bundleConfig["MOONDUNK_GOAL"] ?? 1; // estimated USD per dunk
    const TIME_PER_DOLLAR = BUCKET_VOLUME / (WATER_RATE * DOLLAR_GOAL);
    return donationAmount * TIME_PER_DOLLAR;
}
(0,_render__WEBPACK_IMPORTED_MODULE_5__.render)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, {}, void 0, false, {
    fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
    lineNumber: 340,
    columnNumber: 8
}, undefined));
var _c;
$RefreshReg$(_c, "App");

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),
"./src/browser/render.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  render: () => (render)
});
/* ESM import */var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.4.3_react-refresh@0.17.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

const render = (app)=>{
    const container = document.getElementById('root');
    if (container) {
        (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(container).render(app);
    } else {
        throw new Error('#root element not found');
    }
};

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
if (cachedModule.error !== undefined) throw cachedModule.error;
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
id: moduleId,
loaded: false,
exports: {}
});
// Execute the module function
try {

var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
module = execOptions.module;
if (!execOptions.factory) {
  console.error("undefined factory", moduleId)
}
execOptions.factory.call(module.exports, module, module.exports, execOptions.require);

} catch (e) {
module.error = e;
throw e;
}
// Flag the module as loaded
module.loaded = true;
// Return the exports of the module
return module.exports;

}

// expose the modules object (__webpack_modules__)
__webpack_require__.m = __webpack_modules__;

// expose the module cache
__webpack_require__.c = __webpack_module_cache__;

// expose the module execution interceptor
__webpack_require__.i = [];

/************************************************************************/
// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = (module) => {
	var getter = module && module.__esModule ?
		() => (module['default']) :
		() => (module);
	__webpack_require__.d(getter, { a: getter });
	return getter;
};

})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, definition) => {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/get mini-css chunk filename
(() => {
// This function allow to reference chunks
__webpack_require__.miniCssF = (chunkId) => {
  // return url for filenames not based on template
  
  // return url for filenames based on template
  return "" + chunkId + ".css"
}
})();
// webpack/runtime/get_chunk_update_filename
(() => {
__webpack_require__.hu = (chunkId) => ('' + chunkId + '.' + __webpack_require__.h() + '.hot-update.js')
})();
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = () => ("a72e9cd045dfb9ac")
})();
// webpack/runtime/get_main_filename/update manifest
(() => {
__webpack_require__.hmrF = function () {
            return "example." + __webpack_require__.h() + ".hot-update.json";
         };
        
})();
// webpack/runtime/global
(() => {
__webpack_require__.g = (() => {
	if (typeof globalThis === 'object') return globalThis;
	try {
		return this || new Function('return this')();
	} catch (e) {
		if (typeof window === 'object') return window;
	}
})();
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/hot_module_replacement
(() => {
var currentModuleData = {};
var installedModules = __webpack_require__.c;

// module and require creation
var currentChildModule;
var currentParents = [];

// status
var registeredStatusHandlers = [];
var currentStatus = "idle";

// while downloading
var blockingPromises = 0;
var blockingPromisesWaiting = [];

// The update info
var currentUpdateApplyHandlers;
var queuedInvalidatedModules;

__webpack_require__.hmrD = currentModuleData;
__webpack_require__.i.push(function (options) {
	var module = options.module;
	var require = createRequire(options.require, options.id);
	module.hot = createModuleHotObject(options.id, module);
	module.parents = currentParents;
	module.children = [];
	currentParents = [];
	options.require = require;
});

__webpack_require__.hmrC = {};
__webpack_require__.hmrI = {};

function createRequire(require, moduleId) {
	var me = installedModules[moduleId];
	if (!me) return require;
	var fn = function (request) {
		if (me.hot.active) {
			if (installedModules[request]) {
				var parents = installedModules[request].parents;
				if (parents.indexOf(moduleId) === -1) {
					parents.push(moduleId);
				}
			} else {
				currentParents = [moduleId];
				currentChildModule = request;
			}
			if (me.children.indexOf(request) === -1) {
				me.children.push(request);
			}
		} else {
			console.warn(
				"[HMR] unexpected require(" +
				request +
				") from disposed module " +
				moduleId
			);
			currentParents = [];
		}
		return require(request);
	};
	var createPropertyDescriptor = function (name) {
		return {
			configurable: true,
			enumerable: true,
			get: function () {
				return require[name];
			},
			set: function (value) {
				require[name] = value;
			}
		};
	};
	for (var name in require) {
		if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
			Object.defineProperty(fn, name, createPropertyDescriptor(name));
		}
	}

	fn.e = function (chunkId, fetchPriority) {
		return trackBlockingPromise(require.e(chunkId, fetchPriority));
	};

	return fn;
}

function createModuleHotObject(moduleId, me) {
	var _main = currentChildModule !== moduleId;
	var hot = {
		_acceptedDependencies: {},
		_acceptedErrorHandlers: {},
		_declinedDependencies: {},
		_selfAccepted: false,
		_selfDeclined: false,
		_selfInvalidated: false,
		_disposeHandlers: [],
		_main: _main,
		_requireSelf: function () {
			currentParents = me.parents.slice();
			currentChildModule = _main ? undefined : moduleId;
			__webpack_require__(moduleId);
		},
		active: true,
		accept: function (dep, callback, errorHandler) {
			if (dep === undefined) hot._selfAccepted = true;
			else if (typeof dep === "function") hot._selfAccepted = dep;
			else if (typeof dep === "object" && dep !== null) {
				for (var i = 0; i < dep.length; i++) {
					hot._acceptedDependencies[dep[i]] = callback || function () { };
					hot._acceptedErrorHandlers[dep[i]] = errorHandler;
				}
			} else {
				hot._acceptedDependencies[dep] = callback || function () { };
				hot._acceptedErrorHandlers[dep] = errorHandler;
			}
		},
		decline: function (dep) {
			if (dep === undefined) hot._selfDeclined = true;
			else if (typeof dep === "object" && dep !== null)
				for (var i = 0; i < dep.length; i++)
					hot._declinedDependencies[dep[i]] = true;
			else hot._declinedDependencies[dep] = true;
		},
		dispose: function (callback) {
			hot._disposeHandlers.push(callback);
		},
		addDisposeHandler: function (callback) {
			hot._disposeHandlers.push(callback);
		},
		removeDisposeHandler: function (callback) {
			var idx = hot._disposeHandlers.indexOf(callback);
			if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
		},
		invalidate: function () {
			this._selfInvalidated = true;
			switch (currentStatus) {
				case "idle":
					currentUpdateApplyHandlers = [];
					Object.keys(__webpack_require__.hmrI).forEach(function (key) {
						__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
					});
					setStatus("ready");
					break;
				case "ready":
					Object.keys(__webpack_require__.hmrI).forEach(function (key) {
						__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
					});
					break;
				case "prepare":
				case "check":
				case "dispose":
				case "apply":
					(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
						moduleId
					);
					break;
				default:
					break;
			}
		},
		check: hotCheck,
		apply: hotApply,
		status: function (l) {
			if (!l) return currentStatus;
			registeredStatusHandlers.push(l);
		},
		addStatusHandler: function (l) {
			registeredStatusHandlers.push(l);
		},
		removeStatusHandler: function (l) {
			var idx = registeredStatusHandlers.indexOf(l);
			if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
		},
		data: currentModuleData[moduleId]
	};
	currentChildModule = undefined;
	return hot;
}

function setStatus(newStatus) {
	currentStatus = newStatus; 
	var results = [];
	for (var i = 0; i < registeredStatusHandlers.length; i++)
		results[i] = registeredStatusHandlers[i].call(null, newStatus);

	return Promise.all(results).then(function () { });
}

function unblock() {
	if (--blockingPromises === 0) {
		setStatus("ready").then(function () {
			if (blockingPromises === 0) {
				var list = blockingPromisesWaiting;
				blockingPromisesWaiting = [];
				for (var i = 0; i < list.length; i++) {
					list[i]();
				}
			}
		});
	}
}

function trackBlockingPromise(promise) {
	switch (currentStatus) {
		case "ready":
			setStatus("prepare");
		case "prepare":
			blockingPromises++;
			promise.then(unblock, unblock);
			return promise;
		default:
			return promise;
	}
}

function waitForBlockingPromises(fn) {
	if (blockingPromises === 0) return fn();
	return new Promise(function (resolve) {
		blockingPromisesWaiting.push(function () {
			resolve(fn());
		});
	});
}

function hotCheck(applyOnUpdate) {
	if (currentStatus !== "idle") {
		throw new Error("check() is only allowed in idle status");
	} 
	return setStatus("check")
		.then(__webpack_require__.hmrM)
		.then(function (update) {
			if (!update) {
				return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
					function () {
						return null;
					}
				);
			}

			return setStatus("prepare").then(function () {
				var updatedModules = [];
				currentUpdateApplyHandlers = [];

				return Promise.all(
					Object.keys(__webpack_require__.hmrC).reduce(function (
						promises,
						key
					) {
						__webpack_require__.hmrC[key](
							update.c,
							update.r,
							update.m,
							promises,
							currentUpdateApplyHandlers,
							updatedModules
						);
						return promises;
					},
						[])
				).then(function () {
					return waitForBlockingPromises(function () {
						if (applyOnUpdate) {
							return internalApply(applyOnUpdate);
						}
						return setStatus("ready").then(function () {
							return updatedModules;
						});
					});
				});
			});
		});
}

function hotApply(options) {
	if (currentStatus !== "ready") {
		return Promise.resolve().then(function () {
			throw new Error(
				"apply() is only allowed in ready status (state: " + currentStatus + ")"
			);
		});
	}
	return internalApply(options);
}

function internalApply(options) {
	options = options || {};
	applyInvalidatedModules();
	var results = currentUpdateApplyHandlers.map(function (handler) {
		return handler(options);
	});
	currentUpdateApplyHandlers = undefined;
	var errors = results
		.map(function (r) {
			return r.error;
		})
		.filter(Boolean);

	if (errors.length > 0) {
		return setStatus("abort").then(function () {
			throw errors[0];
		});
	}

	var disposePromise = setStatus("dispose");

	results.forEach(function (result) {
		if (result.dispose) result.dispose();
	});

	var applyPromise = setStatus("apply");

	var error;
	var reportError = function (err) {
		if (!error) error = err;
	};

	var outdatedModules = [];
	results.forEach(function (result) {
		if (result.apply) {
			var modules = result.apply(reportError);
			if (modules) {
				for (var i = 0; i < modules.length; i++) {
					outdatedModules.push(modules[i]);
				}
			}
		}
	});

	return Promise.all([disposePromise, applyPromise]).then(function () {
		if (error) {
			return setStatus("fail").then(function () {
				throw error;
			});
		}

		if (queuedInvalidatedModules) {
			return internalApply(options).then(function (list) {
				outdatedModules.forEach(function (moduleId) {
					if (list.indexOf(moduleId) < 0) list.push(moduleId);
				});
				return list;
			});
		}

		return setStatus("idle").then(function () {
			return outdatedModules;
		});
	});
}

function applyInvalidatedModules() {
	if (queuedInvalidatedModules) {
		if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
		Object.keys(__webpack_require__.hmrI).forEach(function (key) {
			queuedInvalidatedModules.forEach(function (moduleId) {
				__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
			});
		});
		queuedInvalidatedModules = undefined;
		return true;
	}
}

})();
// webpack/runtime/load_script
(() => {
var inProgress = {};

var dataWebpackPrefix = "moondunk2025:";
// loadScript function to load a script via script tag
__webpack_require__.l = function (url, done, key, chunkId) {
	if (inProgress[url]) {
		inProgress[url].push(done);
		return;
	}
	var script, needAttach;
	if (key !== undefined) {
		var scripts = document.getElementsByTagName("script");
		for (var i = 0; i < scripts.length; i++) {
			var s = scripts[i];
			if (s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) {
				script = s;
				break;
			}
		}
	}
	if (!script) {
		needAttach = true;
		
    script = document.createElement('script');
    
		script.charset = 'utf-8';
		script.timeout = 120;
		if (__webpack_require__.nc) {
			script.setAttribute("nonce", __webpack_require__.nc);
		}
		script.setAttribute("data-webpack", dataWebpackPrefix + key);
		
		script.src = url;
		
    
	}
	inProgress[url] = [done];
	var onScriptComplete = function (prev, event) {
		script.onerror = script.onload = null;
		clearTimeout(timeout);
		var doneFns = inProgress[url];
		delete inProgress[url];
		script.parentNode && script.parentNode.removeChild(script);
		doneFns &&
			doneFns.forEach(function (fn) {
				return fn(event);
			});
		if (prev) return prev(event);
	};
	var timeout = setTimeout(
		onScriptComplete.bind(null, undefined, {
			type: 'timeout',
			target: script
		}),
		120000
	);
	script.onerror = onScriptComplete.bind(null, script.onerror);
	script.onload = onScriptComplete.bind(null, script.onload);
	needAttach && document.head.appendChild(script);
};

})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = (exports) => {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
})();
// webpack/runtime/node_module_decorator
(() => {
__webpack_require__.nmd = (module) => {
  module.paths = [];
  if (!module.children) module.children = [];
  return module;
};
})();
// webpack/runtime/on_chunk_loaded
(() => {
var deferred = [];
__webpack_require__.O = (result, chunkIds, fn, priority) => {
	if (chunkIds) {
		priority = priority || 0;
		for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
			deferred[i] = deferred[i - 1];
		deferred[i] = [chunkIds, fn, priority];
		return;
	}
	var notFulfilled = Infinity;
	for (var i = 0; i < deferred.length; i++) {
		var [chunkIds, fn, priority] = deferred[i];
		var fulfilled = true;
		for (var j = 0; j < chunkIds.length; j++) {
			if (
				(priority & (1 === 0) || notFulfilled >= priority) &&
				Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))
			) {
				chunkIds.splice(j--, 1);
			} else {
				fulfilled = false;
				if (priority < notFulfilled) notFulfilled = priority;
			}
		}
		if (fulfilled) {
			deferred.splice(i--, 1);
			var r = fn();
			if (r !== undefined) result = r;
		}
	}
	return result;
};

})();
// webpack/runtime/public_path
(() => {
__webpack_require__.p = "/bundles/moondunk2025/dashboard/";
})();
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = () => ("1.3.12")
})();
// webpack/runtime/css loading
(() => {
if (typeof document === "undefined") return;
var createStylesheet = function (
	chunkId, fullhref, oldTag, resolve, reject
) {
	var linkTag = document.createElement("link");
	
	linkTag.rel = "stylesheet";
	linkTag.type="text/css";
	if (__webpack_require__.nc) {
		linkTag.nonce = __webpack_require__.nc;
	}
	var onLinkComplete = function (event) {
		// avoid mem leaks.
		linkTag.onerror = linkTag.onload = null;
		if (event.type === 'load') {
			resolve();
		} else {
			var errorType = event && (event.type === 'load' ? 'missing' : event.type);
			var realHref = event && event.target && event.target.href || fullhref;
			var err = new Error("Loading CSS chunk " + chunkId + " failed.\\n(" + realHref + ")");
			err.code = "CSS_CHUNK_LOAD_FAILED";
			err.type = errorType;
			err.request = realHref;
			if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
			reject(err);
		}
	}

	linkTag.onerror = linkTag.onload = onLinkComplete;
	linkTag.href = fullhref;
	
	if (oldTag) {
  oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
} else {
  document.head.appendChild(linkTag);
}
	return linkTag;
}
var findStylesheet = function (href, fullhref) {
	var existingLinkTags = document.getElementsByTagName("link");
	for (var i = 0; i < existingLinkTags.length; i++) {
		var tag = existingLinkTags[i];
		var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
		if (tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
	}

	var existingStyleTags = document.getElementsByTagName("style");
	for (var i = 0; i < existingStyleTags.length; i++) {
		var tag = existingStyleTags[i];
		var dataHref = tag.getAttribute("data-href");
		if (dataHref === href || dataHref === fullhref) return tag;
	}
}

var loadStylesheet = function (chunkId) {
	return new Promise(function (resolve, reject) {
		var href = __webpack_require__.miniCssF(chunkId);
		var fullhref = __webpack_require__.p + href;
		if (findStylesheet(href, fullhref)) return resolve();
		createStylesheet(chunkId, fullhref, null, resolve, reject);
	})
}

// no chunk loading
var oldTags = [];
var newTags = [];
var applyHandler = function (options) {
	return {
		dispose: function () {
			for (var i = 0; i < oldTags.length; i++) {
				var oldTag = oldTags[i];
				if (oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
			}
			oldTags.length = 0;
		},
		apply: function () {
			for (var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
			newTags.length = 0;
		}
	}
}
__webpack_require__.hmrC.miniCss = function (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) {
	applyHandlers.push(applyHandler);
	chunkIds.forEach(function (chunkId) {
		var href = __webpack_require__.miniCssF(chunkId);
		var fullhref = __webpack_require__.p + href;
		var oldTag = findStylesheet(href, fullhref);
		if (!oldTag) return;
		promises.push(new Promise(function (resolve, reject) {
			var tag = createStylesheet(
				chunkId,
				fullhref,
				oldTag,
				function () {
					tag.as = "style";
					tag.rel = "preload";
					resolve();
				},
				reject
			);
			oldTags.push(oldTag);
			newTags.push(tag);
		}))
	});
}


})();
// webpack/runtime/jsonp_chunk_loading
(() => {

      // object to store loaded and loading chunks
      // undefined = chunk not loaded, null = chunk preloaded/prefetched
      // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
      var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {"example": 0,};
      var currentUpdatedModulesList;
var waitingUpdateResolves = {};
function loadUpdateChunk(chunkId, updatedModulesList) {
	currentUpdatedModulesList = updatedModulesList;
	return new Promise((resolve, reject) => {
		waitingUpdateResolves[chunkId] = resolve;
		// start update chunk loading
		var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
		// create error before stack unwound to get useful stacktrace later
		var error = new Error();
		var loadingEnded = (event) => {
			if (waitingUpdateResolves[chunkId]) {
				waitingUpdateResolves[chunkId] = undefined;
				var errorType =
					event && (event.type === 'load' ? 'missing' : event.type);
				var realSrc = event && event.target && event.target.src;
				error.message =
					'Loading hot update chunk ' +
					chunkId +
					' failed.\n(' +
					errorType +
					': ' +
					realSrc +
					')';
				error.name = 'ChunkLoadError';
				error.type = errorType;
				error.request = realSrc;
				reject(error);
			}
		};
		__webpack_require__.l(url, loadingEnded);
	});
}

self["webpackHotUpdatemoondunk2025"] = (chunkId, moreModules, runtime) => {
	for (var moduleId in moreModules) {
		if (__webpack_require__.o(moreModules, moduleId)) {
			currentUpdate[moduleId] = moreModules[moduleId];
			if (currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
		}
	}
	if (runtime) currentUpdateRuntime.push(runtime);
	if (waitingUpdateResolves[chunkId]) {
		waitingUpdateResolves[chunkId]();
		waitingUpdateResolves[chunkId] = undefined;
	}
};
var currentUpdateChunks;
var currentUpdate;
var currentUpdateRemovedChunks;
var currentUpdateRuntime;
function applyHandler(options) {
	if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
	currentUpdateChunks = undefined;
	function getAffectedModuleEffects(updateModuleId) {
		var outdatedModules = [updateModuleId];
		var outdatedDependencies = {};
		var queue = outdatedModules.map(function (id) {
			return {
				chain: [id],
				id: id
			};
		});
		while (queue.length > 0) {
			var queueItem = queue.pop();
			var moduleId = queueItem.id;
			var chain = queueItem.chain;
			var module = __webpack_require__.c[moduleId];
			if (
				!module ||
				(module.hot._selfAccepted && !module.hot._selfInvalidated)
			) {
				continue;
			}

			if (module.hot._selfDeclined) {
				return {
					type: "self-declined",
					chain: chain,
					moduleId: moduleId
				};
			}

			if (module.hot._main) {
				return {
					type: "unaccepted",
					chain: chain,
					moduleId: moduleId
				};
			}

			for (var i = 0; i < module.parents.length; i++) {
				var parentId = module.parents[i];
				var parent = __webpack_require__.c[parentId];
				if (!parent) {
					continue;
				}
				if (parent.hot._declinedDependencies[moduleId]) {
					return {
						type: "declined",
						chain: chain.concat([parentId]),
						moduleId: moduleId,
						parentId: parentId
					};
				}
				if (outdatedModules.indexOf(parentId) !== -1) {
					continue;
				}
				if (parent.hot._acceptedDependencies[moduleId]) {
					if (!outdatedDependencies[parentId]) {
						outdatedDependencies[parentId] = [];
					}
					addAllToSet(outdatedDependencies[parentId], [moduleId]);
					continue;
				}
				delete outdatedDependencies[parentId];
				outdatedModules.push(parentId);
				queue.push({
					chain: chain.concat([parentId]),
					id: parentId
				});
			}
		}

		return {
			type: "accepted",
			moduleId: updateModuleId,
			outdatedModules: outdatedModules,
			outdatedDependencies: outdatedDependencies
		};
	}

	function addAllToSet(a, b) {
		for (var i = 0; i < b.length; i++) {
			var item = b[i];
			if (a.indexOf(item) === -1) a.push(item);
		}
	}

	var outdatedDependencies = {};
	var outdatedModules = [];
	var appliedUpdate = {};

	var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
		console.warn(
			"[HMR] unexpected require(" + module.id + ") to disposed module"
		);
	};

	for (var moduleId in currentUpdate) {
		if (__webpack_require__.o(currentUpdate, moduleId)) {
			var newModuleFactory = currentUpdate[moduleId];
			var result = newModuleFactory ? getAffectedModuleEffects(moduleId) : {
				type: "disposed",
				moduleId: moduleId
			};
			var abortError = false;
			var doApply = false;
			var doDispose = false;
			var chainInfo = "";
			if (result.chain) {
				chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
			}
			switch (result.type) {
				case "self-declined":
					if (options.onDeclined) options.onDeclined(result);
					if (!options.ignoreDeclined)
						abortError = new Error(
							"Aborted because of self decline: " + result.moduleId + chainInfo
						);
					break;
				case "declined":
					if (options.onDeclined) options.onDeclined(result);
					if (!options.ignoreDeclined)
						abortError = new Error(
							"Aborted because of declined dependency: " +
							result.moduleId +
							" in " +
							result.parentId +
							chainInfo
						);
					break;
				case "unaccepted":
					if (options.onUnaccepted) options.onUnaccepted(result);
					if (!options.ignoreUnaccepted)
						abortError = new Error(
							"Aborted because " + moduleId + " is not accepted" + chainInfo
						);
					break;
				case "accepted":
					if (options.onAccepted) options.onAccepted(result);
					doApply = true;
					break;
				case "disposed":
					if (options.onDisposed) options.onDisposed(result);
					doDispose = true;
					break;
				default:
					throw new Error("Unexception type " + result.type);
			}
			if (abortError) {
				return {
					error: abortError
				};
			}
			if (doApply) {
				appliedUpdate[moduleId] = newModuleFactory;
				addAllToSet(outdatedModules, result.outdatedModules);
				for (moduleId in result.outdatedDependencies) {
					if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
						if (!outdatedDependencies[moduleId])
							outdatedDependencies[moduleId] = [];
						addAllToSet(
							outdatedDependencies[moduleId],
							result.outdatedDependencies[moduleId]
						);
					}
				}
			}
			if (doDispose) {
				addAllToSet(outdatedModules, [result.moduleId]);
				appliedUpdate[moduleId] = warnUnexpectedRequire;
			}
		}
	}
	currentUpdate = undefined;

	var outdatedSelfAcceptedModules = [];
	for (var j = 0; j < outdatedModules.length; j++) {
		var outdatedModuleId = outdatedModules[j];
		var module = __webpack_require__.c[outdatedModuleId];
		if (
			module &&
			(module.hot._selfAccepted || module.hot._main) &&
			// removed self-accepted modules should not be required
			appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
			// when called invalidate self-accepting is not possible
			!module.hot._selfInvalidated
		) {
			outdatedSelfAcceptedModules.push({
				module: outdatedModuleId,
				require: module.hot._requireSelf,
				errorHandler: module.hot._selfAccepted
			});
		}
	} 

	var moduleOutdatedDependencies;
	return {
		dispose: function () {
			currentUpdateRemovedChunks.forEach(function (chunkId) {
				delete installedChunks[chunkId];
			});
			currentUpdateRemovedChunks = undefined;

			var idx;
			var queue = outdatedModules.slice();
			while (queue.length > 0) {
				var moduleId = queue.pop();
				var module = __webpack_require__.c[moduleId];
				if (!module) continue;

				var data = {};

				// Call dispose handlers
				var disposeHandlers = module.hot._disposeHandlers; 
				for (j = 0; j < disposeHandlers.length; j++) {
					disposeHandlers[j].call(null, data);
				}
				__webpack_require__.hmrD[moduleId] = data;

				module.hot.active = false;

				delete __webpack_require__.c[moduleId];

				delete outdatedDependencies[moduleId];

				for (j = 0; j < module.children.length; j++) {
					var child = __webpack_require__.c[module.children[j]];
					if (!child) continue;
					idx = child.parents.indexOf(moduleId);
					if (idx >= 0) {
						child.parents.splice(idx, 1);
					}
				}
			}

			var dependency;
			for (var outdatedModuleId in outdatedDependencies) {
				if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
					module = __webpack_require__.c[outdatedModuleId];
					if (module) {
						moduleOutdatedDependencies = outdatedDependencies[outdatedModuleId];
						for (j = 0; j < moduleOutdatedDependencies.length; j++) {
							dependency = moduleOutdatedDependencies[j];
							idx = module.children.indexOf(dependency);
							if (idx >= 0) module.children.splice(idx, 1);
						}
					}
				}
			}
		},
		apply: function (reportError) {
			// insert new code
			for (var updateModuleId in appliedUpdate) {
				if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
					__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId]; 
				}
			}

			// run new runtime modules
			for (var i = 0; i < currentUpdateRuntime.length; i++) {
				currentUpdateRuntime[i](__webpack_require__);
			}

			// call accept handlers
			for (var outdatedModuleId in outdatedDependencies) {
				if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
					var module = __webpack_require__.c[outdatedModuleId];
					if (module) {
						moduleOutdatedDependencies = outdatedDependencies[outdatedModuleId];
						var callbacks = [];
						var errorHandlers = [];
						var dependenciesForCallbacks = [];
						for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
							var dependency = moduleOutdatedDependencies[j];
							var acceptCallback = module.hot._acceptedDependencies[dependency];
							var errorHandler = module.hot._acceptedErrorHandlers[dependency];
							if (acceptCallback) {
								if (callbacks.indexOf(acceptCallback) !== -1) continue;
								callbacks.push(acceptCallback);
								errorHandlers.push(errorHandler); 
								dependenciesForCallbacks.push(dependency);
							}
						}
						for (var k = 0; k < callbacks.length; k++) {
							try {
								callbacks[k].call(null, moduleOutdatedDependencies);
							} catch (err) {
								if (typeof errorHandlers[k] === "function") {
									try {
										errorHandlers[k](err, {
											moduleId: outdatedModuleId,
											dependencyId: dependenciesForCallbacks[k]
										});
									} catch (err2) {
										if (options.onErrored) {
											options.onErrored({
												type: "accept-error-handler-errored",
												moduleId: outdatedModuleId,
												dependencyId: dependenciesForCallbacks[k],
												error: err2,
												originalError: err
											});
										}
										if (!options.ignoreErrored) {
											reportError(err2);
											reportError(err);
										}
									}
								} else {
									if (options.onErrored) {
										options.onErrored({
											type: "accept-errored",
											moduleId: outdatedModuleId,
											dependencyId: dependenciesForCallbacks[k],
											error: err
										});
									}
									if (!options.ignoreErrored) {
										reportError(err);
									}
								}
							}
						}
					}
				}
			}

			// Load self accepted modules
			for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
				var item = outdatedSelfAcceptedModules[o];
				var moduleId = item.module;
				try {
					item.require(moduleId);
				} catch (err) {
					if (typeof item.errorHandler === "function") {
						try {
							item.errorHandler(err, {
								moduleId: moduleId,
								module: __webpack_require__.c[moduleId]
							});
						} catch (err1) {
							if (options.onErrored) {
								options.onErrored({
									type: "self-accept-error-handler-errored",
									moduleId: moduleId,
									error: err1,
									originalError: err
								});
							}
							if (!options.ignoreErrored) {
								reportError(err1);
								reportError(err);
							}
						}
					} else {
						if (options.onErrored) {
							options.onErrored({
								type: "self-accept-errored",
								moduleId: moduleId,
								error: err
							});
						}
						if (!options.ignoreErrored) {
							reportError(err);
						}
					}
				}
			}

			return outdatedModules;
		}
	};
}

__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
	if (!currentUpdate) {
		currentUpdate = {};
		currentUpdateRuntime = [];
		currentUpdateRemovedChunks = [];
		applyHandlers.push(applyHandler);
	}
	if (!__webpack_require__.o(currentUpdate, moduleId)) {
		currentUpdate[moduleId] = __webpack_require__.m[moduleId];
	}
};

__webpack_require__.hmrC.jsonp = function (
	chunkIds,
	removedChunks,
	removedModules,
	promises,
	applyHandlers,
	updatedModulesList
) {
	applyHandlers.push(applyHandler);
	currentUpdateChunks = {};
	currentUpdateRemovedChunks = removedChunks;
	currentUpdate = removedModules.reduce(function (obj, key) {
		obj[key] = false;
		return obj;
	}, {});
	currentUpdateRuntime = [];
	chunkIds.forEach(function (chunkId) {
		if (
			__webpack_require__.o(installedChunks, chunkId) &&
			installedChunks[chunkId] !== undefined
		) {
			promises.push(loadUpdateChunk(chunkId, updatedModulesList));
			currentUpdateChunks[chunkId] = true;
		} else {
			currentUpdateChunks[chunkId] = false;
		}
	});
	if (__webpack_require__.f) {
		__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
			if (
				currentUpdateChunks &&
				__webpack_require__.o(currentUpdateChunks, chunkId) &&
				!currentUpdateChunks[chunkId]
			) {
				promises.push(loadUpdateChunk(chunkId));
				currentUpdateChunks[chunkId] = true;
			}
		};
	}
};
__webpack_require__.hmrM = () => {
	if (typeof fetch === "undefined")
		throw new Error("No browser support: need fetch API");
	return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(
		(response) => {
			if (response.status === 404) return; // no update available
			if (!response.ok)
				throw new Error(
					"Failed to fetch update manifest " + response.statusText
				);
			return response.json();
		}
	);
};
__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
// install a JSONP callback for chunk loading
var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
	var [chunkIds, moreModules, runtime] = data;
	// add "moreModules" to the modules object,
	// then flag all "chunkIds" as loaded and fire callback
	var moduleId, chunkId, i = 0;
	if (chunkIds.some((id) => (installedChunks[id] !== 0))) {
		for (moduleId in moreModules) {
			if (__webpack_require__.o(moreModules, moduleId)) {
				__webpack_require__.m[moduleId] = moreModules[moduleId];
			}
		}
		if (runtime) var result = runtime(__webpack_require__);
	}
	if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
	for (; i < chunkIds.length; i++) {
		chunkId = chunkIds[i];
		if (
			__webpack_require__.o(installedChunks, chunkId) &&
			installedChunks[chunkId]
		) {
			installedChunks[chunkId][0]();
		}
		installedChunks[chunkId] = 0;
	}
	return __webpack_require__.O(result);
};

var chunkLoadingGlobal = self["webpackChunkmoondunk2025"] = self["webpackChunkmoondunk2025"] || [];
chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));

})();
/************************************************************************/
// module cache are used so entry inlining is disabled
// startup
// Load entry module and return exports
__webpack_require__.O(undefined, ["lib-react", "vendors-node_modules_pnpm_mui_material_5_13_4__emotion_react_11_11_1__emotion_styled_11_11_0_-37c72e"], function() { return __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.4.3_react-refresh@0.17.0/node_modules/@rspack/plugin-react-refresh/client/reactRefreshEntry.js") });
__webpack_require__.O(undefined, ["lib-react", "vendors-node_modules_pnpm_mui_material_5_13_4__emotion_react_11_11_1__emotion_styled_11_11_0_-37c72e"], function() { return __webpack_require__("./node_modules/.pnpm/@rsbuild+core@1.3.22/node_modules/@rsbuild/core/dist/client/hmr.js") });
__webpack_require__.O(undefined, ["lib-react", "vendors-node_modules_pnpm_mui_material_5_13_4__emotion_react_11_11_1__emotion_styled_11_11_0_-37c72e"], function() { return __webpack_require__("./node_modules/.pnpm/@rsbuild+core@1.3.22/node_modules/@rsbuild/core/dist/client/overlay.js") });
var __webpack_exports__ = __webpack_require__.O(undefined, ["lib-react", "vendors-node_modules_pnpm_mui_material_5_13_4__emotion_react_11_11_1__emotion_styled_11_11_0_-37c72e"], function() { return __webpack_require__("./src/browser/dashboard/example.tsx") });
__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})()
;
//# sourceMappingURL=example.js.map