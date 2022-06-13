import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "./navigation.scss";

function Navigation() {
  return (
    <Navbar
      collapseOnSelect={true}
      expand="lg"
      bg="dark"
      variant="dark"
      className="nav"
    >
      <Container className="nav-container px-3 px-md-5 p-lg-0">
        <Navbar.Brand href="#home">CONTACT BOOK</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contacts" className="nav-link">
                Contacts
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;