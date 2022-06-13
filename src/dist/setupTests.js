"use strict";
exports.__esModule = true;
var enzyme_1 = require("enzyme");
var enzyme_adapter_react_16_1 = require("enzyme-adapter-react-16");
enzyme_1["default"].configure({
    adapter: new enzyme_adapter_react_16_1["default"](),
    disableLifecycleMethods: true
});
