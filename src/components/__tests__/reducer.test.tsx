import { ContactActionTypes } from "../../types/contact";

describe("Contacts reducer", () => {
  test("Add contact, action type - AddContactAction", () => {
    const originalState = {};
    const expectedState = { id: 1, name: "Contact 1" };
    const testAction = {
      type: ContactActionTypes.ADD_CONTACT,
      payload: { id: 1, name: "Contact 1" },
    };
    const actualState = Redux.contacts(originalState, testAction);
    expect(actualState).toEqual(expectedState);
  });
});
