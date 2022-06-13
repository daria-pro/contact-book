"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var Container_1 = require("react-bootstrap/Container");
var Dropdown_1 = require("react-bootstrap/esm/Dropdown");
var DropdownButton_1 = require("react-bootstrap/esm/DropdownButton");
var Table_1 = require("react-bootstrap/esm/Table");
var AddContactForm_1 = require("../AddContactForm/AddContactForm");
var useActions_1 = require("../../hooks/useActions");
var useTypedSelector_1 = require("../../hooks/useTypedSelector");
require("./contacts.scss");
var react_redux_2 = require("react-redux");
var contactReducer_1 = require("../../store/reducers/contactReducer");
var EditContactForm_1 = require("../EditContactForm/EditContactForm");
var react_bootstrap_1 = require("react-bootstrap");
var Contacts = function (props) {
    var _a = useTypedSelector_1.useTypedSelector(function (state) { return state.contact; }), contacts = _a.contacts, error = _a.error, loading = _a.loading;
    var fetchContacts = useActions_1.useActions().fetchContacts;
    var dispatch = react_redux_2.useDispatch();
    var _b = react_1.useState(false), addFormShow = _b[0], setAddFormShow = _b[1];
    var _c = react_1.useState(false), editFormShow = _c[0], setEditFormShow = _c[1];
    var _d = react_1.useState(0), id = _d[0], setId = _d[1];
    react_1.useEffect(function () {
        fetchContacts();
    }, []);
    var removeContact = function (contact) {
        dispatch(contactReducer_1.removeContactAction(contact.id));
    };
    var handleEditContact = function (id) {
        setEditFormShow(true);
        setId(id);
    };
    var handleReset = function () {
        fetchContacts();
    };
    var handleSearch = function (e) {
        var filterValue = e.target.value;
        props.searchContactAction && props.searchContactAction(filterValue);
    };
    if (loading) {
        return react_1["default"].createElement(react_bootstrap_1.Spinner, { className: "spinner", animation: "border" });
    }
    if (error) {
        return react_1["default"].createElement("h1", null, error);
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Container_1["default"], { "data-testid": "contact-1", className: "d-flex flex-column contacts-container" },
            react_1["default"].createElement("div", { className: "d-flex align-items-center  mx-auto justify-content-between col-12 top-actions-container" },
                react_1["default"].createElement(react_bootstrap_1.Button, { className: "h-50 mb-3", onClick: function () { return setAddFormShow(true); } }, "Add contact"),
                react_1["default"].createElement("div", { className: "d-flex mb-3 justify-content-between" },
                    react_1["default"].createElement(react_bootstrap_1.Form.Group, { className: "me-3" },
                        react_1["default"].createElement(react_bootstrap_1.Form.Control, { type: "text", placeholder: "Search by name", onChange: handleSearch })),
                    react_1["default"].createElement(react_bootstrap_1.Button, { onClick: handleReset, variant: "secondary" }, "Reset search"))),
            react_1["default"].createElement(Table_1["default"], { className: "contacts-table", size: "sm", striped: true, bordered: true, hover: true },
                react_1["default"].createElement("thead", null,
                    react_1["default"].createElement("tr", null,
                        react_1["default"].createElement("th", null, "Name"),
                        react_1["default"].createElement("th", null, "Phone number"),
                        react_1["default"].createElement("th", null, "Actions"))),
                react_1["default"].createElement("tbody", null, contacts.map(function (contact) { return (react_1["default"].createElement("tr", { key: contact.id },
                    react_1["default"].createElement("td", { className: "table-cell" }, contact.name),
                    react_1["default"].createElement("td", { className: "table-cell" }, contact.phone),
                    react_1["default"].createElement("td", null,
                        react_1["default"].createElement(DropdownButton_1["default"], { className: "dropdown-button", variant: "dark", title: "Actions", size: "sm" },
                            react_1["default"].createElement(Dropdown_1["default"].Item, { href: "#", onClick: function () { return handleEditContact(contact.id); } }, "Edit"),
                            react_1["default"].createElement(Dropdown_1["default"].Item, { href: "#", onClick: function () { return removeContact(contact); } }, "Delete"))))); })))),
        react_1["default"].createElement(AddContactForm_1["default"], { contacts: contacts, show: addFormShow, onHide: function () { return setAddFormShow(false); } }),
        react_1["default"].createElement(EditContactForm_1["default"], { id: id, show: editFormShow, onHide: function () { return setEditFormShow(false); } })));
};
var mapStateToProps = function (state) { return ({
    searchValue: state.contact.searchValue,
    contacts: state.contact.contacts
}); };
exports["default"] = react_redux_1.connect(mapStateToProps, { searchContactAction: contactReducer_1.searchContactAction })(Contacts);
