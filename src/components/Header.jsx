import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" bg="dark" variant="dark" expanded={expanded}>
      <Navbar.Brand href="#home">HIS PRESENCE CHURCH</Navbar.Brand>
      <Navbar.Toggle
        onClick={() => setExpanded(expanded ? false : "expanded")}
        aria-controls="basic-navbar-nav"
      >
        <FontAwesomeIcon icon={expanded ? faXmark : faBars} />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
            HOME
          </Nav.Link>
          <NavDropdown title="ABOUT" id="basic-nav-dropdown">
            <NavDropdown.Item
              as={Link}
              to="/about/new"
              onClick={() => setExpanded(false)}
            >
              I'M NEW
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/about/faqs"
              onClick={() => setExpanded(false)}
            >
              FAQS
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/about/who-we-are"
              onClick={() => setExpanded(false)}
            >
              WHO WE ARE
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/about/contact-us"
              onClick={() => setExpanded(false)}
            >
              CONTACT US
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="PROGRAMS & MINISTRIES"
            id="basic-nav-dropdown-programs"
          >
            <NavDropdown.Item
              as={Link}
              to="/programs/get-involved"
              onClick={() => setExpanded(false)}
            >
              GET INVOLVED
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/programs/women"
              onClick={() => setExpanded(false)}
            >
              WOMEN'S MINISTRY
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/programs/men"
              onClick={() => setExpanded(false)}
            >
              MEN'S MINISTRY
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/programs/children"
              onClick={() => setExpanded(false)}
            >
              CHILDREN
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link
            as={Link}
            to="/happening"
            onClick={() => setExpanded(false)}
          >
            WHAT'S HAPPENING
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
