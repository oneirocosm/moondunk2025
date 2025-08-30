"use strict";
self["webpackHotUpdatemoondunk2025"]("total", {
"./src/browser/graphics/total.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js");
/* ESM import */var _nodecg_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/.pnpm/@nodecg+react-hooks@1.0.3_@types+express@5.0.3_reflect-metadata@0.2.2_typescript@5.6.2/node_modules/@nodecg/react-hooks/esm/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* ESM import */var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/browser/render.ts");
/* ESM import */var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/browser/graphics/css/style.css");
/* ESM import */var _components_total_bucket_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/browser/graphics/components/total-bucket.png");
/* ESM import */var react_wavify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/.pnpm/react-wavify@1.11.1_react@18.2.0/node_modules/react-wavify/lib/index.module.js");
/* ESM import */var _components_useIncrementNumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/browser/graphics/components/useIncrementNumber.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.4.3_react-refresh@0.17.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();







const MOONSHOT_CORE_DARK = '#040328';
const MOONSHOT_EXTRA_LIGHT_BLUE = '#A8BDF0';
const MOONSHOT_CORE_YELLOW = '#FFEE83';
const MOONSHOT_EXTRA_GOLD = '#FFC022';
const App = ()=>{
    var _nodecg_bundleConfig, _nodecg_bundleConfig1, _nodecg_bundleConfig2, _nodecg_bundleConfig3;
    _s();
    const [queuedDonations, _] = (0,_nodecg_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useReplicant)('queueddonations');
    const [total, setTotal] = (0,_nodecg_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useReplicant)("total", {
        bundle: "nodecg-tiltify"
    });
    //const [total, setTotal] = useReplicant<number>("faketotal");
    const [overriddenTotal, setOverriddenTotal] = (0,_nodecg_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useReplicant)("overriddentotal");
    const [dispensing, setDispensing] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(undefined);
    const [delayedTotal, setDelayedTotal] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(total ?? 0);
    const totalDisplay = Math.floor((0,_components_useIncrementNumber__WEBPACK_IMPORTED_MODULE_6__.useIncrementNumber)(delayedTotal ?? 0));
    const [waterfallSegments, setWaterfallSegments] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);
    const [trackingTotal, setTrackingTotal] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(total ?? 0);
    const combinedTotal = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(()=>{
        return overriddenTotal || (total ?? 0);
    }, [
        total,
        overriddenTotal
    ]);
    // this can be buggy but it is necessary in a reset
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{
        if (waterfallSegments.length == 0 && combinedTotal != undefined) {
            setTrackingTotal(combinedTotal);
            setDelayedTotal(combinedTotal);
        }
        if (combinedTotal != undefined && Math.abs(combinedTotal - delayedTotal) > 100) {
            setTrackingTotal(combinedTotal);
            setDelayedTotal(combinedTotal);
        }
    }, [
        waterfallSegments.length
    ]);
    const yScaleFactor = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(()=>{
        const target = nodecg.bundleConfig.MOONDUNK_TARGET ?? 2000;
        const minScale = 1;
        const maxScale = 41;
        const amount = delayedTotal ?? 0;
        const ratio = amount / target;
        return Math.max(minScale, Math.min(maxScale, minScale * (1 - ratio) + maxScale * ratio));
    }, [
        delayedTotal
    ]);
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{
        if (queuedDonations == undefined || queuedDonations.length == 0) {
            setDispensing(undefined);
            return;
        }
        setDispensing(queuedDonations[0]);
    }, [
        queuedDonations
    ]);
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{
        if (dispensing == undefined) {
            return;
        }
        ;
        const newSegment = {
            id: dispensing.id,
            top: 68,
            height: 0,
            expectedAmount: trackingTotal + dispensing.amountDisplay
        };
        setTrackingTotal((current)=>current + dispensing.amountDisplay);
        setWaterfallSegments((current)=>[
                ...current,
                newSegment
            ]);
    }, [
        dispensing === null || dispensing === void 0 ? void 0 : dispensing.id
    ]);
    const waveBottom = 45 + 22.5 * yScaleFactor;
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{
        const timeout = setTimeout(()=>{
            setWaterfallSegments((current)=>{
                const newSegments = current.map((segment)=>{
                    if (segment.id == (dispensing === null || dispensing === void 0 ? void 0 : dispensing.id)) {
                        return {
                            ...segment,
                            height: Math.min(segment.height + 2, 1012 - waveBottom)
                        };
                    }
                    if (segment.top + segment.height < 1078 - waveBottom) {
                        return {
                            ...segment,
                            top: Math.max(0, segment.top + 2)
                        };
                    }
                    const cyclesRemaining = Math.max(Math.floor(segment.height / 2), 1);
                    const difference = Math.max(0, segment.expectedAmount - delayedTotal);
                    const dAmount = difference / cyclesRemaining;
                    setDelayedTotal((current)=>Math.min(current + dAmount, combinedTotal ?? 0));
                    return {
                        ...segment,
                        top: Math.max(0, segment.top + 2),
                        height: Math.max(0, segment.height - 2)
                    };
                });
                return newSegments.filter((segment)=>segment.height != 0);
            });
        }, 5);
        return ()=>clearTimeout(timeout);
    }, [
        waterfallSegments,
        dispensing === null || dispensing === void 0 ? void 0 : dispensing.id
    ]);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
            position: "absolute",
            background: `url(${_components_total_bucket_png__WEBPACK_IMPORTED_MODULE_5__})`,
            width: 208,
            height: 1080,
            fontFamily: "Exo2",
            color: MOONSHOT_CORE_YELLOW,
            textShadow: `-2px -2px 0 ${MOONSHOT_CORE_DARK}, 2px -2px 0 ${MOONSHOT_CORE_DARK}, -2px 2px 0 ${MOONSHOT_CORE_DARK}, 2px 2px 0 ${MOONSHOT_CORE_DARK}`,
            fontSize: "26px"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                    position: "absolute",
                    transformOrigin: "bottom left",
                    left: 90,
                    bottom: 45,
                    width: 100,
                    height: 22.5,
                    transform: `scaleY(${yScaleFactor})`,
                    backgroundColor: MOONSHOT_EXTRA_LIGHT_BLUE,
                    opacity: 0.9,
                    zIndex: -1
                }
            }, void 0, false, {
                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\graphics\\total.tsx",
                lineNumber: 129,
                columnNumber: 9
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                    position: "absolute",
                    transformOrigin: "bottom left",
                    left: 90,
                    bottom: 45,
                    width: 100,
                    height: 22,
                    backgroundColor: MOONSHOT_EXTRA_LIGHT_BLUE,
                    opacity: 0.9,
                    zIndex: -1
                }
            }, void 0, false, {
                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\graphics\\total.tsx",
                lineNumber: 141,
                columnNumber: 9
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_wavify__WEBPACK_IMPORTED_MODULE_7__["default"], {
                fill: MOONSHOT_EXTRA_LIGHT_BLUE,
                paused: false,
                style: {
                    position: "absolute",
                    transformOrigin: "bottom left",
                    left: 90,
                    bottom: waveBottom,
                    width: 100,
                    height: 22.5,
                    transform: `scaleY(2)`,
                    opacity: 0.9,
                    zIndex: -1
                },
                options: {
                    height: 20,
                    amplitude: 10,
                    speed: 0.3,
                    points: 2
                }
            }, void 0, false, {
                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\graphics\\total.tsx",
                lineNumber: 152,
                columnNumber: 9
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_wavify__WEBPACK_IMPORTED_MODULE_7__["default"], {
                fill: MOONSHOT_EXTRA_LIGHT_BLUE,
                paused: false,
                style: {
                    position: "absolute",
                    transformOrigin: "bottom left",
                    left: 90,
                    bottom: waveBottom,
                    width: 100,
                    height: 22.5,
                    transform: `scaleY(2)`,
                    opacity: 0.9,
                    zIndex: -1
                },
                options: {
                    height: 20,
                    amplitude: 10,
                    speed: 0.6,
                    points: 1
                }
            }, void 0, false, {
                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\graphics\\total.tsx",
                lineNumber: 172,
                columnNumber: 9
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_wavify__WEBPACK_IMPORTED_MODULE_7__["default"], {
                fill: MOONSHOT_EXTRA_LIGHT_BLUE,
                paused: false,
                style: {
                    position: "absolute",
                    transformOrigin: "bottom left",
                    left: 90,
                    bottom: waveBottom,
                    width: 100,
                    height: 22.5,
                    transform: `scaleY(2)`,
                    opacity: 0.9,
                    zIndex: -1
                },
                options: {
                    height: 20,
                    amplitude: 10,
                    speed: 0.5,
                    points: 2
                }
            }, void 0, false, {
                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\graphics\\total.tsx",
                lineNumber: 192,
                columnNumber: 9
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                style: {
                    position: "absolute",
                    left: 125,
                    bottom: 54
                },
                children: "$0"
            }, void 0, false, {
                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\graphics\\total.tsx",
                lineNumber: 212,
                columnNumber: 9
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                style: {
                    position: "absolute",
                    left: 110,
                    bottom: 278
                },
                children: [
                    "$",
                    Math.floor((((_nodecg_bundleConfig = nodecg.bundleConfig) === null || _nodecg_bundleConfig === void 0 ? void 0 : _nodecg_bundleConfig.MOONDUNK_TARGET) ?? 2000) / 4)
                ]
            }, void 0, true, {
                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\graphics\\total.tsx",
                lineNumber: 217,
                columnNumber: 9
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                style: {
                    position: "absolute",
                    left: 103,
                    bottom: 502
                },
                children: [
                    "$",
                    Math.floor((((_nodecg_bundleConfig1 = nodecg.bundleConfig) === null || _nodecg_bundleConfig1 === void 0 ? void 0 : _nodecg_bundleConfig1.MOONDUNK_TARGET) ?? 2000) / 2)
                ]
            }, void 0, true, {
                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\graphics\\total.tsx",
                lineNumber: 222,
                columnNumber: 9
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                style: {
                    position: "absolute",
                    left: 103,
                    bottom: 728
                },
                children: [
                    "$",
                    Math.floor((((_nodecg_bundleConfig2 = nodecg.bundleConfig) === null || _nodecg_bundleConfig2 === void 0 ? void 0 : _nodecg_bundleConfig2.MOONDUNK_TARGET) ?? 2000) * 3 / 4)
                ]
            }, void 0, true, {
                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\graphics\\total.tsx",
                lineNumber: 227,
                columnNumber: 9
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                style: {
                    position: "absolute",
                    left: 95,
                    bottom: 952
                },
                children: [
                    "$",
                    Math.floor(((_nodecg_bundleConfig3 = nodecg.bundleConfig) === null || _nodecg_bundleConfig3 === void 0 ? void 0 : _nodecg_bundleConfig3.MOONDUNK_TARGET) ?? 2000),
                    "+"
                ]
            }, void 0, true, {
                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\graphics\\total.tsx",
                lineNumber: 232,
                columnNumber: 9
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                style: {
                    position: "absolute",
                    left: 106,
                    bottom: 1014,
                    fontSize: 34,
                    color: MOONSHOT_EXTRA_GOLD
                },
                children: [
                    "$",
                    totalDisplay
                ]
            }, void 0, true, {
                fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\graphics\\total.tsx",
                lineNumber: 237,
                columnNumber: 9
            }, undefined),
            waterfallSegments.map((segmentInfo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    style: {
                        position: "absolute",
                        background: MOONSHOT_EXTRA_LIGHT_BLUE,
                        width: 10,
                        height: segmentInfo.height,
                        top: segmentInfo.top,
                        left: 95,
                        zIndex: -1,
                        transformOrigin: "top left"
                    }
                }, `waterfall-segment-${segmentInfo.id}`, false, {
                    fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\graphics\\total.tsx",
                    lineNumber: 244,
                    columnNumber: 49
                }, undefined))
        ]
    }, void 0, true, {
        fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\graphics\\total.tsx",
        lineNumber: 119,
        columnNumber: 10
    }, undefined);
};
_s(App, "R3rtA1/5oPqUe4eX5uANR6fgOzY=", false, function() {
    return [
        _nodecg_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useReplicant,
        _nodecg_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useReplicant,
        _nodecg_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useReplicant,
        _components_useIncrementNumber__WEBPACK_IMPORTED_MODULE_6__.useIncrementNumber
    ];
});
_c = App;
(0,_render__WEBPACK_IMPORTED_MODULE_3__.render)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, {}, void 0, false, {
    fileName: "C:\\Users\\oneirocosm\\Code\\Repositories\\oncemore\\moondunk2025\\src\\browser\\graphics\\total.tsx",
    lineNumber: 257,
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
__webpack_require__.h = () => ("ad4eba59cb1f103f")
})();

}
);
//# sourceMappingURL=total.8e8d2f4ce7368412.hot-update.js.map