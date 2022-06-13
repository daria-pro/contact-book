import { Container } from "react-bootstrap";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <Container className="d-flex align-items-center justify-content-center h-100 ">
        <h1 id="about" className=" text-center">
          About
        </h1>
      </Container>
    </div>
  );
};

export default About;
