import axios from "axios";
import { Dispatch } from "react";
import { ContactAction, ContactActionTypes } from "../../types/contact";

export const fetchContacts = () => {
  return async (dispatch: Dispatch<ContactAction>) => {
    try {
      dispatch({ type: ContactActionTypes.FETCH_CONTACTS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setTimeout(() => {
        dispatch({
          type: ContactActionTypes.FETCH_CONTACTS_SUCCESS,
          payload: response.data,
        });
      }, 1000);
    } catch {
      dispatch({
        type: ContactActionTypes.FETCH_CONTACTS_ERROR,
        payload: "There was an error",
      });
    }
  };
};
