"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useWindowSize = function () {
    var _a = react_1.useState({
        width: window.innerWidth,
        height: window.innerHeight
    }), windowSize = _a[0], setWindowSize = _a[1];
    react_1.useEffect(function () {
        window.onresize = function () {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };
    }, []);
    return { width: windowSize.width, height: windowSize.height };
};
exports.default = useWindowSize;
