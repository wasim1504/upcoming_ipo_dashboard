import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";

const Header = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Item>
            <NavLink to="/dashboard" className="nav-link">
              Home
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/exchangeRates" className="nav-link">
              ExchangeRates
            </NavLink>
          </Nav.Item>
        </Nav>
      </Container>
      <Logout />
    </Navbar>
  );
};

export default Header;
