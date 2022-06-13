"use strict";
exports.__esModule = true;
exports.store = void 0;
var redux_1 = require("redux");
var redux_thunk_1 = require("redux-thunk");
var reducers_1 = require("./reducers");
exports.store = redux_1.createStore(reducers_1.rootReducer, redux_1.applyMiddleware(redux_thunk_1["default"]));
