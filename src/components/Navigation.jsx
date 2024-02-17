import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";

function Navigation() {
  return (
    <div>
      <Nav
        defaultActiveKey="/"
        className="justify-content-end"
        variant="underline"
      >
        <Nav.Item>
          <LinkContainer to="/">
            <Nav.Link>About Me</Nav.Link>
          </LinkContainer>
        </Nav.Item>

        <Nav.Item>
          <LinkContainer to="/portfolio">
            <Nav.Link eventKey="/portfolio">Portfolio</Nav.Link>
          </LinkContainer>
        </Nav.Item>

        <Nav.Item>
          <LinkContainer to="/contact">
            <Nav.Link eventKey="/contact">Contact</Nav.Link>
          </LinkContainer>
        </Nav.Item>

        <Nav.Item>
          <LinkContainer to="/resume">
            <Nav.Link eventKey="/resume">Resume</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Navigation;
