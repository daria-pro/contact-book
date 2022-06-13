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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.searchContactAction = exports.removeContactAction = exports.updateContactAction = exports.addContactAction = exports.contactReducer = void 0;
var contact_1 = require("../../types/contact");
var initialState = {
    contacts: [],
    loading: false,
    error: null,
    searchValue: ""
};
exports.contactReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case contact_1.ContactActionTypes.FETCH_CONTACTS:
            return __assign(__assign({}, state), { loading: true, error: null, contacts: [] });
        case contact_1.ContactActionTypes.FETCH_CONTACTS_SUCCESS:
            return __assign(__assign({}, state), { loading: false, error: null, contacts: action.payload });
        case contact_1.ContactActionTypes.FETCH_CONTACTS_ERROR:
            return __assign(__assign({}, state), { loading: false, error: action.payload, contacts: [] });
        case contact_1.ContactActionTypes.ADD_CONTACT:
            return __assign(__assign({}, state), { contacts: __spreadArrays([action.payload], state.contacts) });
        case contact_1.ContactActionTypes.UPDATE_CONTACT:
            return __assign(__assign({}, state), { contacts: state.contacts.map(function (item) {
                    if (item.id === action.payload.id) {
                        return {
                            id: item.id,
                            name: action.payload.name,
                            phone: action.payload.phone
                        };
                    }
                    return item;
                }) });
        case contact_1.ContactActionTypes.SEARCH_CONTACT:
            console.log("searching");
            return __assign(__assign({}, state), { contacts: state.contacts.filter(function (item) {
                    return item.name
                        .toLocaleLowerCase()
                        .includes(action.payload.toLocaleLowerCase());
                }), searchValue: action.payload });
        case contact_1.ContactActionTypes.REMOVE_CONTACT:
            return __assign(__assign({}, state), { contacts: state.contacts.filter(function (contact) { return contact.id !== action.payload; }) });
        default:
            return state;
    }
};
exports.addContactAction = function (payload) { return ({
    type: contact_1.ContactActionTypes.ADD_CONTACT,
    payload: payload
}); };
exports.updateContactAction = function (payload) { return ({
    type: contact_1.ContactActionTypes.UPDATE_CONTACT,
    payload: payload
}); };
exports.removeContactAction = function (payload) { return ({
    type: contact_1.ContactActionTypes.REMOVE_CONTACT,
    payload: payload
}); };
exports.searchContactAction = function (payload) { return function (dispatch) {
    dispatch({
        type: contact_1.ContactActionTypes.SEARCH_CONTACT,
        payload: payload
    });
}; };
