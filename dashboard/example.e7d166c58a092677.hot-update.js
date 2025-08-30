"use strict";
self["webpackHotUpdatemoondunk2025"]("example", {
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
                    lineNumber: 81,
                    columnNumber: 28
                }, void 0)
        }, void 0, false, {
            fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
            lineNumber: 77,
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
                        lineNumber: 117,
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
                                                lineNumber: 148,
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
                                                lineNumber: 154,
                                                columnNumber: 11
                                            }, undefined)
                                        ]
                                    }, `twitch-sub-row-${sub.user_id}`, true, {
                                        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                        lineNumber: 134,
                                        columnNumber: 11
                                    }, undefined)
                                }, `twitch-sub-hbox-${sub.user_id}`, false, {
                                    fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                    lineNumber: 128,
                                    columnNumber: 18
                                }, undefined);
                            })
                        }, void 0, false, {
                            fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                            lineNumber: 125,
                            columnNumber: 9
                        }, undefined)
                    }, void 0, false, {
                        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                        lineNumber: 118,
                        columnNumber: 7
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                    backgroundColor: MOONSHOT_CORE_DARK,
                    width: "100%",
                    maxWidth: "400px",
                    minHeight: "200px",
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
                                lineNumber: 191,
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
                                lineNumber: 195,
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
                                lineNumber: 200,
                                columnNumber: 9
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                        lineNumber: 181,
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
                                                lineNumber: 235,
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
                                                lineNumber: 241,
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
                                                lineNumber: 246,
                                                columnNumber: 11
                                            }, undefined)
                                        ]
                                    }, `donation-row-${dispensing.id}`, true, {
                                        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                        lineNumber: 219,
                                        columnNumber: 11
                                    }, undefined)
                                }, `donation-row-hbox-${dispensing.id}`, false, {
                                    fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                    lineNumber: 213,
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
                                                    lineNumber: 279,
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
                                                    lineNumber: 285,
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
                                                    lineNumber: 290,
                                                    columnNumber: 11
                                                }, undefined)
                                            ]
                                        }, `donation-row-${donation.id}`, true, {
                                            fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                            lineNumber: 265,
                                            columnNumber: 11
                                        }, undefined)
                                    }, `donation-row-hbox-${donation.id}`, false, {
                                        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                                        lineNumber: 259,
                                        columnNumber: 18
                                    }, undefined);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                            lineNumber: 211,
                            columnNumber: 9
                        }, undefined)
                    }, void 0, false, {
                        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                        lineNumber: 206,
                        columnNumber: 7
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                    display: "flex",
                    flexDirection: "column"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                        children: "Manual Donation Input"
                    }, void 0, false, {
                        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                        lineNumber: 305,
                        columnNumber: 7
                    }, undefined),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                        children: "Name:\xa0"
                    }, void 0, false, {
                        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                        style: {
                            width: 50
                        },
                        value: manualDonoName,
                        onChange: (e)=>setManualDonoName(e.currentTarget.value)
                    }, void 0, false, {
                        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                        lineNumber: 306,
                        columnNumber: 33
                    }, undefined),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                        children: "Amount:\xa0"
                    }, void 0, false, {
                        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                        style: {
                            width: 50
                        },
                        value: manualDonoAmount,
                        onChange: (e)=>setManualDonoAmount(e.currentTarget.value)
                    }, void 0, false, {
                        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                        lineNumber: 307,
                        columnNumber: 35
                    }, undefined),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                        type: "submit",
                        onClick: ()=>manualEntry(),
                        children: "Submit"
                    }, void 0, false, {
                        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                        lineNumber: 308,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\dashboard\\example.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, undefined);
};
_s(App, "RFYAaKXaFeHqMIUv8AMxkYxyyOA=", false, function() {
    return [
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
    lineNumber: 323,
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

},function(__webpack_require__) {
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = () => ("d1b1350c7ee4e64e")
})();

}
);
//# sourceMappingURL=example.e7d166c58a092677.hot-update.js.map