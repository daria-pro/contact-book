import { FC, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { useDispatch } from "react-redux";
import { Contact } from "../../types/contact";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { addContactAction } from "../../store/reducers/contactReducer";
import { Modal, ModalProps } from "react-bootstrap";

interface OwnProps {
  contacts: Contact[];
}

type Props = OwnProps & ModalProps;

const AddContactForm: FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { contacts } = useTypedSelector((state) => state.contact);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleAddContact = () => {
    dispatch(
      addContactAction({
        id: contacts[contacts.length - 1].id + 1,
        name,
        phone,
      })
    );
    setName("");
    setPhone("");
    props.onHide && props.onHide();
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add contact
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="col-md-5 mx-auto">
            <Form.Group className="mb-3">
              <Form.Label>Contact name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                placeholder="Enter name"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="tel"
                value={phone}
                placeholder="Phone number"
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleAddContact}>
            Add contact
          </Button>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddContactForm;
