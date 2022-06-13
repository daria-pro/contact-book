"use strict";
exports.__esModule = true;
var Navbar_1 = require("react-bootstrap/Navbar");
var Nav_1 = require("react-bootstrap/Nav");
var Container_1 = require("react-bootstrap/Container");
var react_router_dom_1 = require("react-router-dom");
require("./navigation.scss");
function Navigation() {
    return (React.createElement(Navbar_1["default"], { collapseOnSelect: true, expand: "lg", bg: "dark", variant: "dark", className: "nav" },
        React.createElement(Container_1["default"], { className: "nav-container px-3 px-md-5 p-lg-0" },
            React.createElement(Navbar_1["default"].Brand, { href: "#home" }, "CONTACT BOOK"),
            React.createElement(Navbar_1["default"].Toggle, { "aria-controls": "responsive-navbar-nav" }),
            React.createElement(Navbar_1["default"].Collapse, { id: "responsive-navbar-nav" },
                React.createElement(Nav_1["default"], { className: "ms-auto" },
                    React.createElement(Nav_1["default"].Link, null,
                        React.createElement(react_router_dom_1.Link, { to: "/", className: "nav-link" }, "Home")),
                    React.createElement(Nav_1["default"].Link, null,
                        React.createElement(react_router_dom_1.Link, { to: "/contacts", className: "nav-link" }, "Contacts")),
                    React.createElement(Nav_1["default"].Link, null,
                        React.createElement(react_router_dom_1.Link, { to: "/about", className: "nav-link" }, "About")))))));
}
exports["default"] = Navigation;
