import {
  Contact,
  ContactAction,
  ContactActionTypes,
  ContactState,
} from "../../types/contact";

const initialState: ContactState = {
  contacts: [],
  loading: false,
  error: null,
  searchValue: "",
};

export const contactReducer = (
  state = initialState,
  action: ContactAction
): ContactState => {
  switch (action.type) {
    case ContactActionTypes.FETCH_CONTACTS:
      return { ...state, loading: true, error: null, contacts: [] };
    case ContactActionTypes.FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        contacts: action.payload,
      };
    case ContactActionTypes.FETCH_CONTACTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        contacts: [],
      };
    case ContactActionTypes.ADD_CONTACT:
      return { ...state, contacts: [action.payload, ...state.contacts] };

    case ContactActionTypes.UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((item) => {
          if (item.id === action.payload.id) {
            return {
              id: item.id,
              name: action.payload.name,
              phone: action.payload.phone,
            };
          }
          return item;
        }),
      };
    case ContactActionTypes.SEARCH_CONTACT:
      console.log("searching");
      return {
        ...state,
        contacts: state.contacts.filter((item) =>
          item.name
            .toLocaleLowerCase()
            .includes(action.payload.toLocaleLowerCase())
        ),
        searchValue: action.payload,
      };
    case ContactActionTypes.REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const addContactAction = (payload: Contact) => ({
  type: ContactActionTypes.ADD_CONTACT,
  payload,
});
export const updateContactAction = (payload: Contact) => ({
  type: ContactActionTypes.UPDATE_CONTACT,
  payload,
});
export const removeContactAction = (payload: number) => ({
  type: ContactActionTypes.REMOVE_CONTACT,
  payload,
});

export const searchContactAction = (payload: string) => (dispatch: any) => {
  dispatch({
    type: ContactActionTypes.SEARCH_CONTACT,
    payload,
  });
};
