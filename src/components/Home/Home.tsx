import { Component } from "react";
import Container from "react-bootstrap/Container";
import "./home.scss";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Container className="d-flex align-items-center justify-content-center h-100">
          <h1 id="home" className="text-light text-center">
            Home
          </h1>
        </Container>
      </div>
    );
  }
}

export default Home;
