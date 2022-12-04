import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export class Topnav extends Component {
  render() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand as={Link} to="#">MedEX</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/admin/dashboard"> Dashboard </Nav.Link>
                <NavDropdown title="Accounts" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="#">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="admin/signout">Sign out</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="#">Contact</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link as={Link} to="#">Icon</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
  }
}

export default Topnav