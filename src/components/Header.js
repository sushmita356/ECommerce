import React from "react";
import '../App.css';
import { Navbar,Nav,Form,FormControl,Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "../App.css";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">ECommerce</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Phones</Nav.Link>
        </Nav>
        <Form inline>
        </Form>
      </Navbar>
    </div>
  );
}

export default Header;
