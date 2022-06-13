"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var Button_1 = require("react-bootstrap/esm/Button");
var Form_1 = require("react-bootstrap/esm/Form");
var react_redux_1 = require("react-redux");
var useTypedSelector_1 = require("../../hooks/useTypedSelector");
var contactReducer_1 = require("../../store/reducers/contactReducer");
var react_bootstrap_1 = require("react-bootstrap");
var AddContactForm = function (props) {
    var dispatch = react_redux_1.useDispatch();
    var contacts = useTypedSelector_1.useTypedSelector(function (state) { return state.contact; }).contacts;
    var _a = react_1.useState(""), name = _a[0], setName = _a[1];
    var _b = react_1.useState(""), phone = _b[0], setPhone = _b[1];
    var handleAddContact = function () {
        dispatch(contactReducer_1.addContactAction({
            id: contacts[contacts.length - 1].id + 1,
            name: name,
            phone: phone
        }));
        setName("");
        setPhone("");
        props.onHide && props.onHide();
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(react_bootstrap_1.Modal, __assign({}, props, { size: "lg", "aria-labelledby": "contained-modal-title-vcenter", centered: true }),
            React.createElement(react_bootstrap_1.Modal.Header, { closeButton: true },
                React.createElement(react_bootstrap_1.Modal.Title, { id: "contained-modal-title-vcenter" }, "Add contact")),
            React.createElement(react_bootstrap_1.Modal.Body, null,
                React.createElement(Form_1["default"], { className: "col-md-5 mx-auto" },
                    React.createElement(Form_1["default"].Group, { className: "mb-3" },
                        React.createElement(Form_1["default"].Label, null, "Contact name"),
                        React.createElement(Form_1["default"].Control, { type: "text", value: name, placeholder: "Enter name", onChange: function (event) {
                                setName(event.target.value);
                            } })),
                    React.createElement(Form_1["default"].Group, { className: "mb-3" },
                        React.createElement(Form_1["default"].Label, null, "Phone number"),
                        React.createElement(Form_1["default"].Control, { type: "tel", value: phone, placeholder: "Phone number", onChange: function (event) {
                                setPhone(event.target.value);
                            } })))),
            React.createElement(react_bootstrap_1.Modal.Footer, null,
                React.createElement(Button_1["default"], { variant: "primary", onClick: handleAddContact }, "Add contact"),
                React.createElement(Button_1["default"], { variant: "secondary", onClick: props.onHide }, "Close")))));
};
exports["default"] = AddContactForm;
