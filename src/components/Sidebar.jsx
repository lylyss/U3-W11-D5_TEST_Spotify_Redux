import { Col, Nav, Button, Row, Form, InputGroup } from "react-bootstrap";
import "../App.css";

const Sidebar = () => (
  <Col xs={12} md={2} className="bg-black text-white vh-100 position-fixed px-2" style={{ zIndex: 1000, width: "100%", maxWidth: "155px" }}>
    <div className="d-flex flex-column p-0 py-3 h-100">
      <div className="d-flex pe-5">
        <img className="logoSpotify" src="src/assets/logo.png" alt="logo spotify" style={{ width: "100%" }} />
      </div>
      <Nav className="flex-column">
        <Nav.Link href="/" className="text-secondary mt-3 ps-0">
          <i className="bi bi-house-door-fill"></i>
          <span className="ms-1 btn ps-0 text-secondary" style={{ fontSize: 12 }}>
            Home
          </span>
        </Nav.Link>
        <Nav.Link href="/favorites" className="text-secondary ps-0 pt-0 pb-0">
          <i className="bi bi-book-fill"></i>
          <span className="btn ps-0 ms-1 text-secondary" style={{ fontSize: 12 }}>
            Your Library
          </span>
        </Nav.Link>
        <InputGroup className="mt-3">
          <Form.Control variant="light" type="text" placeholder="Search" className="text-black border-0 rounded-start py-0" style={{ fontSize: 10 }} />
          <Button variant="outline-secondary" className="rounded-end p-1 py-1" style={{ fontSize: 10 }}>
            GO
          </Button>
        </InputGroup>
      </Nav>

      <div className="mt-auto px-2">
        <Button variant="light" className="w-100 mb-2 rounded-5 py-1 sign-up-btn" style={{ fontSize: 12 }}>
          Sign Up
        </Button>
        <Button variant="outline-light" className="w-100 rounded-5 py-1" style={{ fontSize: 12 }}>
          Login
        </Button>
        <Row className="mt-2 mb-2 text-center">
          <a className="text-secondary text-decoration-none col-12 px-0" style={{ fontSize: 11 }} href="#">
            Cookie Policy | Privacy
          </a>
        </Row>
      </div>
    </div>
  </Col>
);

export default Sidebar;
