import React from "react";
import "./NavBar.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <div className="navbar__container__logo">
          <a className="navbar-brand text-white" href="/">
            <img
              src={require("../../Assets/logo192.png")}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Company"
            />{" "}
            <span className="navbar__container__logo__text text-4xl">
              BetterHealth
            </span>
          </a>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="text-center">
            <Nav.Link href="/welcome">Get Started</Nav.Link>
            <Nav.Link href="/home">Dashboard</Nav.Link>
            <Nav.Link href="/myweight/logs">Weights</Nav.Link>
            <Nav.Link href="/myfoods">Foods</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
