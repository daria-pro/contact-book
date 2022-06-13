import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/esm/Dropdown";
import DropdownButton from "react-bootstrap/esm/DropdownButton";
import Table from "react-bootstrap/esm/Table";
import { Contact, ContactState } from "../../types/contact";
import AddContactForm from "../AddContactForm/AddContactForm";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./contacts.scss";
import { useDispatch } from "react-redux";
import {
  removeContactAction,
  searchContactAction,
} from "../../store/reducers/contactReducer";
import EditContactForm from "../EditContactForm/EditContactForm";
import { Button, Form, Spinner } from "react-bootstrap";
import { RootState } from "../../store/reducers";

interface StateProps {
  searchContactAction?: (payload: string) => ContactState;
  searchValue?: string;
  contacts: Contact[];
}

type Props = StateProps;

const Contacts: React.FC<Props> = (props) => {
  const { contacts, error, loading } = useTypedSelector(
    (state) => state.contact
  );
  const { fetchContacts } = useActions();
  const dispatch = useDispatch();
  const [addFormShow, setAddFormShow] = useState(false);
  const [editFormShow, setEditFormShow] = useState(false);
  const [id, setId] = useState<number>(0);

  useEffect(() => {
    fetchContacts();
  }, []);

  const removeContact = (contact: Contact) => {
    dispatch(removeContactAction(contact.id));
  };

  const handleEditContact = (id: number) => {
    setEditFormShow(true);
    setId(id);
  };

  const handleReset = () => {
    fetchContacts();
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = e.target.value;
    props.searchContactAction && props.searchContactAction(filterValue);
  };

  if (loading) {
    return <Spinner className="spinner" animation="border" />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <Container
        data-testid="contact-1"
        className="d-flex flex-column contacts-container"
      >
        <div className="d-flex align-items-center  mx-auto justify-content-between col-12 top-actions-container">
          <Button className="h-50 mb-3" onClick={() => setAddFormShow(true)}>
            Add contact
          </Button>
          <div className="d-flex mb-3 justify-content-between align-items-center">
            <Form.Group className="me-3">
              <Form.Control
                type="text"
                placeholder="Search by name"
                onChange={handleSearch}
              />
            </Form.Group>
            <Button onClick={handleReset} variant="secondary">
              Reset search
            </Button>
          </div>
        </div>
        <Table className="contacts-table" size="sm" striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact: Contact) => (
              <tr key={contact.id}>
                <td className="table-cell">{contact.name}</td>
                <td className="table-cell">{contact.phone}</td>
                <td>
                  <DropdownButton
                    className="dropdown-button"
                    variant="dark"
                    title="Actions"
                    size="sm"
                  >
                    <Dropdown.Item
                      href="#"
                      onClick={() => handleEditContact(contact.id)}
                    >
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      onClick={() => removeContact(contact)}
                    >
                      Delete
                    </Dropdown.Item>
                  </DropdownButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <AddContactForm
        contacts={contacts}
        show={addFormShow}
        onHide={() => setAddFormShow(false)}
      />
      <EditContactForm
        id={id}
        show={editFormShow}
        onHide={() => setEditFormShow(false)}
      />
    </>
  );
};

const mapStateToProps = (state: RootState): StateProps => ({
  searchValue: state.contact.searchValue,
  contacts: state.contact.contacts,
});

export default connect(mapStateToProps, { searchContactAction })(Contacts);
