"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var About_1 = require("./components/About/About");
var Contacts_1 = require("./components/Contacts/Contacts");
var Home_1 = require("./components/Home/Home");
var Navigation_1 = require("./components/Navigation/Navigation");
var NotFound_1 = require("./components/NotFound/NotFound");
var App = function () {
    return (React.createElement("div", { className: "app-wrapper" },
        React.createElement(Navigation_1["default"], null),
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/contact-book", element: React.createElement(Home_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "/contact-book/contacts", element: React.createElement(Contacts_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "/contact-book/about", element: React.createElement(About_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "*", element: React.createElement(NotFound_1["default"], null) }))));
};
exports["default"] = App;
