import { SyntheticEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { updateContactAction } from "../../store/reducers/contactReducer";
import { Modal, ModalProps } from "react-bootstrap";

interface OwnProps {
  id: number;
}

type Props = OwnProps & ModalProps;

const EditContactForm: React.FC<Props> = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const { contacts } = useTypedSelector((state) => state.contact);
  const currentContact = id && contacts.find((contact) => contact.id === id);

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setPhone(currentContact.phone);
    }
  }, [currentContact]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (currentContact) {
      const data = {
        id: currentContact.id,
        name,
        phone,
      };
      console.log(data);
      dispatch(updateContactAction(data));
      props.onHide && props.onHide();
    }

    // toast.success("Contact updated successfully!!");
  };

  return (
    <div className="container d-flex flex-column contacts-container justify-content-between">
      <div className="row">
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit contact
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
            <Button variant="primary" onClick={handleSubmit}>
              Update contact
            </Button>
            <Button variant="secondary" onClick={props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default EditContactForm;
