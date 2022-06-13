"use strict";
exports.__esModule = true;
var contact_1 = require("../../types/contact");
describe("Contacts reducer", function () {
    test("Add contact, action type - AddContactAction", function () {
        var originalState = {};
        var expectedState = { id: 1, name: "Contact 1" };
        var testAction = {
            type: contact_1.ContactActionTypes.ADD_CONTACT,
            payload: { id: 1, name: "Contact 1" }
        };
        var actualState = Redux.contacts(originalState, testAction);
        expect(actualState).toEqual(expectedState);
    });
});
