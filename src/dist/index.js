"use strict";
exports.__esModule = true;
var client_1 = require("react-dom/client");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var store_1 = require("./store");
var App_1 = require("./App");
require("./main.scss");
var root = client_1["default"].createRoot(document.getElementById("root"));
root.render(React.createElement(react_redux_1.Provider, { store: store_1.store },
    React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(App_1["default"], null))));
