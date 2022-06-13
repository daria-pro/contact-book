export interface Contact {
  id: number;
  name: string;
  phone: string;
}

export interface ContactState {
  contacts: Contact[];
  loading: boolean;
  error: null | string;
  searchValue: string;
}

export enum ContactActionTypes {
  FETCH_CONTACTS = "FETCH_CONTACTS",
  FETCH_CONTACTS_SUCCESS = "FETCH_CONTACTS_SUCCESS",
  FETCH_CONTACTS_ERROR = "FETCH_CONTACTS_ERROR",
  ADD_CONTACT = "ADD_CONTACT",
  UPDATE_CONTACT = "UPDATE_CONTACT",
  REMOVE_CONTACT = "REMOVE_CONTACT",
  SEARCH_CONTACT = "SEARCH_CONTACT",
}

interface FetchContactsAction {
  type: ContactActionTypes.FETCH_CONTACTS;
}

interface FetchContactsSuccessAction {
  type: ContactActionTypes.FETCH_CONTACTS_SUCCESS;
  payload: any[];
}

interface FetchContactsErrorAction {
  type: ContactActionTypes.FETCH_CONTACTS_ERROR;
  payload: string;
}

interface AddContactAction {
  type: ContactActionTypes.ADD_CONTACT;
  payload: Contact;
}

interface UpdateContactAction {
  type: ContactActionTypes.UPDATE_CONTACT;
  payload: Contact;
}

interface RemoveContactAction {
  type: ContactActionTypes.REMOVE_CONTACT;
  payload: number;
}

interface SearchContactAction {
  type: ContactActionTypes.SEARCH_CONTACT;
  payload: string;
}

export type ContactAction =
  | FetchContactsAction
  | FetchContactsSuccessAction
  | FetchContactsErrorAction
  | AddContactAction
  | UpdateContactAction
  | RemoveContactAction
  | SearchContactAction;
